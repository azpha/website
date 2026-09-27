import ErrorState from "./ErrorState";
import { useState, useEffect } from "react";
import type { BlogPost } from "../utils/types";
import { useInitialData } from "../utils/initialData";
import { PROFILES } from "../utils/site";

export default function BlogRow() {
  // seeded from the SSR payload so the post is in the served HTML, then
  // refreshed on the client to pick up anything published since
  const { posts } = useInitialData();
  const [post, setPost] = useState<BlogPost | null>(posts?.[0] ?? null);

  useEffect(() => {
    fetch(`${PROFILES.blog}/api/posts`, {
      method: "GET",
    }).then(async (res) => {
      if (res.ok) {
        try {
          const data = await res.json();
          if (Array.isArray(data) && data[0]) setPost(data[0]);
        } catch (e) {
          console.error("An error occurred fetching blog posts!", e);
        }
      } else console.error("Failed to fetch blog posts!");
    });
  }, []);

  if (post) {
    return (
      <article>
        <a
          className="block space-y-1 hover:underline"
          href={`${PROFILES.blog}/post/${post.slug}`}
        >
          <h3 className="font-semibold">{post.title}</h3>
          <p className="text-sm">{post.description}</p>
          <p className="text-xs opacity-50">
            <time dateTime={post.createdAt}>
              Posted {new Date(post.createdAt).toLocaleDateString()}
            </time>
          </p>
        </a>
      </article>
    );
  } else return <ErrorState label="nothing posted yet :(" />;
}
