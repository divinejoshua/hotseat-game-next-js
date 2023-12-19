import Header from "@/app/components/Header"

export default function GamePage({ params } : any) {
  const gameId = params.gameId

  return (
    <main className="">
      <Header/>
      <div className="mt-3">You game Id is <b>{gameId}</b></div>
    </main>
  )
}
