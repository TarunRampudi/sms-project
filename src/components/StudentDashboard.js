import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentDashboard.css';

const StudentDashboard = () => {
    const navigate = useNavigate();

    const handleCourseSelection = () => {
        navigate('/course-selection');
    };

    const handleFeedback = () => {
        navigate('/feedback');
    };

    const handleProfile = () => {
        navigate('/profile');
    };

    const handleLogout = () => {
        // Add logout logic here, such as clearing user session data
        alert('Logged out successfully!');
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <button onClick={handleCourseSelection} className="sidebar-button">Course Selection</button>
                <button onClick={handleFeedback} className="sidebar-button">Feedback</button>
                <button onClick={handleProfile} className="sidebar-button">Profile</button>
                <button onClick={handleLogout} className="sidebar-button logout-button">Logout</button>
            </div>

            <div className="main-content">
                <h2>Welcome to the Student Dashboard</h2>
                <p>Select an option from the sidebar to proceed.</p>
            </div>
        </div>
    );
};

export default StudentDashboard;
