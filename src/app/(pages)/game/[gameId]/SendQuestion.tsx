"use client"

import { useEffect, useState } from "react"

export default function SendQuestion(props : any) {

  //Data
  const [maxLength, setmaxLength] = useState<number>(140)
  const [messageBody, setmessageBody] = useState<string>("")
  const [messageSentSuccess, setmessageSentSuccess] = useState<boolean>(false)
  const [isError, setisError] = useState<boolean>(false)
  const [countDownSeconds, setcountDownSeconds] = useState<number>(10)

   // The send messge function
   const SendMessage = () =>{
    console.log("Sending message")
    props.switchGameState(2)
   }

   // Count down Timer effect
   useEffect(() => {
    if (countDownSeconds===0){
        props.switchGameState(2)
    }
    const timer : any = countDownSeconds > 0 && setInterval(() => setcountDownSeconds(countDownSeconds - 1), 1000);
    return () =>{ clearInterval(timer) };
  }, [countDownSeconds, props]);

  return (
    <div className="pt-3 px-2">
      <div className="mb-16">
        <h3 className="float-left text-lg mt-1">Write your question here</h3>
        <span className="float-right text-lg drop-shadow-xs font-bold">{countDownSeconds}</span>
      </div>
      <div className='message-body mt-5 text-gray-700'>
        <textarea
          onChange={e => setmessageBody(e.target.value)}
          onClick={() => setisError(false)}
          className='w-full border rounded p-3
            border-gray-300
            focus:outline-none
            focus:border-blue-500
            focus:ring-blue-500 focus:ring-1 focus:border-100 transition duration-0 hover:duration-150'
          maxLength={maxLength} rows={3} autoFocus
          placeholder="Ask a question...">
        </textarea>
        <p className='text-xs text-gray-500 mt-4 float-right'>{messageBody.length} / {maxLength}</p>
      </div>

      <center>
        <button
        className='btn flex place-content-center mt-10 bg-blue-500 text-white px-20 py-3 rounded-full font-bold drop-shadow'
        onClick={()=> SendMessage() }
        >
          Send message
        </button>
      </center>
    </div>
  )

}
