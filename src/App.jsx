import React, { useState } from 'react';
import './App.css';
import { ThemeToggle } from './components/Toggle';
import Questions from './components/Questions';
import Result from './components/Result';

function App() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const isQuestions = questionNumber < 3;
  const [bio, setBio] = useState({
    name: null,
    age: null,
    profession: 'other',
  });

  const handleSubmit = (e) => {
    setQuestionNumber(questionNumber + 1);
    e.preventDefault();
  };
  const handleChange = () => (e) => {
    setBio({
      ...bio,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="App">
      <ThemeToggle themeName="light">
        {
                    isQuestions
                      ? (
                        <Questions
                          handleSubmit={handleSubmit}
                          handleChange={handleChange()}
                          questionNumber={questionNumber}
                          bio={bio}
                        />
                      )
                      : <Result bio={bio} />
                }
      </ThemeToggle>
    </div>
  );
}

export default App;
