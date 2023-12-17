import Header from "./components/Header";
import emojiImage from "./assets/emoji.png"
import eighteenImage from "./assets/eighteenplus.png"
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-center">
      <Header/>
      <p className='mt-12 text-2xl flex justify-center'>
        <Image
          src={emojiImage}
          alt="Hotseat"
          className="emoji-image"
        />
        &nbsp;Welcome to Hot seat game&nbsp;
        <Image
          src={eighteenImage}
          alt="Hotseat"
          width={20}
          className="eighteen-image mt-1"
        />
      </p>

      {/* Action buttons  */}
      <center>
        <section className="max-w-max">
          <button className='btn flex py-4 place-content-center mt-7 bg-blue-500 text-white w-full px-14 rounded-full font-bold drop-shadow'>
            Start new game
          </button>
          <button className='btn flex py-4 place-content-center mt-7 bg-indigo-400 text-white w-full px-14 rounded-full font-bold drop-shadow'>
            Join game
          </button>
        </section>
      </center>
    </main>
  )
}
