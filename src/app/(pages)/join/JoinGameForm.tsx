'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import firebase from '../../utils/firebase';
import {
    doc,
    onSnapshot,
    setDoc,
    collection,
    query,
    where,
  } from 'firebase/firestore';

export default function JoinGameForm() {

  // HOOKS
  const router = useRouter()

  // DATA
  const gamesColletionRef = collection(firebase, 'games');
  const [isValidGameCode, setisValidGameCode] = useState<boolean>(false)
  const [formErrorMessage, setformErrorMessage] = useState<string>("")
  const [gameIdFromLocalstorage, setgameIdFromLocalstorage] = useState<any>()
  const [gameIdInput, setgameIdInput] = useState<string>("")

  const joinGame = () =>{
    if(isValidGameCode || gameIdFromLocalstorage){
      localStorage.removeItem('gameId');
      router.push(`/room/${gameIdInput}`);
    }
  }

  // // Add player to game
  // async function addPlayerToGame() {
  //   const createPlayer = {
  //     game_id : gameIdInput,
  //     player_id : generateGameId().toString(),
  //   };

  //   try {
  //     const playerRef = doc(colletionRef, school.id);
  //     setDoc(playerRef, createPlayer);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // Check if the game code is valid
  async function checkGameId(gameIdInput : string) {

    // Return false if gamecode is an empty string
    if (gameIdInput===""){return}

    // Query Statement
    const queryClause = query(
      gamesColletionRef,
      where('game_id', '==', gameIdInput),
    );

    let gameDetails : any = {}

      // Get game details from database
      onSnapshot(queryClause, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            gameDetails = doc.data()
            console.log(doc.data())
        });

        // if game code exists , then set the valid state to true
        if(gameDetails.game_id){
          setisValidGameCode(true)
        } else{
          setformErrorMessage("Invalid game code")
        }
    });

  }

  useEffect(() => {
    setgameIdFromLocalstorage(localStorage.getItem('gameId') )
    setgameIdInput(localStorage.getItem('gameId') || "")
    checkGameId(localStorage.getItem('gameId') || "")
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
      readOnly={isValidGameCode ? true : false}
      placeholder="Enter game code"
      onClick={() => setformErrorMessage("")}
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
        onClick={()=> isValidGameCode || gameIdFromLocalstorage ? joinGame() :checkGameId(gameIdInput)}
        className='btn flex py-3 px-10 place-content-center mt-7 bg-blue-500 text-white rounded-lg w-full font-bold drop-shadow'>
        {isValidGameCode || gameIdFromLocalstorage ? "Join game" : "Next"}
      </button>

      {/* If there is an error message */}
      { formErrorMessage &&  <p className="mt-2 text-red-500">{formErrorMessage}</p>}
    </div>
  )
}
