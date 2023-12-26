'use client'
import { useRouter } from "next/navigation";
import firebase from "../utils/firebase";
import {
  doc,
  setDoc,
  collection,
} from 'firebase/firestore';
import { generateGameId } from "../utils/generateId";

export default function CreateNewGame() {

    //HOOKS
    const router = useRouter();

    // DATA
    const colletionRef = collection(firebase, 'games');

    // Create new game code
    const getNewGameCode = async () =>{
      let createGame = {
          game_id : generateGameId().toString(),
          game_round : "",
      };

      try {
          const gameRef = doc(colletionRef, createGame.game_id);
          await setDoc(gameRef, createGame);
          localStorage.setItem('gameId', createGame.game_id);
          router.push('/join');

      } catch (error) {
          console.log(error);
      }

    }

  return (
    <button
        onClick={()=>getNewGameCode()}
        className='btn flex py-4 place-content-center mt-7 bg-indigo-500 text-white w-full px-14 rounded-full font-bold drop-shadow'>
        Start new game
    </button>
  )
}
