'use client'
import { useState } from "react"

export default function JoinGameForm() {

  // DATA
  const [isValidGameCode, setisValidGameCode] = useState<boolean>(false)

  return (
    <div>

    {/* Game code input */}
     <input
      type="number"
      autoFocus={true}
      placeholder="Enter game code"
      className="form-control text-lg mt-1 w-full py-3 px-3 tracking-widest rounded border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 focus:border-100 transition duration-0 hover:duration-150"
     />

    {/* Player name input  */}
    { isValidGameCode &&
      <>
        <p className="mt-4 text-lg">Enter your name</p>
        <input
          type="text"
          placeholder="Enter your name"
          autoFocus={true}
          className="form-control text-lg mt-1 w-full py-3 px-3 tracking-widest rounded border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 focus:border-100 transition duration-0 hover:duration-150"
        />
      </>
    }
      <button
        onClick={()=> setisValidGameCode(true)}
        className='btn flex py-3 px-10 place-content-center mt-7 bg-blue-500 text-white rounded-lg w-full font-bold drop-shadow'>
        {isValidGameCode ? "Join game" : "Next"}
      </button>
    </div>
  )
}
