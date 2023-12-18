import Header from "@/app/components/Header";
import JoinGameForm from "@/app/components/JoinGameForm";

export default function JoinGamePage() {
  return (
    <main className="">
        <Header/>
        <p className="mt-3 text-lg mb-3">Join a new game</p>
        <JoinGameForm/>
    </main>
  )
}
