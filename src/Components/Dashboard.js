import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    
    return (
        <div>
            <h1>Welcome to the Digital Wallet</h1>
            <Link to="/wallet">Go to Wallet</Link>
        </div>
    );
};

export default Dashboard;