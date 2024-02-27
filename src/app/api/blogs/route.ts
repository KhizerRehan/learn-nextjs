import { NextResponse } from "next/server";
import { createPost, deletePost, getPosts, Post } from "@/lib/data";

export const GET = async (request: Request, response: Response) => {
  console.log("GET request received")
  try {
    const posts: Post[] = getPosts()
    return NextResponse.json(posts, {status: 200});
  } catch (err: any) {
    return NextResponse.json({message: err.message}, {status: 500});
  }
}

export const POST = async (request: Request, response: Response) => {
  console.log("POST request received")
  const {title, description}: Post = await request.json(); // { title: "string", description: "string" }

  try {
    const newPost: Post = createPost(title, description, new Date().toString());
    return NextResponse.json(newPost, {status: 201});
  } catch (err: any) {
    return NextResponse.json({message: err.message}, {status: 500});
  }
}

export const DELETE = async (request: Request, response: Response) => {
  console.log("DELETE request received")
  const {id}: { id: string } = await request.json();

  try {
    deletePost(parseInt(id));
    return NextResponse.json({message: 'OK'}, {status: 200});
  } catch (err: any) {
    return NextResponse.json({message: err.message}, {status: 500});
  }
}