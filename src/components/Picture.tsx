export default function Picture({
  image,
  onClick,
}: {
  image: string;
  onClick: () => void;
}) {
  return (
    <img
      src={image}
      className="inline w-[200px] max-h-[100px] object-cover"
      onClick={onClick}
    />
  );
}
