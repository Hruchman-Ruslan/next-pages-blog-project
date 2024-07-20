import Head from "next/head";

import { getFeaturedPosts } from "@/lib/post-util";

import { IPost } from "@/types/post";

import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";

export interface HomePageProps {
  posts: IPost[];
}

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Welcome to my blog</title>
        <meta
          title="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
