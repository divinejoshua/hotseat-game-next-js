'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function JoinGameForm() {

  // HOOKS
  const router = useRouter()

  // DATA
  const [isValidGameCode, setisValidGameCode] = useState<boolean>(false)
  const [gameIdFromLocalstorage, setgameIdFromLocalstorage] = useState<any>()
  const [gameIdInput, setgameIdInput] = useState<string>("")

  const joinGame = () =>{
    if(isValidGameCode || gameIdFromLocalstorage){
      localStorage.removeItem('gameId');
      router.push(`/room/${gameIdInput}`);
    }
  }

  useEffect(() => {
    setgameIdFromLocalstorage(localStorage.getItem('gameId') )
    setgameIdInput(localStorage.getItem('gameId') || "")
    return () => {}
  }, [])

  return (
    <div>

    {/* Game code input */}
     <input
      type="number"
      value={gameIdInput}
      onChange={(e)=> setgameIdInput(e.target.value)}
      autoFocus={true}
      placeholder="Enter game code"
      className="form-control text-lg mt-1 w-full py-3 px-3 tracking-widest rounded border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 focus:border-100 transition duration-0 hover:duration-150"
     />

    {/* Player name input  */}
    { isValidGameCode || gameIdFromLocalstorage ?
      <>
        <p className="mt-4 text-lg">Enter your name</p>
        <input
          type="text"
          placeholder="Enter your name"
          autoFocus={true}
          className="form-control text-lg mt-1 w-full py-3 px-3 tracking-widest rounded border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 focus:border-100 transition duration-0 hover:duration-150"
        />
      </> : ''
    }
      <button
        onClick={()=> isValidGameCode || gameIdFromLocalstorage ? joinGame() :setisValidGameCode(true)}
        className='btn flex py-3 px-10 place-content-center mt-7 bg-blue-500 text-white rounded-lg w-full font-bold drop-shadow'>
        {isValidGameCode || gameIdFromLocalstorage ? "Join game" : "Next"}
      </button>
    </div>
  )
}
