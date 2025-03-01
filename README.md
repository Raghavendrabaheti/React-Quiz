# React Quiz App

This is a simple quiz application built with React. The app allows users to select a difficulty level and answer a series of questions. At the end of the quiz, the user's score is displayed.

## Project Structure

The project is organized as follows:

```
react-quiz-app
├── public
│   ├── index.html        # Main HTML file for the React application
│   ├── style.css         # CSS styles for the application
│   └── question.json     # JSON file containing quiz questions
├── src
│   ├── components        # Contains all React components
│   │   ├── AnswerButton.js      # Component for answer buttons
│   │   ├── DifficultySelector.js  # Component for selecting difficulty
│   │   ├── FinalScore.js         # Component for displaying final score
│   │   ├── Question.js           # Component for displaying questions
│   │   └── Quiz.js               # Main quiz logic component
│   ├── App.js            # Main application component
│   ├── index.js          # Entry point of the React application
│   └── App.css           # CSS styles specific to the App component
├── package.json          # npm configuration file
├── README.md             # Project documentation
└── .gitignore            # Git ignore file
```

## Getting Started

To get started with the quiz application, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd react-quiz-app
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

   This will start the development server and open the application in your default web browser.

## Features

- Select difficulty level (easy, medium, hard)
- Answer multiple-choice questions
- View final score after completing the quiz
- Restart the quiz

## Technologies Used

- React
- JavaScript
- CSS
- JSON

## License

This project is licensed under the MIT License.# React-Quiz
