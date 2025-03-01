import React, { useState, useEffect } from 'react';
import Quiz from './components/Quiz' ;
import qdata from './components/question.json';
import './App.css';

function App() {
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    const [questions, setQuestions] = useState([]);

    // useEffect(() => {
    //     // fetch('./components/question.json')
    //     //     .then(response => {
    //     //         if (!response.ok) {
    //     //             throw new Error(`HTTP error! status: ${response.status}`);
    //     //         }
    //     //         return response.json();
    //     //     })
    //     //     .then(data => setQuestions(data))
    //     //     .catch(error => console.error("Error loading questions:", error));
    //     let data = qdata;
    //     setQuestions(data[difficulty] || []); 
    // }, []);

    const startQuiz = () => {
        setIsQuizStarted(true);
    };

    const restartQuiz = () => {
        setIsQuizStarted(false);
    };

    return (
        <div className="App">
            {!isQuizStarted ? (
                <div>
                    <h1>DSA Quiz</h1>
                    <button onClick={startQuiz}>Start Quiz</button>
                </div>
            ) : (
                <Quiz questions={questions} onRestart={restartQuiz} />
            )}
        </div>
    );
}

export default App;