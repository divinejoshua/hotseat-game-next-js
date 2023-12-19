export default function PlayerList() {
  return (
    <div className="px-2">
        {/* Active players list  */}
        <p className="text-lg mt-5"><span className="text-blue-500 font-bold">13</span> player(s) online</p>

        <div className="grid grid-cols-2 gap-4 mt-5">

            <div className="row-span-2 col-span-1 border rounded-lg shadow-sm px-3 py-3">
                <div className="player-card flex">
                    <p className="truncate">{"Player 1"}</p>
                </div>
            </div>

            <div className="row-span-2 col-span-1 border rounded-lg shadow-sm px-3 py-3">
                <div className="player-card flex">
                    <p className="truncate">{"Player 2"}</p>
                </div>
            </div>

            <div className="row-span-2 col-span-1 border rounded-lg shadow-sm px-3 py-3">
                <div className="player-card flex">
                    <p className="truncate">{"Player 3"}</p>
                </div>
            </div>

            <div className="row-span-2 col-span-1 border rounded-lg shadow-sm px-3 py-3">
                <div className="player-card flex">
                    <p className="truncate">{"Player 4"}</p>
                </div>
            </div>

        </div>
    </div>
  )
}
