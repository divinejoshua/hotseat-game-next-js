"use client"

import Header from "@/app/components/Header"
import QuestionSection from "./QuestionSection"
import SendQuestion from "./SendQuestion"
import { useState } from "react"

export default function GamePage({ params } : any) {

  const [gameState, setgameState] = useState<number>(1)

  // The send messge function
  const switchGameState = (state : number) =>{
    setgameState(state)
  }

  return (
    <main className="">
      <Header/>
      {/* {gameState} */}
      {/* <SendQuestion switchGameState={switchGameState}/> */}
      <QuestionSection switchGameState={switchGameState} gameId={params.gameId}/>
    </main>
  )
}
