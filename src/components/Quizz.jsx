import React, { useState } from "react";
import { resultInitialState } from "../data";

const Quizz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(null);
  const [choice, setChoice] = useState(null);
  const [result, setResult] = useState(resultInitialState);
  const [showResult, setShowResult] = useState(false);

  const { question, choices, correctAnswer } = questions[currentQuestion];

  const onAnswerClick = (choice, index) => {
    setAnswerIndex(index);
    if (choice === correctAnswer) {
      setChoice(true);
    } else {
      setChoice(false);
    }
  };

  const onClickNext = () => {
    setAnswerIndex(null);
    setResult((prev) =>
      choice
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if(currentQuestion !== questions.length - 1){
        setCurrentQuestion(currentQuestion + 1)
    }else{
        setCurrentQuestion(0);
        setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
        {!showResult ? (
        <>
        <span className="active-question-no">{currentQuestion + 1}</span>
        <span className="total-question">/{questions.length}</span>
        <h2>{question}</h2>
        <ul>
          {choices.map((choice, index) => (
            <li
              onClick={() => onAnswerClick(choice, index)}
              key={choice}
              className={answerIndex === index ? "selected-answer" : null}
            >
              {choice}
            </li>
          ))}
        </ul>
        <div className="footer">
          <button onClick={onClickNext} disabled={answerIndex == null}>
            {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </>
      ) : (
      <div className="result">
        <h3>Result</h3>
        <p>
            Total Questions: <span>{questions.length}</span>
        </p>
        </div>
        )}
      
    </div>
  );
};

export default Quizz;
