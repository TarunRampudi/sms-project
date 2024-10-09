import React from 'react';
import './About.css'; // Create this CSS file for styles

const About = () => {
    return (
        <div className="about-container">
            <h2>About Student Feedback Management</h2>
            <p>
                Welcome to the Student Feedback Management application! This platform is designed to facilitate 
                the collection and management of feedback from students and administrators. 
            </p>
            <p>
                With this application, students can provide valuable feedback on their experiences, while 
                administrators can analyze the feedback to improve educational services and student satisfaction.
            </p>
            <h3>Features:</h3>
            <ul>
                <li>User-friendly interface for students and admins.</li>
                <li>Secure login and signup functionality.</li>
                <li>Dashboard for viewing feedback statistics.</li>
                <li>Ability to submit feedback and view previous submissions.</li>
            </ul>
            <h3>How to Use:</h3>
            <ol>
                <li>Sign up for an account.</li>
                <li>Log in to the application.</li>
                <li>Navigate to the feedback section to submit your feedback.</li>
                <li>Admins can view and analyze feedback through the dashboard.</li>
            </ol>
        </div>
    );
};

export default About;
