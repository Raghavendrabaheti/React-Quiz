import React, { useState } from 'react';
import Quiz from './components/Quiz';
import './App.css';

function App() {
    const [isQuizStarted, setIsQuizStarted] = useState(false);

    const startQuiz = () => {
        setIsQuizStarted(true);
    };

    const restartQuiz = () => {
        setIsQuizStarted(false);
    };

    return (
        <div className="App">
            {!isQuizStarted ? (
                <div className="welcome-container">
                    <h1 className="quiz-title">DSA Quiz Master</h1>
                    <p className="quiz-subtitle">
                        Test your knowledge of Data Structures and Algorithms
                    </p>
                    <button onClick={startQuiz} className="start-btn">
                        Start Quiz
                    </button>
                </div>
            ) : (
                <Quiz onRestart={restartQuiz} />
            )}
        </div>
    );
}

export default App;