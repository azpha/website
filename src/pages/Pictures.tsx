import PictureCarousel from "../components/modules/PictureCarousel";
export default function PicturesPage() {
  return (
    <div className="p-2 flex flex-col justify-center">
      <h1 className="text-2xl font-bold">pictures</h1>

      <div className="h-96 overflow-y-auto">
        <PictureCarousel />
      </div>
    </div>
  );
}
