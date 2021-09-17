import { Order, OrderWithDetails } from '../types/order';
import { db } from '../db';
import { RowDataPacket } from 'mysql2';

export const findAll = (callback: Function) => {
  const sql = `
      SELECT 
        o.*, 
        p.*,
        c.name AS customer_name,
        c.email
      FROM ProductOrders AS o 
      INNER JOIN Customer AS c ON c.id=o.customer_id
      INNER JOIN Product AS p ON p.id=o.product_id;`;

  db.all(sql, (err, result) => {
    if (err) {
      callback(err);
      console.error(err);
    }

    const rows = <RowDataPacket[]>result;
    const orders: Order[] = [];

    rows.forEach((row) => {
      const order: OrderWithDetails = {
        orderId: row.order_id,
        customer: {
          id: row.customer_id,
          name: row.customer_name,
          email: row.email,
        },
        product: {
          id: row.product_id,
          name: row.name,
          description: row.description,
          instockQuantity: row.instock_quantity,
          price: row.price,
        },
        productQuantity: row.product_quantity,
      };
      orders.push(order);
    });
    callback(null, orders);
  });
};
