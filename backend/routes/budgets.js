const express = require('express');
const Budget = require('../models/budget');

const router = express.Router();

// Get all budgets
router.get('/', async (req, res) => {
    const budgets = await Budget.find();
    res.json(budgets);
});

// Add a new budget
router.post('/', async (req, res) => {
    const { category, amount } = req.body;
    const newBudget = new Budget({ category, amount });
    await newBudget.save();
    res.json(newBudget);

});

module.exports = router;
