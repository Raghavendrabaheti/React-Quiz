import React, { useState, useEffect } from 'react';
import AnswerButton from './AnswerButton';
import Question from './Question';
import qdata from './question.json';
import FinalScore from './FinalScore';
import DifficultySelector from './DifficultySelector';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const [difficulty, setDifficulty] = useState('kol');


    useEffect(() => {
        // fetch('/react-quiz-app/public/question.json')
        //     .then(response => response.json())
        //     .then(data => {
        //         setQuestions(data[difficulty]);
        //     })
        //     .catch(error => console.error("Error loading questions:", error));
        if (difficulty=="kol")  setQuestions([]);
        else {
        let data = qdata[difficulty];
        const idx = Math.floor(Math.random() * 21); // 0 to 20
        data=data.slice(idx,idx+2);
        setQuestions(data); 
        }

    }, [difficulty]);

    const handleAnswerSelection = (isCorrect) => {
        if (isCorrect) {
            setScore(prevScore => prevScore + 1);
        }
        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestionIndex(nextQuestion);
        } else {
            setIsQuizFinished(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setQuestions([]);
        setScore(0);
        setIsQuizFinished(false);
    };

    return (
        <>
        <div>
            <h1>Score : {score}</h1>
        </div>
        <div>
            {isQuizFinished ? (
                <FinalScore score={score} onRestart={restartQuiz} />
            ) : (
                <>
                    {questions.length > 0 ? (
                        <Question
                            question={questions[currentQuestionIndex].question}
                            answers={questions[currentQuestionIndex].answers}
                            onAnswerSelection={handleAnswerSelection}
                        />
                    ):<DifficultySelector selectedDifficulty={setDifficulty} onDifficultyChange={setDifficulty} />}
                </>
            )}
        </div>
        </>
    );
};

export default Quiz;