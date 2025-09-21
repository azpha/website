import { useState } from "react";
import Overlay from "../Overlay";
import Picture from "../Picture";

const images = [
  "https://storage.alexav.gg/content/1f822215-0768-424d-893a-13bcd10aa98b.jpg",
  "https://storage.alexav.gg/content/de890eaf-fc73-42a4-9fbe-a62313394a4c.jpg",
  "https://storage.alexav.gg/content/d057af80-3d03-45ca-88b2-680c1e7c63c1.jpg",
  "https://storage.alexav.gg/content/1d717aab-3058-405a-b04d-324d7ab3e658.jpg",
  "https://storage.alexav.gg/content/2f36c1dd-eaf8-4fd3-a3cd-1d25fe8f5a07.jpg",
];

export default function PictureCarousel() {
  const [selectedImage, setSelectedImage] = useState<string>("");

  return (
    <>
      {selectedImage !== "" && (
        <Overlay onClose={() => setSelectedImage("")}>
          <img width="400" height="400" src={selectedImage} />
        </Overlay>
      )}

      <div className="border border-white border-solid rounded-lg p-2">
        <h1 className="text-2xl font-bold italic">pictures</h1>

        <div className="whitespace-nowrap overflow-x-auto">
          <div className="my-2 space-x-2">
            {images.map((v, k) => {
              return (
                <Picture
                  key={k}
                  image={v}
                  onClick={() => setSelectedImage(v)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
