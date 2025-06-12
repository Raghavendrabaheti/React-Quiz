import React from 'react';

const FinalScore = ({ score, totalQuestions, skippedCount, difficulty, onRestart }) => {
    const percentage = Math.round((score / totalQuestions) * 100);
    
    const getScoreMessage = () => {
        if (percentage >= 90) return "Excellent! You're a DSA master! 🏆";
        if (percentage >= 70) return "Great job! You have strong knowledge! 🎉";
        if (percentage >= 50) return "Good work! Keep practicing! 💪";
        return "Keep learning! Practice makes perfect! 📚";
    };

    const getPerformanceColor = () => {
        if (percentage >= 90) return '#48bb78';
        if (percentage >= 70) return '#4299e1';
        if (percentage >= 50) return '#f6ad55';
        return '#f56565';
    };

    return (
        <div className="final-score-container">
            <div 
                className="score-circle"
                style={{ background: `conic-gradient(${getPerformanceColor()} ${percentage * 3.6}deg, #2d3748 0deg)` }}
            >
                <div className="score-text">{percentage}%</div>
            </div>
            
            <h2 className="score-label">Quiz Complete!</h2>
            <p className="score-message">{getScoreMessage()}</p>
            
            <div style={{ marginBottom: '24px', color: 'var(--text-secondary)' }}>
                <div>Difficulty: <strong style={{ textTransform: 'capitalize', color: getPerformanceColor() }}>{difficulty}</strong></div>
                <div>Correct Answers: <strong>{score} out of {totalQuestions}</strong></div>
                {skippedCount > 0 && <div>Skipped Questions: <strong>{skippedCount}</strong></div>}
            </div>
            
            <button onClick={onRestart} className="restart-btn">
                Take Another Quiz
            </button>
        </div>
    );
};

export default FinalScore;