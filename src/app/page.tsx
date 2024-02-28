import React from 'react';
import { Post } from '../types/Post';
import Link from 'next/link';

export default async function Home() {
  const posts = (await (
    await fetch('https://jsonplaceholder.typicode.com/posts')
  ).json()) as Post[];

  return (
    <main>
      <h1>mycli generated project</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              {post.id}. {post.body}
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
export const dynamic = 'auto';
// export const dynamicParams = true;
// export const revalidate = 60;
// export const fetchCache = 'auto';
// export const runtime = 'edge';
// export const preferredRegion = 'auto';
