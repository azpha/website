export default function ErrorState({
  type = "error",
}: {
  type: "error" | "loading" | "unavailable";
}) {
  if (type === "error") {
    return (
      <div className="flex flex-col bg-black border border-black text-white">
        <div className="px-2">
          <h1 className="text-lg font-semibold">uh oh :(</h1>
          <p>something went wrong loading this stat</p>
        </div>
      </div>
    );
  } else if (type === "loading") {
    return (
      <div className="flex flex-col bg-black border border-black text-white">
        <div className="px-2">
          <h1 className="text-lg font-semibold">loading..</h1>
          <p>hang tight..</p>
        </div>
      </div>
    );
  } else if (type === "unavailable") {
    return (
      <div className="flex flex-col bg-black border border-black text-white">
        <div className="px-2">
          <h1 className="text-lg font-semibold">nothing here :(</h1>
          <p>no game launched recently</p>
        </div>
      </div>
    );
  }
}
