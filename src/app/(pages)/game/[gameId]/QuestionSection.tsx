"use client"

import { useEffect, useState } from "react";

export default function QuestionSection(props : any) {

  //Data
  const [activeQuestion, setactiveQuestion] = useState<number>(1)
  const [countDownSeconds, setcountDownSeconds] = useState<number>(3)
  const [questionList, setquestionList] = useState([
    "What is the capital of France?",
    "Who painted the Mona Lisa?",
    "What year was JavaScript created?",
    "How many continents are there?",
    "What is the powerhouse of the cell?"
  ])

  // Count down Timer effect
  useEffect(() => {
    console.log(props.gameId)
    let timer : any
    if (countDownSeconds>0){
      timer = countDownSeconds > 0 && setInterval(() => setcountDownSeconds(countDownSeconds - 1), 1000);
    }
    return () =>{ clearInterval(timer) };
  }, [countDownSeconds, props]);

  return (
    <div className="pt-3 px-2">
      <p className="text-lg float-left">Questions</p>
      <p className="text-lg float-right">Game code &nbsp;  - &nbsp; <b>{props.gameId}</b></p>

      {/* Loader  */}
      {
        countDownSeconds > 0 &&
        <div className="text-3xl mt-20 text-center text-gray-500">
          <p className="text-xl">Loading...</p>
          <h4 className="mt-2 text-5xl">{countDownSeconds}</h4>
        </div>
      }

      {/* Question box */}
      <div>
        <div className='mt-16 message-card rounded shadow-sm border mt-5 py-10 px-7'>
            <div className='message-body text-center text-xl text-gray-700'>
                <p>At what age did you get your first car?</p>
            </div>
        </div>

      {/* Pagination  */}
        <div className="mt-10 flex justify-between">
          <button className='btn py-2 place-content-center bg-purple-500 text-white px-4 rounded-lg font-bold drop-shadow'>
            Prev
          </button>
          <p className="text-center text-lg mt-2"> 1/6</p>
          <button className='btn py-2 place-content-center bg-blue-500 text-white px-4 rounded-lg font-bold drop-shadow'>
            Next
          </button>
        </div>

        <center>
          <button className='btn flex py-3 place-content-center mt-10 bg-blue-500 text-white px-12 rounded-full font-bold drop-shadow'>
            Finish
          </button>
        </center>
      </div>


    </div>

  )
}
