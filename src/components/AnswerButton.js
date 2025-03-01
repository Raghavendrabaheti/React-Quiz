import React from 'react';

const AnswerButton = ({ answerText, onClick }) => {
    return (
        <button className="btn" onClick={onClick}>
            {answerText}
        </button>
    );
};

export default AnswerButton;