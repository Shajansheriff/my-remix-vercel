import { json, Link, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import axios from "axios";

export const loader: LoaderFunction = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return data;
};

interface Post {
  id: number;
  title: string;
}
export default function Posts() {
  const data = useLoaderData<Post[]>();
  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
