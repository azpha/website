import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

function Pill({ name }: { name: string }) {
  return (
    <div className="bg-zinc-500 rounded-lg text-xs p-1 font-semibold">
      {name}
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-neutral-800 rounded-lg p-2 border border-white">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-bold">
          <Link to={`/projects/${project.slug}`} className="hover:underline">
            {project.title}
          </Link>
        </h3>
        <Link to={`/projects/${project.slug}`} className="shrink-0">
          <button className="bg-gray-500 border border-zinc-500 rounded-lg px-2 py-1 text-sm whitespace-nowrap">
            View &gt;
          </button>
        </Link>
      </div>

      <div className="space-y-2">
        <p className="text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.pills.map((v) => (
            <Pill key={v} name={v} />
          ))}
        </div>
      </div>
    </div>
  );
}
