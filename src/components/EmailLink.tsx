import { useState } from "react";
import { AUTHOR_EMAIL } from "../utils/site";

/**
 * A real `mailto:` anchor. The old `href="#"` + onClick version was a crawl
 * dead-end and unusable by keyboard, so the address is the href now and the
 * copy-to-clipboard is layered on top as an enhancement.
 */
export default function EmailLink({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <a
      href={`mailto:${AUTHOR_EMAIL}`}
      className={className}
      title="Click to copy"
      onClick={(e) => {
        if (!navigator.clipboard) return;
        e.preventDefault();
        navigator.clipboard.writeText(AUTHOR_EMAIL).then(
          () => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          },
          () => {},
        );
      }}
    >
      {copied ? "copied!" : AUTHOR_EMAIL}
    </a>
  );
}
