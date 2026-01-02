import MusicComponent from "../info/MusicComponent";
import TVComponent from "../info/TVComponent";

export default function InfoModule() {
  return (
    <div className="border border-white border-solid rounded-lg p-2">
      <div className="flex flex-wrap justify-between p-2 space-y-2">
        <div>
          <h1 className="text-2xl font-bold italic opacity-95">alex, 18</h1>
          <img
            src="https://storage.alexav.gg/content/6d87f5ac-e7f0-413c-84a6-6838e590b7d9.png"
            className="rounded-md w-[150px] h-[110px] object-cover object-left-top"
            alt="Profile"
          />
          <div className="pt-2">
            <MusicComponent />
            <a
              href="https://last.fm/user/lulawex"
              target="_blank"
              className="hover:underline w-fit opacity-50"
            >
              powered by last.fm
            </a>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl italic">what i do</h1>
          <p>
            qa @{" "}
            <a
              href="https://medal.tv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-[#bff83e]"
            >
              medal.tv
            </a>
            , game, code
          </p>
          <h1
            className="italic opacity-50 font-semibold underline"
            onClick={() => navigator.clipboard.writeText("alex@vierfrantz.com")}
          >
            alex@vierfrantz.com
          </h1>

          <hr className="my-2" />

          <h1 className="font-bold text-2xl italic">obsessed with</h1>
          <p>dexter, tlou, twd</p>

          <hr className="my-2" />

          <h1 className="font-bold text-2xl italic">status</h1>
          <TVComponent />
        </div>
      </div>
    </div>
  );
}
