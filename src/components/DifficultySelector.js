import React from 'react';

function DifficultySelector({ selectedDifficulty }) {

    return (
        <div>
            <button onClick={() => selectedDifficulty('easy')}>Easy</button>
            <button onClick={() => selectedDifficulty('medium')}>Medium</button>
            <button onClick={() => selectedDifficulty('hard')}>Hard</button>
        </div>
    );
}

export default DifficultySelector;