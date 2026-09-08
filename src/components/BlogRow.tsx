import ErrorState from "./ErrorState";
import { useState, useEffect } from "react";
import type { BlogPost } from "../utils/types";

export default function BlogRow() {
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    fetch("https://blog.alexav.gg/api/posts", {
      method: "GET",
    }).then(async (res) => {
      if (res.ok) {
        try {
          const data = await res.json();
          setPost(data[0]);
        } catch (e) {
          console.error("An error occurred fetching blog posts!", e);
        }
      } else console.error("Failed to fetch blog posts!");
    });
  }, []);

  if (post) {
    return (
      <div>
        <a
          className="space-y-1 hover:underline"
          href={`https://blog.alexav.gg/post/${post.slug}`}
        >
          <h1 className="font-semibold">{post?.title}</h1>
          <p className="text-sm">{post?.description}</p>
          <p className="text-xs opacity-50">
            Posted {new Date(post.createdAt).toLocaleDateString()}
          </p>
        </a>
      </div>
    );
  } else return <ErrorState label="nothing posted yet :(" />;
}
