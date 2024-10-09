import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleAddStudent = () => {
        navigate('/add-student');
    };

    const handleAddCourse = () => {
        navigate('/add-course');
    };

    const handleViewFeedback = () => {
        navigate('/view-feedback');
    };

    const handleUpdateStudent = () => {
        navigate('/update-student');
    };

    const handleLogout = () => {
        // Add logout logic here, such as clearing user session data
        alert('Logged out successfully!');
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <button onClick={handleAddStudent} className="sidebar-button">Add Student</button>
                <button onClick={handleAddCourse} className="sidebar-button">Add Course</button>
                <button onClick={handleViewFeedback} className="sidebar-button">View Feedback</button>
                <button onClick={handleUpdateStudent} className="sidebar-button">Update Student</button>
                <button onClick={handleLogout} className="sidebar-button logout-button">Logout</button>
            </div>

            <div className="main-content">
                <h2>Welcome to the Admin Dashboard</h2>
                <p>Select an option from the sidebar to proceed.</p>
            </div>
        </div>
    );
};

export default AdminDashboard;
