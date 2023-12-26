"use client"

import Header from "@/app/components/Header"
import QuestionSection from "../QuestionSection"
import SendQuestion from "../SendQuestion"
import { useEffect, useState } from "react"
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

export default function GamePage({ params } : any) {

  //HOOKS
  const gameId = params.gameId

  // DATA
  const gamesColletionRef = collection(firebase, 'games');
  const [showQuestionForm, setshowQuestionForm] = useState<boolean>(true)
  const [gameState, setgameState] = useState<string>("")


  // Check for current game round
  useEffect(() => {
    // Query Statement
    const queryClause = query(
      gamesColletionRef,
      where('game_id', '==', gameId),
    );

    // Get messages from database
    const getGameState = onSnapshot(queryClause, (querySnapshot) => {
      let gameDetails : any = {}
      querySnapshot.forEach((doc) => {
          gameDetails = doc.data()
      });

      // If there is a game round then redirect the users to the games page
      if(gameDetails.game_state){
        setgameState(gameDetails.game_state)
      }
    })

    return () => {
      getGameState
    }
  }, [gameState])

  return (
    <main className="">
      <Header/>
      {
        // Check the game state
        gameState === GAME_STATE.GAME_SEND_QUESTIONS ?
          <SendQuestion gameId={params.gameId}/>
        :  gameState === GAME_STATE.GAME_LIST_QUESTIONS ?
          <QuestionSection gameId={params.gameId}/>
        : ""
      }
    </main>
  )
}
