"use client"

import Header from "@/app/components/Header"
import QuestionSection from "./QuestionList"
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
      {gameState}
      <QuestionSection switchGameState={switchGameState}/>
      <SendQuestion switchGameState={switchGameState}/>
    </main>
  )
}
