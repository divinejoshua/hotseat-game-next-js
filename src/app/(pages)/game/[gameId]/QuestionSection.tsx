"use client"

import { useEffect, useState } from "react";

export default function QuestionSection(props : any) {
  const [activeQuestion, setactiveQuestion] = useState<number>(1)
  const [countDownSeconds, setcountDownSeconds] = useState<number>(3)
  const [questionList, setquestionList] = useState([])
  // The send messge function

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
      <p className="text-lg float-left">Questions (5)</p>
      <p className="text-lg float-right">Game code  - <b>{props.gameId}</b></p>

      {
        countDownSeconds > 0 &&
        <div className="text-3xl mt-20 text-center text-gray-500">
          <p className="text-xl">Loading...</p>
          <h4 className="mt-2 text-5xl">{countDownSeconds}</h4>
        </div>
      }

    <div className='mt-16 message-card rounded shadow-sm border mt-5 py-10 px-7'>
        <div className='message-body text-center text-xl text-gray-700'>
            <p>At what age did you get your first car?</p>
        </div>
    </div>


    </div>

  )
}
