import Head from "next/head";

import { IPost } from "@/types/post";

import { getAllPosts } from "@/lib/post-util";

import AllPosts from "@/components/posts/all-posts";

export interface AllPostsPageProps {
  posts: IPost[];
}

export default function AllPostsPage({ posts }: AllPostsPageProps) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
