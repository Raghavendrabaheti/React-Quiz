import React, { useState, useEffect } from 'react';
import Question from './Question';
import qdata from './question.json';
import FinalScore from './FinalScore';
import DifficultySelector from './DifficultySelector';

const Quiz = ({ onRestart }) => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const [difficulty, setDifficulty] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [skippedQuestions, setSkippedQuestions] = useState([]);

    useEffect(() => {
        if (difficulty) {
            let data = qdata[difficulty];
            // Get 10 random questions from the selected difficulty
            const shuffled = [...data].sort(() => 0.5 - Math.random());
            const selectedQuestions = shuffled.slice(0, 10).map((q, index) => ({
                ...q,
                id: index
            }));
            setQuestions(selectedQuestions);
        }
    }, [difficulty]);

    const handleAnswerSelection = (answerIndex, isCorreect) => {
        if (selectedAnswer !== null) return; // Prevent multiple selections
        
        setSelectedAnswer(answerIndex);
        setShowResult(true);
        
        if (isCorreect) {
            setScore(prevScore => prevScore + 1);
        }
    };

    const handleNext = () => {
        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestionIndex(nextQuestion);
            setSelectedAnswer(null);
            setShowResult(false);
        } else {
            setIsQuizFinished(true);
        }
    };

    const handleSkip = () => {
        setSkippedQuestions(prev => [...prev, currentQuestionIndex]);
        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestionIndex(nextQuestion);
            setSelectedAnswer(null);
            setShowResult(false);
        } else {
            setIsQuizFinished(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setQuestions([]);
        setScore(0);
        setIsQuizFinished(false);
        setDifficulty(null);
        setSelectedAnswer(null);
        setShowResult(false);
        setSkippedQuestions([]);
    };

    const getDifficultyColor = () => {
        switch(difficulty) {
            case 'easy': return '#48bb78';
            case 'medium': return '#4299e1';
            case 'hard': return '#f56565';
            default: return '#4299e1';
        }
    };

    if (!difficulty) {
        return (
            <div className="quiz-container">
                <DifficultySelector onDifficultyChange={setDifficulty} />
            </div>
        );
    }

    if (isQuizFinished) {
        return (
            <div className="quiz-container">
                <FinalScore 
                    score={score} 
                    totalQuestions={questions.length}
                    skippedCount={skippedQuestions.length}
                    difficulty={difficulty}
                    onRestart={restartQuiz} 
                />
            </div>
        );
    }

    return (
        <div className="quiz-container">
            <div className="score-display">
                Score: {score}/{questions.length}
            </div>
            
            <div className="progress-bar">
                <div 
                    className="progress-fill" 
                    style={{ 
                        width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                        background: getDifficultyColor()
                    }}
                ></div>
            </div>

            <div className="question-number">
                Question {currentQuestionIndex + 1} of {questions.length}
            </div>

            {questions.length > 0 && (
                <Question
                    question={questions[currentQuestionIndex].question}
                    answers={questions[currentQuestionIndex].answers}
                    onAnswerSelection={handleAnswerSelection}
                    selectedAnswer={selectedAnswer}
                    showResult={showResult}
                />
            )}

            <div className="controls">
                <button 
                    onClick={handleSkip} 
                    className="skip-btn"
                    disabled={showResult}
                >
                    Skip Question
                </button>
                
                <button 
                    onClick={handleNext} 
                    className={`next-btn ${showResult || selectedAnswer !== null ? 'enabled' : ''}`}
                    disabled={!showResult && selectedAnswer === null}
                >
                    {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                </button>
            </div>
        </div>
    );
};

export default Quiz;