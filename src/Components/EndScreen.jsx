import React, { useContext } from "react"
import {Questions} from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Contexts";
import "./EndScreen.css";

function EndScreen() {
  const {score,setScore,setGameState} = useContext(QuizContext);
  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>
        Your Score : {score}/{Questions.length}
      </h3>
      <button className="btn btn-primary" onClick={restartQuiz}>Restart</button>
    </div>
  )
};

export default EndScreen;
