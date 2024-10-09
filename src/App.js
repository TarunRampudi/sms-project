import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import StudentDashboard from './components/StudentDashboard';
// Create CourseSelection and Feedback components or placeholders for now
import CourseSelection from './components/CourseSelection';
import Feedback from './components/Feedback';
import AdminDashboard from './components/AdminDashboard';
import AddStudent from './components/AddStudent';
import AddCourse from './components/AddCourse';
import ViewFeedback from './components/ViewFeedback';
import UpdateStudent from './components/UpdateStudent';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Login />} />
                <Route path="/student-dashboard" element={<StudentDashboard />} />
                <Route path="/course-selection" element={<CourseSelection />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/add-student" element={<AddStudent />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/view-feedback" element={<ViewFeedback />} />
                <Route path="/update-student" element={<UpdateStudent />} />
            </Routes>
        </Router>
    );
};

export default App;
