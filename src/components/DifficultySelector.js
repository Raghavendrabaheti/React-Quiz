import React from 'react';

function DifficultySelector({ onDifficultyChange }) {
    const difficulties = [
        {
            level: 'easy',
            name: 'Easy',
            description: 'Basic concepts and fundamental algorithms',
            className: 'easy'
        },
        {
            level: 'medium',
            name: 'Medium',
            description: 'Intermediate topics and problem-solving',
            className: 'medium'
        },
        {
            level: 'hard',
            name: 'Hard',
            description: 'Advanced algorithms and complex scenarios',
            className: 'hard'
        }
    ];

    return (
        <div className="difficulty-selector">
            <h2 className="difficulty-title">Choose Your Challenge</h2>
            <p className="difficulty-subtitle">
                Select the difficulty level that matches your expertise
            </p>
            <div className="difficulty-buttons">
                {difficulties.map((diff) => (
                    <button
                        key={diff.level}
                        onClick={() => onDifficultyChange(diff.level)}
                        className={`difficulty-btn ${diff.className}`}
                    >
                        <div className="difficulty-name">{diff.name}</div>
                        <div className="difficulty-description">{diff.description}</div>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default DifficultySelector;