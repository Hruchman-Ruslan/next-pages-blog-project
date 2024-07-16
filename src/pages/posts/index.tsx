import { IPost } from "@/types/post";

import { getAllPosts } from "@/lib/post-util";

import AllPosts from "@/components/posts/all-posts";

export interface AllPostsPageProps {
  posts: IPost[];
}

export default function AllPostsPage({ posts }: AllPostsPageProps) {
  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
