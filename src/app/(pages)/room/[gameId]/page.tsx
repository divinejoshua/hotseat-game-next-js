"use client"
import Header from "@/app/components/Header"
import PlayerList from "@/app/components/PlayerList"
import firebase from "@/app/utils/firebase";
import Link from "next/link"
import {
  doc,
  onSnapshot,
  setDoc,
  collection,
  query,
  where,
  orderBy,
} from 'firebase/firestore';
import { useEffect, useState } from "react";
export default function GamePage({ params } : any) {

  // DATA
  const gameId = params.gameId
  const playersColletionRef = collection(firebase, 'players');
  const [playerList, setplayerList] = useState<[]>([])
  const [playerListOrder, setplayerListOrder] = useState<any>([])
  const [isPlayerAdmin, setisPlayerAdmin] = useState<boolean>(false)


  // Re order playerList by time created
  const reorderPlayerListAccendingOrder = (playerList : any) =>{
    playerList.sort((a : any , b : any) => a.createdAt - b.createdAt);
    setplayerListOrder(playerList)
  }

  // check if is the admin
  const checkIfPlayerIsAdmin =() =>{
    if(!localStorage.getItem('playerDetails')) return false
    let playerDetails = JSON.parse(localStorage.getItem('playerDetails') || "");

    // Return if the player list is empty
    if(playerListOrder.length < 1) return false;

    if(playerListOrder[0].player_id ===playerDetails.player_id){
      setisPlayerAdmin(true)
    }
    return false
  }


  // This function will create a new game round and redirect the users to the game pages
  const startGame = () =>{
    console.log("Starting game...")
  }

  // Get player List
  useEffect(() => {
    // Query Statement
    const queryClause = query(
      playersColletionRef,
      where('game_id', '==', gameId),
    );

    // Get messages from database
    const getPlayerList = onSnapshot(queryClause, (querySnapshot) => {
      const response : [] | any = [];
      querySnapshot.forEach((doc) => {
        response.push(doc.data())
      });
      setplayerList(response)
    })

    return () => {
      getPlayerList
    }
  }, [])

    // Re order player list
    useEffect(() => {
      // Call the function and log the reordered list
      reorderPlayerListAccendingOrder(playerList)
      checkIfPlayerIsAdmin() //Check if the player is admin
      if(!localStorage.getItem('playerDetails')) console.log("out")
      return () => {
      }
    }, [playerList])


    // Check for current game round
    useEffect(() => {
      //
    }, [])

  return (
    <main className="">
      <Header/>
      <div className="mt-3 text-center text-lg">
        You game Id is
        <h2 className="mt-2 text-3xl font-bold tracking-widest">{gameId}</h2>
      </div>

      {/* Player list */}
      <PlayerList playerList={playerListOrder}/>

      {/* This button is only available to the game admin */}
      {/* The route is /game/<gameID>/<gameRoundId> */}
      {
        isPlayerAdmin &&
          <center>
            {/* <Link href={'/game/123434/tesfghbh'}> */}
              <button
                onClick={()=> startGame()}
                className='btn flex py-3 place-content-center mt-10 bg-blue-500 text-white px-12 rounded-full font-bold drop-shadow'>
                Start game
              </button>
            {/* </Link> */}
          </center>
      }
    </main>
  )
}
