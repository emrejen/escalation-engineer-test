PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE Product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    description VARCHAR(255),
    instock_quantity INT,
    price DECIMAL(8, 2)
);
INSERT INTO Product VALUES(1,'Apple MacBook Pro','15 inch, i7, 16GB RAM',5,667);
CREATE TABLE Customer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    password VARCHAR(255),
    email VARCHAR(255) UNIQUE
);
INSERT INTO Customer VALUES(1,'Anjalee','2w33he94yg4mx88j9j2hy4uhd32w','anjalee@gmail.com');
INSERT INTO Customer VALUES(17154,'Helmer','79486186-3934-4a9b-a0e7-b687fbe41c6a','Christop.Feeney19@yahoo.com');
INSERT INTO Customer VALUES(8570,'Flavie','d8d74f9b-2c92-488b-9c92-ccdc5a69a96d','Ruth.Durgan@hotmail.com');
INSERT INTO Customer VALUES(6548,'Jazmyn','93885b1f-26d5-4d58-a915-c8107c4d3f28','Anika76@hotmail.com');
INSERT INTO Customer VALUES(17231,'Rubye','6a8b6775-b7b2-4eef-b9b5-124fe396ec82','Chris23@hotmail.com');
INSERT INTO Customer VALUES(8890,'Casimer','8fc6e569-1d5f-4ad3-a9fb-e8e3c599b07c','Favian_Mills@yahoo.com');
INSERT INTO Customer VALUES(8431,'Samara','9155d480-db2d-4d4f-976f-d35e8e80b8dd','Theron.Tremblay@gmail.com');
CREATE TABLE ProductOrder (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    customer_id INT,
    product_quantity INT,
    FOREIGN KEY (product_id) REFERENCES Product(id),
    FOREIGN KEY (customer_id) REFERENCES Customer(id)
);
INSERT INTO ProductOrder VALUES(1,1,1,1);
INSERT INTO ProductOrder VALUES(16586,1,1,25);
INSERT INTO ProductOrder VALUES(17823,1,1,44);
INSERT INTO ProductOrder VALUES(17842,1,1,231);
INSERT INTO ProductOrder VALUES(17617,1,1,455);
COMMIT;
