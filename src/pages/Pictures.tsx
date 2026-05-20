import PictureCarousel from "../components/modules/PictureCarousel";
export default function PicturesPage() {
  return (
    <div className="p-2 flex flex-col justify-center">
      <div className="h-96 w-full overflow-y-auto">
        <PictureCarousel />
      </div>
    </div>
  );
}
