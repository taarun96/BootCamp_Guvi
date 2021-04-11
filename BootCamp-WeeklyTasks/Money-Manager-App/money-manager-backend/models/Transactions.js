import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
  },
  nature: {
    type: String,
  },
});

export const Transaction = mongoose.model('Transaction', TransactionSchema);
