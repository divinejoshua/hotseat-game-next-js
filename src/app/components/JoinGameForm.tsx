'use client'
import { useState } from "react"

export default function JoinGameForm() {
  return (
    <div>
     <input
      type="number"
      placeholder="Enter game code"
      className="form-control text-center text-lg mt-1 w-full py-3 px-3 tracking-widest rounded border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 focus:border-100 transition duration-0 hover:duration-150"
     />
      <button className='btn flex py-3 px-10 place-content-center mt-7 bg-blue-500 text-white rounded-lg w-full font-bold drop-shadow'>
        Join game
      </button>
    </div>
  )
}
