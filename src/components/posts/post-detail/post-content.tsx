import ReactMarkdown from "react-markdown";
import Image from "next/image";

import { IPost } from "@/types/post";

import PostHeader from "./post-header";

import classes from "./post-content.module.css";

export interface PostContentProps {
  post: IPost;
}

export default function PostContent({ post }: PostContentProps) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers: object = {
    p(paragraph: { children?: boolean; node?: any }) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const { title, properties } = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${properties.src}`}
              alt={title}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}
