'use client';

import PostCard from '@/components/PostCard';

// Mock data - replace with actual API calls
const posts = [
  {
    title: "The Future of Business in the Central Coast",
    excerpt: "Exploring the emerging trends and opportunities for businesses in the Central Coast region...",
    author: {
      name: "John Smith",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    date: "Mar 15, 2024",
    readTime: "5",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    slug: "future-of-business-central-coast"
  },
  {
    title: "Sustainable Manufacturing Practices",
    excerpt: "How local manufacturers are adopting eco-friendly practices and reducing their carbon footprint...",
    author: {
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    date: "Mar 14, 2024",
    readTime: "4",
    imageUrl: "https://images.unsplash.com/photo-1581094794329-1c1c0c1c0c1c",
    slug: "sustainable-manufacturing-practices"
  },
  // Add more posts as needed
];

export default function PostsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">Latest Posts</h1>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-full">
                Following
              </button>
              <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-full">
                Recommended
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-80 space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="font-bold mb-4">Discover more of what matters to you</h2>
            <div className="flex flex-wrap gap-2">
              {['Business', 'Technology', 'Finance', 'Startups', 'Leadership', 'Productivity'].map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-full hover:bg-gray-100"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="font-bold mb-4">Recommended Topics</h2>
            <div className="space-y-2">
              {['Business News', 'Market Analysis', 'Industry Trends', 'Local Economy'].map((topic) => (
                <button
                  key={topic}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 