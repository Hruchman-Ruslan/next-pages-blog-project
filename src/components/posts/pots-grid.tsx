import { IPost } from "@/types/post";

import classes from "./posts-grid.module.css";

export interface PostsGridProps {
  posts: IPost[];
}

export default function PostsGrid({ posts }: PostsGridProps) {
  return (
    // <ul className={classes.grid}>
    //   {posts.map((post) => (
    //     <PostItem />
    //   ))}
    // </ul>
    <p>Post Grid</p>
  );
}
