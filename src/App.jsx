import { useState,useContext } from 'react'

import './App.css'
import MainMenu from "./Components/MainMenu.jsx";
import Quiz from "./Components/Quiz.jsx";
import EndScreen from "./Components/EndScreen.jsx";
import { QuizContext } from './Helpers/Contexts.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function App() {
  const [gameState,setGameState]=useState("menu");
  const[score,setScore]=useState(0);
  return(
    <div className='App'>
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
      
    </div>
  )
}

export default App
