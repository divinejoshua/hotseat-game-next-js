"use client"

import Header from "@/app/components/Header"
import QuestionSection from "./QuestionList"
import SendQuestion from "./SendQuestion"

export default function GamePage({ params } : any) {
  return (
    <main className="">
      <Header/>
      <QuestionSection/>
      <SendQuestion/>
    </main>
  )
}
