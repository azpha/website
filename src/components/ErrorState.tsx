export default function ErrorState({
  type = "error",
}: {
  type: "error" | "loading" | "unavailable";
}) {
  if (type === "error") {
    return (
      <div className="flex flex-col bg-black text-white">
        <div className="px-2 text-center">
          <p>whoops, something went wrong</p>
        </div>
      </div>
    );
  } else if (type === "loading") {
    return (
      <div className="flex flex-col bg-black text-white">
        <div className="px-2 text-center">
          <h1 className="font-semibold">loading..</h1>
        </div>
      </div>
    );
  } else if (type === "unavailable") {
    return (
      <div className="flex flex-col bg-black text-white">
        <div className="px-2 text-center">
          <p>no game launched recently</p>
        </div>
      </div>
    );
  }
}
