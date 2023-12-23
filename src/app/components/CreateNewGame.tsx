'use client'
import { useRouter } from "next/navigation";

export default function CreateNewGame() {

    const router = useRouter();

    // Create new game code
    const getNewGameCode = () =>{
        localStorage.setItem('gameId', '345456');
        router.push('/join');
    }

  return (
    <button
        onClick={()=>getNewGameCode()}
        className='btn flex py-4 place-content-center mt-7 bg-indigo-500 text-white w-full px-14 rounded-full font-bold drop-shadow'>
        Start new game
    </button>
  )
}
