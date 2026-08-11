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
      <div className="bg-zinc-500 rounded-lg text-xs p-1 font-semibold">
        {name}
      </div>
    );
  };

  return (
    <div className="bg-neutral-800 rounded-lg p-2 border border-white">
      <div className="flex items-start justify-between gap-3">
        <h1 className="text-base font-bold">{title}</h1>
        <a href={link} target="_blank" className="shrink-0">
          <button className="bg-gray-500 border border-zinc-500 rounded-lg px-2 py-1 text-sm whitespace-nowrap">
            View &gt;
          </button>
        </a>
      </div>

      <div className="space-y-2">
        <p className="text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {pills.map((v, k) => {
            return <Pill key={k} name={v} />;
          })}
        </div>
      </div>
    </div>
  );
}
