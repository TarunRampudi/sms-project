// UpdateStudent.js
import React, { useState } from 'react';
import './UpdateStudent.css'; // Optional: Add CSS for styling

const UpdateStudent = () => {
    // State to hold form data
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [phno, setPhno] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., update the student details in the database)
        const updatedStudentData = {
            username,
            password,
            firstName,
            middleName,
            lastName,
            dob,
            phno,
            year
        };
        console.log('Updated student data:', updatedStudentData);
        alert('Student details updated successfully!');
        // Optionally: Reset the form or navigate to another page
    };

    return (
        <div className="update-student-container">
            <h2>Update Student</h2>
            <form onSubmit={handleSubmit} className="update-student-form">
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>First Name:</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter first name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Middle Name:</label>
                    <input
                        type="text"
                        value={middleName}
                        onChange={(e) => setMiddleName(e.target.value)}
                        placeholder="Enter middle name"
                    />
                </div>

                <div className="form-group">
                    <label>Last Name:</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter last name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Phone Number:</label>
                    <input
                        type="tel"
                        value={phno}
                        onChange={(e) => setPhno(e.target.value)}
                        placeholder="Enter phone number"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Year:</label>
                    <input
                        type="number"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        placeholder="Enter year"
                        min="1"
                        max="5"
                        required
                    />
                </div>

                <button type="submit" className="submit-button">Update</button>
            </form>
        </div>
    );
};

export default UpdateStudent;
