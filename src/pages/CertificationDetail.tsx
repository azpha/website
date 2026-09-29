import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NotFound from "./NotFound";
import { findCertification } from "../data/projects";

export default function CertificationDetail() {
  const { slug } = useParams();
  const cert = findCertification(slug);

  if (!cert) return <NotFound />;

  return (
    <main className="my-12 sm:my-20">
      <nav aria-label="Breadcrumb" className="py-2">
        <p className="opacity-85 text-sm text-left">
          <Link to="/certifications" className="hover:underline">
            CERTIFICATIONS
          </Link>
        </p>
      </nav>

      <div className="py-2">
        <h1 className="text-3xl sm:text-4xl text-balance py-2">{cert.title}</h1>
        <div className="flex flex-wrap gap-2 py-2">
          {cert.pills.map((pill) => (
            <div
              key={pill}
              className="bg-zinc-500 rounded-lg text-xs p-1 font-semibold"
            >
              {pill}
            </div>
          ))}
        </div>
      </div>

      <div className="py-2 space-y-6">
        {cert.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="py-4">
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-300 hover:underline"
        >
          View the certificate &gt;
        </a>
      </div>

      <hr className="my-4 border-zinc-800" />

      <p className="text-sm">
        <Link to="/certifications" className="underline">
          &lt; All certifications
        </Link>
      </p>

      <hr className="my-4 border-zinc-800" />

      <Footer />
    </main>
  );
}
