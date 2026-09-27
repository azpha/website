import { Link } from "react-router-dom";
import FantasyStatus from "../components/FantasyStatus";
import ScoreModule from "../components/modules/ScoreModule";
import Footer from "../components/Footer";

export default function Sports() {
  return (
    <main className="my-12 sm:my-20">
      <div className="py-2">
        <p className="opacity-85 text-sm text-left">GO BILLS, GO SABRES</p>
        <h1 className="text-3xl sm:text-4xl text-balance py-2">Sports</h1>
        <p className="py-2">
          Live scores for the Buffalo Bills, Buffalo Sabres and New York
          Yankees, plus however badly my fantasy team is doing this week.
        </p>
      </div>

      <hr className="my-4 border-zinc-800" />

      <section aria-labelledby="scores">
        <h2 id="scores" className="opacity-85 text-sm text-left pb-2">
          LATEST SCORES
        </h2>
        <ScoreModule />
      </section>

      <hr className="my-4 border-zinc-800" />

      <section aria-labelledby="fantasy">
        <h2 id="fantasy" className="opacity-85 text-sm text-left pb-2">
          FANTASY
        </h2>
        <FantasyStatus />
      </section>

      <hr className="my-4 border-zinc-800" />

      <p className="text-sm">
        <Link to="/" className="underline">
          &lt; Back home
        </Link>
      </p>

      <hr className="my-4 border-zinc-800" />

      <Footer />
    </main>
  );
}
