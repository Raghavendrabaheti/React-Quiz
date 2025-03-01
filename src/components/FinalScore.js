import React from 'react';

const FinalScore = ({ score, onRestart }) => {
    return (
        <div className="final-score-container">
            <h2>Final Score: {score}</h2>
            <button onClick={onRestart} className="restart-btn">Restart Quiz</button>
        </div>
    );
};

export default FinalScore;