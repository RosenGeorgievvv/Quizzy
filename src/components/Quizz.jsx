import React, { useState } from 'react'

const Quizz = ({questions}) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIndex, setAnswerIndex] = useState(null);
    const [choice, setChoice] = useState(null);

    const {question, choices, correctAnswer} = questions[currentQuestion];

    const onAnswerClick = (choice, index) =>{
        setAnswerIndex(index);
        if(choice === correctAnswer){
            setChoice(true);
        }else{
            setChoice(false);
        }
    }

  return (
    <div className='quiz-container'>
        <>
        <span className='active-question-no'>{currentQuestion + 1}</span>
        <span className='total-question'>/{questions.length}</span>
        <h2>{question}</h2>
        <ul>
            {
                choices.map((choice, index) =>(
                    <li onClick={() => onAnswerClick(choice, index)} key={choice} className={answerIndex === index ? 'selected-answer' : null}>
                       {choice}
                    </li>
                ))
            }
        </ul>
        <div className='footer'>
            <button>
                {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
        </div>
        </>
    </div>
  )
}

export default Quizz