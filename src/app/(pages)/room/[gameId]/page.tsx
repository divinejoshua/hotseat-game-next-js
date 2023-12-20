import Header from "@/app/components/Header"
import PlayerList from "@/app/components/PlayerList"
import Link from "next/link"

export default function GamePage({ params } : any) {
  const gameId = params.gameId

  return (
    <main className="">
      <Header/>
      <div className="mt-3 text-center text-lg">
        You game Id is
        <h2 className="mt-2 text-3xl font-bold tracking-widest">{gameId}</h2>
      </div>

      {/* Player list */}
      <PlayerList/>

      {/* This button is only available to the game admin */}
      <center>
        <Link href={'/room/123434'}>
          <button className='btn flex py-3 place-content-center mt-10 bg-blue-500 text-white px-12 rounded-full font-bold drop-shadow'>
            Start game
          </button>
        </Link>
      </center>
    </main>
  )
}
