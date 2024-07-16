import fs from "fs";
import path from "path";

import matter from "gray-matter";

import { PostData } from "@/types/post-data";

const postDirectory = path.join(process.cwd(), "src/posts");

function getPostData(fileName: string): PostData {
  const filePath = path.join(postDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, ""); // removes the file extension

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData as PostData;
}

export function getAllPosts(): PostData[] {
  const postFiles = fs.readdirSync(postDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
