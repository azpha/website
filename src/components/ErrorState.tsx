export default function ErrorState({ label }: { label: string }) {
  return (
    <div className="flex flex-col bg-black text-white">
      <div className="px-2 text-center">
        <p>{label}</p>
      </div>
    </div>
  );
}
