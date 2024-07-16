import type { GetStaticPropsContext } from "next";

import { IPost } from "@/types/post";

import { getPostData, getPostsFiles } from "@/lib/post-util";

import PostContent from "@/components/posts/post-detail/post-content";

export interface PosDetailPageProps {
  post: IPost;
}

export default function PosDetailPage({ post }: PosDetailPageProps) {
  return <PostContent post={post} />;
}

export function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  const { slug } = params as { slug: string };

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  };
}
