import express, { Request, Response } from 'express';
import { db } from '../db';
import * as orderModel from '../models/order';
import { Order, BasicOrder } from '../types/order';
const orderRouter = express.Router();

orderRouter.get('/', async (req: Request, res: Response) => {
  orderModel.findAll((err: Error, orders: Order[]) => {
    if (err) {
      return res.status(500).json({ errorMessage: err.message });
    }
    res.status(200).json({ data: orders });
  });
});

export { orderRouter };
