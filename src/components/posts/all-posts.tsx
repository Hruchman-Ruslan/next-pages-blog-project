import { IPost } from "@/types/post";

import classes from "./all-posts.module.css";

import PostsGrid from "./pots-grid";

export interface AllPostsProps {
  posts: IPost[];
}

export default function AllPosts({ posts }: AllPostsProps) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}
