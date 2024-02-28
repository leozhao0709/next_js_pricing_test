import React from 'react';
import { Post } from '@/types/Post';

export function generateStaticParams() {
  return [
    {
      id: '1',
    },
    {
      id: '2',
    },
    {
      id: '3',
    },
    {
      id: '4',
    },
    {
      id: '5',
    },
    {
      id: '6',
    },
  ];
}

export default async function PostDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const post: Post = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  ).json();

  return (
    <div>
      This is Post detail:
      {post.id}. {post.body}
    </div>
  );
}

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
export const dynamicParams = false; // default true. If false, then show 404 if generateStaticParams not returns param
// export const dynamic = 'auto';
// export const revalidate = 60;
// export const fetchCache = 'auto';
// export const runtime = 'nodejs';
// export const preferredRegion = 'auto';
