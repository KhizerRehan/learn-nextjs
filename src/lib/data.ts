import { NextApiRequest, NextApiResponse } from "next";

export type Post = {
  id: number;
  title: string;
  date: string;
  description: string;
}

let posts: Post[] = [];


export const getPosts = () => {
  return posts;
}

export const createPost = (title: string, description: string, date: string) => {
  const post: Post = {
    id: Math.random(),
    title: title,
    date: date,
    description: description
  }
  posts.push(post);

  return post;
}

export const updatePost = (id: number, title: string, description: string) => {
  const postIndex = posts.findIndex(post => post.id === id);
  const post: Post = {
    id: id,
    title: title,
    description: description,
    date: new Date().toString()

  }
  posts[postIndex] = post;
  return posts
}

export const deletePost = (id: number) => {
  posts = posts.filter(post => post.id !== id);
}
