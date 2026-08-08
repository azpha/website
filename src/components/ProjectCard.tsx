interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  pills: string[];
}
interface PillProps {
  name: string;
}

export default function ProjectCard({
  title,
  description,
  link,
  pills,
}: ProjectCardProps) {
  const Pill = ({ name }: PillProps) => {
    return (
      <div className="bg-zinc-500 rounded-lg max-w-fit text-xs p-1 inline-block font-semibold">
        {name}
      </div>
    );
  };

  return (
    <div className="bg-neutral-800 rounded-lg p-2 border border-white">
      <div className="flex justify-between">
        <h1 className="text-1xl font-bold">{title}</h1>
        <a href={link} target="_blank">
          <button className="bg-gray-500 border border-zinc-500 rounded-lg px-2 py-1 text-sm">
            View &gt;
          </button>
        </a>
      </div>

      <div className="space-y-2 w-[75%]">
        <p className="text-sm">{description}</p>
        <div className="space-x-2">
          {pills.map((v, k) => {
            return <Pill key={k} name={v} />;
          })}
        </div>
      </div>
    </div>
  );
}
