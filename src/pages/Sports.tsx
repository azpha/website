import FantasyStatus from "../components/FantasyStatus";
import ScoreModule from "../components/modules/ScoreModule";

export default function Sports() {
  return (
    <div>
      <div className="p-2">
        <ScoreModule />
      </div>

      <hr className="border-black border-1" />

      <div className="p-2">
        <h1 className="text-2xl font-semibold">fantasy</h1>
        <FantasyStatus />
      </div>
    </div>
  );
}
