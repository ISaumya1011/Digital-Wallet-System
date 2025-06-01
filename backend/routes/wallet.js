const express = require('express');
const User = require('../models/User');
const Transaction = require('../models/Transaction');

const router = express.Router();

// Deposit
router.post('/deposit', async (req, res) => {
    const { userId, amount } = req.body;
    const user = await User.findById(userId);
    user.balance += amount;
    await user.save();
    const transaction = new Transaction({ userId, amount, type: 'deposit' });
    await transaction.save();
    res.json({ balance: user.balance });
});

// Withdraw
router.post('/withdraw', async (req, res) => {
    const { userId, amount } = req.body;
    const user = await User.findById(userId);
    if (user.balance < amount) {
        return res.status(400).json({ message: 'Insufficient funds' });
    }
    user.balance -= amount;
    await user.save();
    const transaction = new Transaction({ userId, amount, type: 'withdraw' });
    await transaction.save();
    res.json({ balance: user.balance });
});

// Transfer
router.post('/transfer', async (req, res) => {
    const { fromUserId, toUserId, amount } = req.body;
    const fromUser = await User.findById(fromUserId);
    const toUser = await User.findById(toUserId);
    if (fromUser.balance < amount) {
        return res.status(400).json({ message: 'Insufficient funds' });
    }
    fromUser.balance -= amount;
    toUser.balance += amount;
    await fromUser.save();
    await toUser.save();
    const transaction = new Transaction({ userId: fromUserId, amount, type: 'transfer' });
    await transaction.save();
    res.json({ fromBalance: fromUser.balance, toBalance: toUser.balance });
});

module.exports = router;
