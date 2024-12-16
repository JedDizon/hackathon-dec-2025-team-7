import React from "react";
import { useState } from "react";
import "../assets/styles/surprise.css";

const Popup = ({ data, onClose }) => {
    if (!data) return null;

    const [answered, setAnswered] = useState(false);
    const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
    const [clickedAnswerIndex, setClickedAnswerIndex] = useState(null);

    const isCorrect = (index, correct) => {

        setAnswered(true);
         setClickedAnswerIndex(index);
        if(correct) {
            setCorrectAnswerIndex(index);
        }
        else {
            const correctIndex = data.answers.findIndex(answer => answer.correct);
            setCorrectAnswerIndex(correctIndex);
        }
    }

    return (
        <div className="popup-overlay">
            <button className={`close-button ${data.type} ${answered ? 'answered' : ''}`} onClick={onClose}>X</button>

            {data.type === "recipe" && (
                <div className="recipe-content">
                    <div className="recipe-image-div">
                        <img src={data.image[0]} alt={data.name} className="recipe-image" />
                    </div>
                    <div className="recipe-details">
                        <h3>{data.name || "No name provided"}</h3>
                        <h4>Ingredients:</h4>
                        <ul>
                            {data.ingredients.map((ingredient) => (
                                <li key={ingredient}>{ingredient}</li>
                            ))}
                        </ul>
                        <h4>Instructions:</h4>
                        <ol>
                            {data.instructions.map((instruction) => (
                                <li key={instruction}>{instruction}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            )}

            {data.type === "trivia" && (
                <div className="trivia-content">
                    <h3>{data.name || "No name provided"}</h3>
                    <p>{data.details ? data.details[0] : 'No details available'}</p>
                </div>
            )}

            {data.type === "quiz" && (
                <div className="quiz-content">
                    <h3>{data.question || "No question provided"}</h3>
                    <div className="quiz-answers">
                        {data.answers.map((answer, index) =>
                            <button
                                key={index}
                                className={`quiz-answer-button 
                                    ${answered ? 'after-answer' : ''}
                                    ${answered && index === correctAnswerIndex ? 'correct' : ''} 
                                    ${answered && index === clickedAnswerIndex && !answer.correct ? 'incorrect' : ''}`}
                            onClick={() => isCorrect(index, answer.correct)}
                            disabled={answered}>
                                {answer.text}
                            </button>)}
                    </div>
                    {/* Display the answer-details after the question is answered */}
                    {answered && (
                        <div className="answer-details">
                            <p>{data["answer-details"]}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Popup;

