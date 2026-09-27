// alt text lives next to each src so descriptions cannot drift from the image.
// the alt values below are placeholders — replace them with what is actually
// in each photo, since that is what makes them findable in image search
const images: { src: string; alt: string }[] = [
  {
    src: "https://storage.alexav.gg/content/1b81a43e-7b6b-4969-944a-f2f334405477.jpg",
    alt: "A photo from Alex's camera roll",
  },
  {
    src: "https://storage.alexav.gg/content/91bce3da-36c3-497f-aaa9-b782d60c9cd7.jpg",
    alt: "A photo from Alex's camera roll",
  },
  {
    src: "https://storage.alexav.gg/content/8ce1c14f-864e-4915-bff4-4cbf73247023.jpg",
    alt: "A photo from Alex's camera roll",
  },
  {
    src: "https://storage.alexav.gg/content/6687d643-fb69-42f6-8480-51869cdb7efb.jpg",
    alt: "A photo from Alex's camera roll",
  },
  {
    src: "https://storage.alexav.gg/content/f8252684-eb5a-4344-baa1-46f4eab46916.jpg",
    alt: "A photo from Alex's camera roll",
  },
  {
    src: "https://storage.alexav.gg/content/363308c8-ecb6-4b2f-8dba-1c7f7f26f087.jpg",
    alt: "A photo from Alex's camera roll",
  },
  {
    src: "https://storage.alexav.gg/content/1aca5645-0d3d-43bf-a7b7-bd34bcc374b4.png",
    alt: "A photo from Alex's camera roll",
  },
  {
    src: "https://storage.alexav.gg/content/1f822215-0768-424d-893a-13bcd10aa98b.jpg",
    alt: "A photo from Alex's camera roll",
  },
  {
    src: "https://storage.alexav.gg/content/de890eaf-fc73-42a4-9fbe-a62313394a4c.jpg",
    alt: "A photo from Alex's camera roll",
  },
  {
    src: "https://storage.alexav.gg/content/d057af80-3d03-45ca-88b2-680c1e7c63c1.jpg",
    alt: "A photo from Alex's camera roll",
  },
  {
    src: "https://storage.alexav.gg/content/1d717aab-3058-405a-b04d-324d7ab3e658.jpg",
    alt: "A photo from Alex's camera roll",
  },
  {
    src: "https://storage.alexav.gg/content/2f36c1dd-eaf8-4fd3-a3cd-1d25fe8f5a07.jpg",
    alt: "A photo from Alex's camera roll",
  },
];

export default function PictureCarousel() {
  return (
    <ul className="my-2 grid grid-cols-2 sm:grid-cols-3 gap-2 list-none">
      {images.map((image, k) => {
        return (
          <li key={image.src}>
            <img
              // the first row is above the fold on most viewports, so lazy
              // loading it would only delay the LCP candidate
              loading={k < 3 ? "eager" : "lazy"}
              decoding="async"
              src={image.src}
              alt={image.alt}
              width={320}
              height={96}
              className="w-full h-24 object-cover rounded-md"
            />
          </li>
        );
      })}
    </ul>
  );
}
