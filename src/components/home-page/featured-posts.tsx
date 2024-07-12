import { IPost } from "@/types/post";

import PostsGrid from "../posts/pots-grid";

import classes from "./featured-posts.module.css";

export interface FeaturedPostsProps {
  posts: IPost[];
}

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
