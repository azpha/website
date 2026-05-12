import MusicComponent from "../components/info/MusicComponent";
export default function Home() {
  return (
    <>
      <div className="p-2">
        <div className="grid grid-cols-3 gap-2">
          <div>
            <h1 className="text-2xl font-semibold">alex (19)</h1>
            <p>professional yapper</p>
            <p>qa stuff n things @ medal.tv</p>
            <p>sabres sth, go sabres</p>
            <p>khalil shakir truther</p>
            <p>scrappy doo 6 truther</p>
          </div>
          <img
            className="h-40 w-40 object-cover object-top rounded-lg"
            src="https://storage.alexav.gg/content/f49b355a-25cd-48ba-8421-da702620fcc6.jpeg"
          />
          <div>
            <h1 className="text-2xl font-bold text-center">socials</h1>
            <ul>
              <a href="https://twitter.com/onelonesabre" target="_blank">
                <li className="border-b-2 border-b-black">twitter</li>
              </a>
              <a href="https://instagram.com/alexfrantz07" target="_blank">
                <li className="border-b-2 border-b-black">instagram</li>
              </a>
              <a
                href="https://steamcommunity.com/id/bayharborsmoocher/"
                target="_blank"
              >
                <li className="border-b-2 border-b-black">steam</li>
              </a>
              <a href="https://medal.tv/u/alexav" target="_blank">
                <li className="border-b-2 border-b-black">medal</li>
              </a>
              <a
                href="https://open.spotify.com/user/vdcj47vkp0cp9jkusnz5nckbj?si=825f8fdef40746ca"
                target="_blank"
              >
                <li className="border-b-2 border-b-black">spotify</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <MusicComponent />
      <div className="p-2">
        <div className="flex flex-row justify-between">
          <div className="w-[240px]">
            <h1 className="text-2xl font-semibold">about me</h1>
            <p>
              born and raised buffalonian + wnyer. doing qa work for 4 years and
              learning software engineering on the side. i also play acoustic
              guitar, been gaming since i was 4 and love going to games in
              Buffalo. incredibly awkward, but that's besides the point
            </p>
          </div>

          <div className="text-2xl w-[200px] mx-auto my-auto">
            <div>
              <span className="bg-black text-white px-1">shows</span> dexter,
              pitt, tlou, twd, yellowstone
            </div>
            <div>
              <span className="bg-black text-white px-1">music</span> ptv, 5sos,
              treaty oak, zach top, zach bryan
            </div>
            <div>
              <span className="bg-black text-white px-1">teams</span> bills,
              sabres, yanks
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
