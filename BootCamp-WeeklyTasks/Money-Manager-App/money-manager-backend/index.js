import Express from 'express';
import mongoose from 'mongoose';
import transactions from './routes/transactions.js';
import cors from 'cors';

const url = process.env.MONGODB_URI || 'mongodb://localhost/MoneyManager';

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on('open', function () {
  console.log('Mongo DB connected' + url);
});

// const port = 3200;

const port = process.env.PORT || 4100;
const app = Express();

app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use('/transactions', transactions);

app.get('/', (request, response) => response.send('Hello from NodeJS'));

app.listen(port, console.log(`Server Running `));
