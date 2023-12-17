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
    </main>
  )
}
