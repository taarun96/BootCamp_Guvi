import Express, { Router } from 'express';

import {
  getAllTransactions,
  addTransaction,
  deleteTransaction,
} from '../controllers/transactions.js';

const url =
  'mongodb+srv://taarun:CaqCLZO2ueAgE7cP@cluster0.vcnax.mongodb.net/moneytrackerdatabase?retryWrites=true&w=majority';

const router = Express.Router();

router.route('/').get(getAllTransactions).post(addTransaction);

router.route('/:id').delete(deleteTransaction);

export default router;
