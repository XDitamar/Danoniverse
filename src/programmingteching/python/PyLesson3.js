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
    const expectedAnswer = `# Create integer variable
my_int = 42

# Create string variable
my_str = "Hello, World!"

# Create float variable
my_float = 3.14

# Create boolean variable
my_bool = True

# Create list variable
my_list = [1, 2, 3]

# Create tuple variable
my_tuple = ("apple", "banana", "cherry")`;
    const exerciseResult = exerciseInput.trim() === expectedAnswer ? 'Correct!' : 'Incorrect!';
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

  const expectedAnswer = `# Create integer variable
my_int = 42

# Create string variable
my_str = "Hello, World!"

# Create float variable
my_float = 3.14

# Create boolean variable
my_bool = True

# Create list variable
my_list = [1, 2, 3]

# Create tuple variable
my_tuple = ("apple", "banana", "cherry")`;

  return (
    <div className="python-lesson">
      <div className="pre-lesson-speech">
        <h1 className="pre-lesson-heading">Pre-Lesson Speech</h1>
        <p className="pre-lesson-text">Welcome to Lesson 2: Creating Variables. In this lesson, we will explore different variable types in Python and learn how to create variables to store data. Pay close attention to the examples and instructions provided, and make sure to complete the exercise at the end of the lesson. Let's get started!</p>
      </div>
      <div className="lesson-section">
        <h1 className="lesson-heading">Lesson 2: Creating Variables</h1>
        <p className="lesson">In Python, variables are used to store data values. You can create a variable by assigning a value to it.</p>
        <p className="lesson">Variable names are case-sensitive and can contain letters, digits, and underscore (_), but cannot start with a digit.</p>
        <p className="lesson">Here's an example of creating variables:</p>
        <pre className="lesson-example">
          <code>
            # Create integer variable<br />
            my_int = 42<br /><br />

            # Create string variable<br />
            my_str = "Hello, World!"<br /><br />

            # Create float variable<br />
            my_float = 3.14<br /><br />

            # Create boolean variable<br />
            my_bool = True<br /><br />

            # Create list variable<br />
            my_list = [1, 2, 3]<br /><br />

            # Create tuple variable<br />
            my_tuple = ("apple", "banana", "cherry")
          </code>
        </pre>
        <p className="lesson">In the above example, we created variables of different types:</p>
        <div className="variable-section">
          <div className="variable-type">
            <h2>Integer (int)</h2>
            <p className="variable-description">Stores whole numbers without decimal points.</p>
          </div>
          <div className="variable-type">
            <h2>String (str)</h2>
            <p className="variable-description">Stores sequences of characters, typically used for text.</p>
          </div>
          <div className="variable-type">
            <h2>Float (float)</h2>
            <p className="variable-description">Stores decimal numbers.</p>
          </div>
          <div className="variable-type">
            <h2>Boolean (bool)</h2>
            <p className="variable-description">Stores either True or False values.</p>
          </div>
          <div className="variable-type">
            <h2>List (list)</h2>
            <p className="variable-description">Stores an ordered collection of items.</p>
          </div>
          <div className="variable-type">
            <h2>Tuple (tuple)</h2>
            <p className="variable-description">Stores an ordered, immutable collection of items.</p>
          </div>
        </div>
      </div>
      <div className="exercise-section">
        <h1 className="exercise-heading">Exercise: Create Variables</h1>
        <p className="exercise-instruction">Create variables of different types as shown in the example.</p>
        <form onSubmit={handleExerciseSubmit} className="exercise-form">
          <textarea
            value={exerciseInput}
            onChange={handleExerciseInputChange}
            className="exercise-input"
            placeholder="Enter your answer..."
          ></textarea>
          <button type="submit" className="exercise-submit">Submit</button>
        </form>
        {exerciseResult && (
          <div className="exercise-result">
            {exerciseResult}
            {!showAnswer && exerciseResult === 'Incorrect!' && <button className="show-answer-button" onClick={handleShowAnswer}>Show Answer</button>}
            {showAnswer && <div className="correct-answer">The correct answer is:<br /><br />{expectedAnswer}</div>}
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
