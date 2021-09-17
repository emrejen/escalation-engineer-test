### Cymbio escalation engineer test

<p align="center">
    <img src="src/public/img/dashboard-view.png" width="400">
</p>
This repo is for the purpose of testing how an escalation/support engineer debugs issues in a code base that he is not familiar with.

This project is a simple application (not more complicated that any university type CRUD project).
It has 2 problems - a sql one, and a simile javascript one one client side.

Has both client and server side bugs to find and fix

### The scenario

1. Run the project and go to http://localhost:3000. This will open in the main dashboard view - all values have absolutely no meaning - it's just for show and to give the impression that this is a real application.
2. Click on the `Orders` link on the left side bar.
3. The Orders page will open, and the no data will be shown on the main table. Opening the console will show some errors, and refreshing the page will reveal that the server has cracked.
4. Help the candidate to run the server again and again as needed
5. Once the server side sql issue is resolved the next problem will be the duplication of the data that is returned from the server.

### The issues

1. Open `./src/models/order.ts` and look for the `findAll` function (line 5).
   In the `sql` change the table name from `ProductOrders` to `ProductOrder` (line 12).
2. Open `./src/public/js/demo/database-demo.js`
   Line 21 - Change `[...data, ...data]` to `[...data]`. (js wrongly duplicates the values)

## Install

```bash
git clone
npm install
```

## Prerequisites

```
// included in the project
Sqllit3
```

## Configuration

```
//.env - for mysql
PORT=3000
DB_HOST="localhost"
DB_USER="root"
DB_PWD="eyalmrejen"
DB_NAME="OnlineStore"
```

## Database setup

### for sqllite3

Use slqite3 viewer
Open `Cymbio.db` in `src/db/Cymbio.db`

```sql

CREATE TABLE Product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    description VARCHAR(255),
    instock_quantity INT,
    price DECIMAL(8, 2)
);

CREATE TABLE Customer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    password VARCHAR(255),
    email VARCHAR(255) UNIQUE
);

CREATE TABLE ProductOrder (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    customer_id INT,
    product_quantity INT,
    FOREIGN KEY (product_id) REFERENCES Product(id),
    FOREIGN KEY (customer_id) REFERENCES Customer(id)
);

INSERT INTO Product VALUES (1, "Apple MacBook Pro", "15 inch, i7, 16GB RAM", 5, 667.00);

INSERT INTO Customer VALUES (1, "Anjalee", "2w33he94yg4mx88j9j2hy4uhd32w", "anjalee@gmail.com");

INSERT INTO ProductOrder VALUES (1, 1, 1, 1);
```

## Run project

```bash
npm run start
```
