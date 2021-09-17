import * as dotenv from 'dotenv';
import path from 'path';
import sqlite3 from 'sqlite3';

sqlite3.verbose();
dotenv.config();

const RUN_TIME_ERROR = -1;

export const db = new sqlite3.Database(
  path.resolve(__dirname, './db/Cymbio.db'),
  (err: Error | null) => {
    if (err) {
      console.error(err);
      process.exit(RUN_TIME_ERROR);
    }
    console.log('Connected to the Cymbio database.');
  }
);
