const express = require('express');
const Transaction = require('../models/Transaction');

const router = express.Router();

// Get all transactions
router.get('/', async (req, res) => {
    const transactions = await Transaction.find();
    res.json(transactions);
});

// Add a new transaction
router.post('/', async (req, res) => {
    const { description, amount, type } = req.body;
    const newTransaction = new Transaction({ description, amount, type });
    await newTransaction.save();
    res.json(newTransaction);
});

module.exports = router;
