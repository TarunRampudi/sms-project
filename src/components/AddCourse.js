// AddCourse.js
import React, { useState } from 'react';
import './AddCourse.css'; // Optional: Add CSS for styling

const AddCourse = () => {
    // State to hold form data
    const [courseName, setCourseName] = useState('');
    const [courseId, setCourseId] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., saving to the database)
        const courseData = {
            courseName,
            courseId,
            year
        };
        console.log('Course data submitted:', courseData);
        alert('Course added successfully!');
    };

    return (
        <div className="add-course-container">
            <h2>Add Course</h2>
            <form onSubmit={handleSubmit} className="add-course-form">
                <div className="form-group">
                    <label>Course Name:</label>
                    <input
                        type="text"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                        placeholder="Enter course name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Course ID:</label>
                    <input
                        type="text"
                        value={courseId}
                        onChange={(e) => setCourseId(e.target.value)}
                        placeholder="Enter course ID"
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

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default AddCourse;
