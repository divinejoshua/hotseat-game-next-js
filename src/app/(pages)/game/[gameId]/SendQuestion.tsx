"use client"

import { useState } from "react"

export default function SendQuestion(props : any) {

  //Data
  const [maxLength, setmaxLength] = useState<number>(140)
  const [messageBody, setmessageBody] = useState<string>("")
  const [messageSentSuccess, setmessageSentSuccess] = useState<boolean>(false)
  const [isError, setisError] = useState<boolean>(false)

   // The send messge function
   const SendMessage = () =>{
    console.log("Sending message")
    props.switchGameState(2)
   }

  return (
    <div>
      <h3></h3>
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
