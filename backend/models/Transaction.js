const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    type: { type: String, enum: ['Income', 'Expense'], required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transaction', transactionSchema);
