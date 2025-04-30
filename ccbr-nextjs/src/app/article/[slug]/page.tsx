'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Mock data - replace with API call
const getArticle = (slug: string) => {
  const articles = {
    'future-of-business-central-coast': {
      title: "The Future of Business in the Central Coast",
      content: `
        <p>The Central Coast region is experiencing unprecedented growth in its business sector. With new infrastructure projects and a growing population, the area is becoming increasingly attractive to investors and entrepreneurs alike.</p>
        
        <h2>Economic Growth</h2>
        <p>Recent data shows that the Central Coast's economy has grown by 15% over the past five years, outpacing many other regions in New South Wales. This growth has been driven by several key factors:</p>
        
        <ul>
          <li>Increased investment in infrastructure</li>
          <li>Growing population and workforce</li>
          <li>Expansion of the technology sector</li>
          <li>Development of new business parks</li>
        </ul>
        
        <h2>Opportunities for Businesses</h2>
        <p>Local businesses are finding new opportunities in various sectors, including:</p>
        
        <ul>
          <li>Technology and innovation</li>
          <li>Manufacturing and logistics</li>
          <li>Tourism and hospitality</li>
          <li>Professional services</li>
        </ul>
      `,
      author: {
        name: "John Smith",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        bio: "Business Analyst with over 10 years of experience in regional economic development."
      },
      date: "Mar 15, 2024",
      readTime: "5",
      imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
      tags: ["Business", "Economy", "Central Coast", "Growth"]
    },
    'sustainable-manufacturing-practices': {
      title: "Sustainable Manufacturing Practices",
      content: `
        <p>Local manufacturers are leading the way in adopting sustainable practices that benefit both the environment and their bottom line.</p>
        
        <h2>Energy Efficiency</h2>
        <p>Many manufacturers have implemented energy-saving measures, including:</p>
        
        <ul>
          <li>Solar panel installations</li>
          <li>LED lighting upgrades</li>
          <li>Smart energy management systems</li>
          <li>Waste heat recovery</li>
        </ul>
        
        <h2>Waste Reduction</h2>
        <p>Companies are finding innovative ways to reduce waste through:</p>
        
        <ul>
          <li>Recycling programs</li>
          <li>Circular economy initiatives</li>
          <li>Material optimization</li>
          <li>Packaging redesign</li>
        </ul>
      `,
      author: {
        name: "Sarah Johnson",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        bio: "Environmental Consultant specializing in sustainable manufacturing practices."
      },
      date: "Mar 10, 2024",
      readTime: "4",
      imageUrl: "https://images.unsplash.com/photo-1581094794329-1c1c0c1c0c1c",
      tags: ["Manufacturing", "Sustainability", "Environment", "Innovation"]
    }
  };

  return articles[slug as keyof typeof articles] || null;
};

export default function ArticlePage() {
  const params = useParams();
  const article = getArticle(params.slug as string);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link href="/posts" className="text-blue-600 hover:underline">
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div className="flex items-center gap-4 mb-6">
          <Image
            src={article.author.avatar}
            alt={article.author.name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <div className="font-medium">{article.author.name}</div>
            <div className="text-sm text-gray-500">
              {article.date} · {article.readTime} min read
            </div>
          </div>
        </div>
        <Image
          src={article.imageUrl}
          alt={article.title}
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg"
        />
      </header>

      {/* Content */}
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Tags */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Link
              key={tag}
              href={`/posts/tag/${tag.toLowerCase()}`}
              className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Author Bio */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex items-start gap-4">
          <Image
            src={article.author.avatar}
            alt={article.author.name}
            width={64}
            height={64}
            className="rounded-full"
          />
          <div>
            <h3 className="font-medium">{article.author.name}</h3>
            <p className="text-gray-600 mt-1">{article.author.bio}</p>
          </div>
        </div>
      </div>
    </article>
  );
} 