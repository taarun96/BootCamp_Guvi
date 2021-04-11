import Express from 'express';
import { Transaction } from '../models/Transactions.js';

//Get Api,all transactions
export const getAllTransactions = async (request, response, next) => {
  try {
    const transactions = await Transaction.find();

    return response.status(200).json({
      success: true,
      data: transactions,
    });
  } catch (err) {
    response.status(500).json({
      success: false,
      error: 'Network Error',
    });
  }
};

export const addTransaction = async (request, response, next) => {
  try {
    const { text, amount, type, nature } = request.body;
    const transaction = await Transaction.create(request.body);
    return response.status(200).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    // console.log(error.name);
    if (error.name == 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message);
      return response.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      console.log(err);
      return response.status(500).json({
        success: false,
        error: 'Server Error',
      });
    }
  }
};

export const deleteTransaction = async (request, response, next) => {
  try {
    const transaction = await Transaction.findById(request.params.id).remove();
    console.log(transaction);
    // if (!transaction) {
    //   return response.status(404).json({
    //     success: false,
    //     error: 'No Transaction found on the given ID',
    //   });
    // } else {
    return response.status(200).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
