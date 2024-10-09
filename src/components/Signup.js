import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Create this CSS file for styles

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        // Here you would typically handle signup logic
        if (password === confirmPassword) {
            alert(`Signed up as: ${username}`);
            navigate('/'); // Redirect to the dashboard after signup
        } else {
            alert("Passwords do not match!");
        }
    };

    return (
        <div className="signup-container">
            <h2>Signup</h2>
            <div className="form-box">
                <form onSubmit={handleSignup}>
                    <label>Username  : </label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                        required
                    />
                    <br></br>
                    <label>Email  : </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        required
                    />
                    <br></br>
                    <label>Password  : </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                    />
                    <br></br>
                    <label>Confirm Password  : </label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm password"
                        required
                    />
                    <br></br>
                    <button type="submit">Signup</button>
                    <br></br>
                </form>
            </div>
        </div>
    );
};

export default Signup;
