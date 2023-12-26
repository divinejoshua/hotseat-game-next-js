"use client"

import Header from "@/app/components/Header"
import QuestionSection from "../QuestionSection"
import SendQuestion from "../SendQuestion"
import { useState } from "react"

export default function GamePage({ params } : any) {

  const [showQuestionForm, setshowQuestionForm] = useState<boolean>(true)

  return (
    <main className="">
      <Header/>
      {
        showQuestionForm ?
          <SendQuestion setshowQuestionForm={setshowQuestionForm}/>
        :
          <QuestionSection setshowQuestionForm={setshowQuestionForm} gameId={params.gameId}/>
      }
    </main>
  )
}
