import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Make sure this points to your CSS file

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard">
            <h1>Student Feedback Management</h1>
            <div className="button-container">
                <button onClick={() => navigate('/login')}>Login</button>
                <button onClick={() => navigate('/signup')}>Signup</button>
                <button onClick={() => navigate('/about')}>About</button>
               
            </div>
        </div>
    );
};

export default Dashboard;
