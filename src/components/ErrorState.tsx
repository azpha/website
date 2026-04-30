export default function ErrorState({
  type = "error",
}: {
  type: "error" | "loading" | "unavailable";
}) {
  if (type === "error") {
    return (
      <div className="flex flex-col bg-zinc-800 text-white">
        <div className="px-2">
          <p>whoops, something went wrong</p>
        </div>
      </div>
    );
  } else if (type === "loading") {
    return (
      <div className="flex flex-col bg-zinc-800 text-white">
        <div className="px-2">
          <h1 className="font-semibold">loading..</h1>
        </div>
      </div>
    );
  } else if (type === "unavailable") {
    return (
      <div className="flex flex-col bg-zinc-800 text-white">
        <div className="px-2">
          <p>no game launched recently</p>
        </div>
      </div>
    );
  }
}
