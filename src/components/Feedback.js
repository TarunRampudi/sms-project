// FeedbackForm.js
import React, { useState } from 'react';
import './Feedback.css'; // Optional CSS file for styling

const FeedbackForm = () => {
    const [courseName, setCourseName] = useState('');
    const [courseId, setCourseId] = useState('');
    const [feedback, setFeedback] = useState({
        skillTeacherRating: '',
        taContributionSkill: '',
        teacherInteraction: '',
        handsOnExecution: '',
        modulesMatchingSchedule: '',
        labTeacherRating: '',
        taContributionLab: ''
    });

    // Handle input change for feedback options
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFeedback({ ...feedback, [name]: value });
    };

    // Submit feedback form
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Combine all feedback data
    //     const feedbackData = {
    //         courseName,
    //         courseId,
    //         ...feedback,
    //     };
    //     console.log('Submitted Feedback:', feedbackData);
    //     alert('Feedback submitted successfully!');
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
    
        // Combine all feedback data
        const feedbackData = {
            courseName,
            courseId,
            ...feedback, // Destructure all feedback ratings from the state
        };
    
        // Log the feedback data for debugging
        console.log('Submitted Feedback:', feedbackData);
    
        // Send the feedback data to the server using fetch API
        fetch('/api/submit-feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(feedbackData), // Convert feedback data to JSON
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                alert('Feedback submitted successfully!');
                // Optionally, reset the form fields here if necessary
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('There was an error submitting the feedback. Please try again.');
            });
    };
    
        // Here you can submit the feedback to the server, for example:
        /*
        fetch('/api/submit-feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(feedbackData),
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
        */
    

    return (
        <div className="feedback-form-container">
            <h2>Submit Feedback</h2>
            <form onSubmit={handleSubmit} className="feedback-form">
                {/* Course Details */}
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

                {/* Feedback Questions */}
                <h3>Provide Your Feedback</h3>
                <div className="form-group">
                    <label>Overall rating of your skill teacher:</label>
                    <FeedbackOptions name="skillTeacherRating" value={feedback.skillTeacherRating} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label>How is other teaching assistants' contribution in skill conduction?</label>
                    <FeedbackOptions name="taContributionSkill" value={feedback.taContributionSkill} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label>Is the teacher encouraging interaction to get the doubts clarified?</label>
                    <FeedbackOptions name="teacherInteraction" value={feedback.teacherInteraction} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label>How is the teacher allowing the hands-on executions through examples and applications?</label>
                    <FeedbackOptions name="handsOnExecution" value={feedback.handsOnExecution} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label>Are the skill modules covered so far matching with the schedule of the lesson plan?</label>
                    <FeedbackOptions name="modulesMatchingSchedule" value={feedback.modulesMatchingSchedule} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label>Overall rating of your lab teacher:</label>
                    <FeedbackOptions name="labTeacherRating" value={feedback.labTeacherRating} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label>How is other teaching assistants' contribution in Lab conduction?</label>
                    <FeedbackOptions name="taContributionLab" value={feedback.taContributionLab} onChange={handleInputChange} />
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-button">Submit Feedback</button>
            </form>
        </div>
    );
};

// const FeedbackOptions = ({ name, value, onChange }) => (
//     <div className="feedback-options">
//         <label>
//             <input type="radio" name={name} value="Excellent" onChange={onChange} checked={value === 'Excellent'} />
//             Excellent
//         </label>
//         <label>
//             <input type="radio" name={name} value="Very Good" onChange={onChange} checked={value === 'Very Good'} />
//             Very Good
//         </label>
//         <label>
//             <input type="radio" name={name} value="Good" onChange={onChange} checked={value === 'Good'} />
//             Good
//         </label>
//         <label>
//             <input type="radio" name={name} value="Not Bad" onChange={onChange} checked={value === 'Not Bad'} />
//             Not Bad
//         </label>
//         <label>
//             <input type="radio" name={name} value="Bad" onChange={onChange} checked={value === 'Bad'} />
//             Bad
//         </label>
//     </div>
// );
const FeedbackOptions = ({ name, value, onChange }) => (
    <div className="feedback-options">
        <label className="radio-label">
            <input type="radio" name={name} value="Excellent" onChange={onChange} checked={value === 'Excellent'} />
            Excellent
        </label>
        <label className="radio-label">
            <input type="radio" name={name} value="Very Good" onChange={onChange} checked={value === 'Very Good'} />
            Very Good
        </label>
        <label className="radio-label">
            <input type="radio" name={name} value="Good" onChange={onChange} checked={value === 'Good'} />
            Good
        </label>
        <label className="radio-label">
            <input type="radio" name={name} value="Not Bad" onChange={onChange} checked={value === 'Not Bad'} />
            Not Bad
        </label>
        <label className="radio-label">
            <input type="radio" name={name} value="Bad" onChange={onChange} checked={value === 'Bad'} />
            Bad
        </label>
    </div>
);


export default FeedbackForm;
