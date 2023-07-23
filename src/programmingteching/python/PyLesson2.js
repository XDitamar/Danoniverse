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
    const expectedAnswer = '# I learn Python';
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
    navigate('/python/lesson3');
  };

  return (
    <div className="python-lesson">
      <div className="lesson-section">
        <h1 className="lesson-heading">Learning by Examples - Lesson 2</h1>
        <p className="lesson">In this lesson, we will learn about comments in Python.</p>
        <p className="lesson">Comments are used to add explanations or annotations to the code. They are not executed by the interpreter.</p>
        <p className="lesson">To create a single-line comment in Python, use the '#' symbol at the beginning of the line. It will be ignored by the interpreter.</p>
        <p className="lesson">Here is an example of a comment:</p>
        <pre className="lesson-example"><code># This is a comment</code></pre>
      </div>
      <div className="exercise-section">
        <h1 className="exercise-heading">Test Yourself With Exercises</h1>
        <p className="exercise-instruction exercise-instruction-small">Comment: "I learn Python"</p>
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
            {showAnswer && <div className="correct-answer">The correct answer is: # I learn Python</div>}
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
