import React, { useState } from 'react';
import axios from 'axios';

const Wallet = ({ userId }) => {
    const [amount, setAmount] = useState(0);
    const handleDeposit = async () => {
        await axios.post('http://localhost:5000/api/wallet/deposit', { userId, amount });
        alert('Deposit successful');
    };
    const handleWithdraw = async () => {
        await axios.post('http://localhost:5000/api/wallet/withdraw', { userId, amount });
        alert('Withdrawal successful');
    };

    return (
        <div>
            <h2>Your Wallet</h2>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
            <button onClick={handleDeposit}>Deposit</button>
            <button onClick={handleWithdraw}>Withdraw</button>
        </div>
    );
};

export default Wallet;