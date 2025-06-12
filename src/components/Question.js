import React from 'react';

const Question = ({ question, answers, onAnswerSelection, selectedAnswer, showResult }) => {
    const handleAnswerClick = (answerIndex, isCorrect) => {
        if (selectedAnswer !== null) return; // Prevent multiple selections
        onAnswerSelection(answerIndex, isCorrect);
    };

    const getAnswerClass = (answerIndex, isCorrect) => {
        let classes = 'answer-btn';
        
        if (selectedAnswer === null) {
            return classes;
        }
        
        if (selectedAnswer === answerIndex) {
            classes += ' selected';
        }
        
        if (showResult) {
            classes += ' disabled';
            if (isCorrect) {
                classes += ' correct';
            } else if (selectedAnswer === answerIndex && !isCorrect) {
                classes += ' wrong';
            }
        }
        
        return classes;
    };

    return (
        <div className="question-container">
            <h2 className="question-text">{question}</h2>
            <div className="answers-grid">
                {answers.map((answer, index) => (
                    <button
                        key={index}
                        className={getAnswerClass(index, answer.correct)}
                        onClick={() => handleAnswerClick(index, answer.correct)}
                        disabled={selectedAnswer !== null}
                    >
                        {answer.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;