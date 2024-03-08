import React,{useContext, useState} from "react";
import { QuizContext } from "../Helpers/Contexts";
import "./MainMenu.css";

function MainMenu() {
    const {gameState,setGameState} = useContext(QuizContext);
  return (
    <div className="Menu">
      <h1>Main Menu</h1>
      <button className="btn btn-primary"
        onClick={()=>{
            setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  )
};

export default MainMenu;
