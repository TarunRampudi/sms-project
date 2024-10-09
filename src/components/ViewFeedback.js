import React, { useState, useEffect } from 'react';
import './ViewFeedback.css'; // Optional: Add CSS for styling

const ViewFeedback = () => {
    // State to hold the feedback data
    const [feedbackData, setFeedbackData] = useState([]);

    // useEffect to fetch feedback data from an API
    useEffect(() => {
        fetch('/api/feedback')  // Replace this with your actual API endpoint
            .then(response => response.json())
            .then(data => setFeedbackData(data))
            .catch(error => console.error('Error fetching feedback:', error));
    }, []);  // Empty dependency array ensures it runs once when the component mounts

    return (
        <div className="view-feedback-container">
            <h2>Student Feedback</h2>
            <table className="feedback-table">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Course Name</th>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbackData.length > 0 ? (
                        feedbackData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.studentName}</td>
                                <td>{item.courseName}</td>
                                <td>{item.feedback}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No feedback available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ViewFeedback;
