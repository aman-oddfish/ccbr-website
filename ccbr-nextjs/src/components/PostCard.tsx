'use client';

import Image from 'next/image';
import Link from 'next/link';

interface PostCardProps {
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  imageUrl: string;
  slug: string;
}

export default function PostCard({
  title,
  excerpt,
  author,
  date,
  readTime,
  imageUrl,
  slug,
}: PostCardProps) {
  return (
    <article className="flex flex-col md:flex-row gap-4 py-6 border-b border-gray-200">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <Image
            src={author.avatar}
            alt={author.name}
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-sm text-gray-600">{author.name}</span>
        </div>
        <Link href={`/article/${slug}`}>
          <h2 className="text-xl font-bold mb-2 hover:text-gray-600 transition-colors">
            {title}
          </h2>
        </Link>
        <p className="text-gray-600 mb-2 line-clamp-2">{excerpt}</p>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>{date}</span>
          <span>·</span>
          <span>{readTime} min read</span>
        </div>
      </div>
      <div className="w-full md:w-32 h-32 relative">
        <Link href={`/article/${slug}`}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded hover:opacity-90 transition-opacity"
          />
        </Link>
      </div>
    </article>
  );
} 