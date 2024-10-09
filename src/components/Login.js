import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Make sure this points to your CSS file

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student'); // Default role
    const navigate = useNavigate();

    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     // Here you would typically handle authentication
    //     alert(`Logged in as ${role}: ${username}`);
    //     navigate('/'); // Redirect to the dashboard after login
    // };

    const handleLogin = (e) => {
        e.preventDefault();
        if (role === 'student') {
            navigate('/student-dashboard'); // Redirect to student dashboard
        } else if (role === 'admin') {
            navigate('/admin-dashboard'); // You can add an admin dashboard later
        } else {
            alert('Invalid role');
        }
    };
    
    return (
        <div className="login-container">
            <h2>Login</h2>
            <div className="form-box"> {/* New box for form */}
                <form onSubmit={handleLogin}>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                        required
                    />
                    <br></br>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                    />
                    <br></br>
                    <label>Role:</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="student">Student</option>
                        <option value="admin">Admin</option>
                    </select>
                    <br></br>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
