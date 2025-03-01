import React from 'react';
import AnswerButton from './AnswerButton';

const Question = ({ question, answers, onAnswerSelection }) => {
    return (
        <div>
            <h2>{question}</h2>
            <div>
                {answers.map((answer, index) => (
                    <AnswerButton 
                        key={index} 
                        answerText={answer.text} 
                        onClick={() => onAnswerSelection(answer.correct)} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Question;