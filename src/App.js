import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import Wallet from './Components/Wallet';

const App = () => {
    const [token, setToken] = useState(null);
    const userId = "user_id_here"; // Replace with actual user ID after login
    
    return (
        <Router>
            <Routes>
            
                <Route path="/"
                    element={<Dashboard />} ></Route>

<Route path="/login" element={<Login setToken={setToken} />} />
                <Route path="/register"
                    element={<Register />}/>

                <Route path="/dashboard"
                    element={<Dashboard />}>
                </Route>

                <Route path="/wallet">
                    {token ? <Wallet userId={userId} /> : <Login setToken={setToken} />}
                </Route>

            </Routes>
        </Router>
    );
};

export default App;
