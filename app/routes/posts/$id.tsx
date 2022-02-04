import { json, Link, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import axios from "axios";

export const loader: LoaderFunction = async ({ params }) => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + params.id
    );
    return data;
  } catch (error) {
    throw new Response("Not found", { status: 404 });
  }
};

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostDetail() {
  const post = useLoaderData<Post>();
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
