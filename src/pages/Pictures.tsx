import { Link } from "react-router-dom";
import PictureCarousel from "../components/modules/PictureCarousel";
import Footer from "../components/Footer";

export default function Pictures() {
  return (
    <main className="my-12 sm:my-20">
      <div className="py-2">
        <p className="opacity-85 text-sm text-left">MY LIFE, PICTURED</p>
        <h1 className="text-3xl sm:text-4xl text-balance py-2">Pictures</h1>
        <p className="py-2">
          A rolling selection of photos from my camera roll — Western New York,
          the homelab, and whatever else I pointed a camera at.
        </p>
      </div>

      <hr className="my-4 border-zinc-800" />

      <PictureCarousel />

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
