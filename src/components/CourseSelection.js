// CourseSelection.js
import React, { useState, useEffect } from 'react';
import './CourseSelection.css'; // Optional: Add CSS for styling

const CourseSelection = ({ studentYear }) => {
    const [courses, setCourses] = useState([]); // State to hold the courses
    const [selectedCourses, setSelectedCourses] = useState([]); // State to hold selected courses

    // Fetch courses for the student's year
    useEffect(() => {
        fetch(`/api/courses?year=${studentYear}`) // Replace with your API
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching courses:', error));
    }, [studentYear]);

    // Handle course selection
    const handleCourseSelection = (courseId) => {
        setSelectedCourses((prevSelectedCourses) => {
            if (prevSelectedCourses.includes(courseId)) {
                // Remove the course if already selected
                return prevSelectedCourses.filter(id => id !== courseId);
            } else {
                // Add the course if not selected
                return [...prevSelectedCourses, courseId];
            }
        });
    };

    // Submit selected courses
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would send the selected courses to the server
        console.log('Selected courses:', selectedCourses);
        alert('Course selection submitted successfully!');
        // Example: POST the selected courses to the API
        /*
        fetch('/api/submit-courses', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ studentYear, selectedCourses }),
        }).then(response => response.json())
          .then(data => console.log('Success:', data))
          .catch(error => console.error('Error:', error));
        */
    };

    return (
        <div className="course-selection-container">
            <h2>Course Selection for Year {studentYear}</h2>
            <form onSubmit={handleSubmit}>
                {courses.length > 0 ? (
                    courses.map(course => (
                        <div key={course.courseId} className="course-item">
                            <input
                                type="checkbox"
                                id={`course-${course.courseId}`}
                                value={course.courseId}
                                onChange={() => handleCourseSelection(course.courseId)}
                            />
                            <label htmlFor={`course-${course.courseId}`}>
                                {course.courseName}
                            </label>
                        </div>
                    ))
                ) : (
                    <p>No courses available for this year.</p>
                )}
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default CourseSelection;
