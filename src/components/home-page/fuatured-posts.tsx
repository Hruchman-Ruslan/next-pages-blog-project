import classes from "./fuatured-posts.module.css";

export interface FFeaturedPostsProps {}

export default function FFeaturedPosts({}: FFeaturedPostsProps) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
    </section>
  );
}
