"use client"

import { useEffect, useState } from "react";
import {
  doc,
  onSnapshot,
  setDoc,
  collection,
  query,
  where,
  updateDoc,
} from 'firebase/firestore';
import firebase from "@/app/utils/firebase"
import GAME_STATE from "@/app/utils/gamestate"
import {v4 as uuidv4} from 'uuid';

export default function QuestionSection(props : any) {

  //Data
  let gameId = props.gameId
  const [activeQuestion, setactiveQuestion] = useState<number>(1)
  const [countDownSeconds, setcountDownSeconds] = useState<number>(3)
  const gamesColletionRef = collection(firebase, 'games');
  const [gameAdmin, setgameAdmin] = useState<boolean>(false)
  const [questionList, setquestionList] = useState([
    "What is the capital of France?",
    "Who painted the Mona Lisa?",
    "What year was JavaScript created?",
    "How many continents are there?",
    "What is the cell?"
  ])

  // The change question function
  const changeQuestion = (value: number) =>{
    setactiveQuestion(value)
    setcountDownSeconds(3)
  }

  // Finish Question then takes user back to the Write question page by updating game state
  const finishQuestion = () =>{
    const updatedGame = {
      game_state : GAME_STATE.GAME_SEND_QUESTIONS,
      game_round : uuidv4(),
    };

    try {
      const gameRef = doc(gamesColletionRef, gameId);
      updateDoc(gameRef, updatedGame);
    } catch (error) {
      // console.error(error);
    }
  }


  // Count down Timer effect
  useEffect(() => {
    let timer : any
    if (countDownSeconds>0){
      timer = countDownSeconds > 0 && setInterval(() => setcountDownSeconds(countDownSeconds - 1), 1000);
    }
    return () =>{ clearInterval(timer) };
  }, [countDownSeconds, props]);

  // Use effect
  useEffect(() => {

    // Set admin
    if(localStorage.getItem("gameAdmin") === "true") {
      setgameAdmin(true);
    }

    if(questionList.length===0){
      setactiveQuestion(0)
    }
    return () => {
    }
  }, [questionList])

  return (
    <div className="pt-3 px-2">
      <div className="clear-both">
        <p className="text-lg float-left">Questions</p>
        <p className="text-lg float-right">Game code &nbsp;  - &nbsp; <b>{props.gameId}</b></p>
      </div>
      {/* Loader  */}
      {
        countDownSeconds > 0 &&
        <div className="text-3xl mt-20 text-center text-gray-500">
          <p className="text-xl">Loading...</p>
          <h4 className="mt-2 text-5xl">{countDownSeconds}</h4>
        </div>
      }

      {/* Question box */}
      { countDownSeconds === 0 && questionList.length > 1 &&
        <div className="mt-10">
            <div className='message-card rounded shadow-sm border mt-5 py-10 px-7'>
                <div className='message-body text-center text-xl text-gray-700'>
                    <p>{questionList[activeQuestion-1]}</p>
                </div>
            </div>

            {/* Pagination  */}
            <div className="mt-10 flex justify-between">
              { gameAdmin ?
                <button className='btn py-2 place-content-center bg-purple-500 text-white px-4 rounded-lg font-bold drop-shadow'
                  onClick={() => changeQuestion(activeQuestion-1)}
                  disabled={activeQuestion === 1}
                  >
                  Prev
                </button> : <p></p>
              }
              <p className="text-center text-lg mt-2"> {activeQuestion}/{questionList.length}</p>

              { gameAdmin ?
                <button className='btn py-2 place-content-center bg-blue-500 text-white px-4 rounded-lg font-bold drop-shadow'
                  onClick={() => changeQuestion(activeQuestion+1)}
                  disabled={activeQuestion == questionList.length}
                >
                  Next
                </button> : <p></p>
              }
            </div>

            {/* Finish and send the user back to the question form  */}
            { activeQuestion === questionList.length &&
              <center>
                <button className='btn flex py-3 place-content-center mt-10 bg-blue-500 text-white px-12 rounded-full font-bold drop-shadow'
                 onClick={() => finishQuestion()}
                >
                  Play again
                </button>
              </center>
            }

        </div>
      }

      {/* If there were no questions asked */}
      {
        countDownSeconds === 0 && questionList.length ===0 &&
        <div>
          <center>
            <p className="mt-20 text-2xl">No Questions asked !</p>
            <button className='btn flex py-3 place-content-center mt-10 bg-blue-500 text-white px-12 rounded-full font-bold drop-shadow'
              onClick={() => finishQuestion()}
            >
              Play again
            </button>
          </center>
        </div>
      }


    </div>

  )
}
