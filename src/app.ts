import * as dotenv from 'dotenv';
import fs from 'fs';
import express from 'express';
import { orderRouter } from './routes/orderRouter';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.static('./src/public'));

app.use('/orders', orderRouter);

const message = fs.readFileSync('./src/public/welcome.txt', 'utf8');

app.listen(process.env.PORT, () => {
  console.log('Escalation/Support interview server is up and running');
  console.log(message);
  console.log(`http://localhost:3000/`);
});
