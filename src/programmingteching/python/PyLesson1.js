import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../design/lesson.css';

const PythonLesson = () => {
  const [lessonText, setLessonText] = useState('');
  const [exerciseInput, setExerciseInput] = useState('');
  const [exerciseResult, setExerciseResult] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const navigate = useNavigate();

  const handleLessonInputChange = (event) => {
    setLessonText(event.target.value);
  };

  const handleExerciseInputChange = (event) => {
    setExerciseInput(event.target.value);
    setExerciseResult('');
    setShowAnswer(false);
  };

  const handleExerciseSubmit = (event) => {
    event.preventDefault();
    const expectedAnswer = 'print("1")';
    const exerciseResult = exerciseInput === expectedAnswer ? 'Correct!' : 'Incorrect!';
    setExerciseResult(exerciseResult);
    if (exerciseResult === 'Correct!') {
      setShowNextButton(true);
    } else {
      setShowAnswer(true);
    }
    setExerciseInput('');
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleNextButtonClick = () => {
    navigate('/python/lesson2');
  };

  return (
    <div className="python-lesson">
      <div className="lesson-section">
        <h1 className="lesson-heading">Learning by Examples</h1>
        <p className="lesson">In this lesson, we will learn about the print function in Python.</p>
        <p className="lesson">The print function is used to display output on the console. It takes one or more arguments and displays them as text.</p>
        <p className="lesson">Here is an example of using the print function:</p>
        <pre className="lesson-example">print("Hello, World!")</pre>
      </div>
      <div className="exercise-section">
        <h1 className="exercise-heading">Test Yourself With Exercises</h1>
        <p className="exercise-instruction">Print The number 1</p>
        <form onSubmit={handleExerciseSubmit} className="exercise-form">
          <input
            type="text"
            value={exerciseInput}
            onChange={handleExerciseInputChange}
            className="exercise-input"
            placeholder="Enter your answer..."
          />
          <button type="submit" className="exercise-submit">Submit</button>
        </form>
        {exerciseResult && (
          <div className="exercise-result">
            {exerciseResult}
            {!showAnswer && exerciseResult === 'Incorrect!' && <button className="show-answer-button" onClick={handleShowAnswer}>Show Answer</button>}
            {showAnswer && <div className="correct-answer">The correct answer is: print("1")</div>}
          </div>
        )}
        {showNextButton && (
          <button className="next-button" onClick={handleNextButtonClick}>
            Move to Next Lesson
          </button>
        )}
      </div>
    </div>
  );
};

export default PythonLesson;
