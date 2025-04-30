'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { supabase, Post } from '@/lib/supabase';

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin/login');
      return;
    }

    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .order('created_at', { ascending: false });

        if (error && error.message !== 'No rows found') {
          console.error('Error fetching posts:', error);
          setError(error.message);
          return;
        }
        
        setPosts(data || []);
      } catch (error) {
        // Only set error if it's not a "no posts" situation
        if (error instanceof Error && !error.message.includes('No rows found')) {
          console.error('Error fetching posts:', error);
          setError('Failed to fetch posts. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Manage Posts</h1>
            <Link
              href="/admin/posts/new"
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Create New Post
            </Link>
          </div>

          {error && (
            <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          {loading ? (
            <div className="text-center py-10">Loading posts...</div>
          ) : posts.length === 0 ? (
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6 text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Welcome to Posts Management!</h3>
                <p className="text-gray-500 mb-4">You haven&apos;t created any posts yet. Get started by creating your first post.</p>
                <Link
                  href="/admin/posts/new"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Create Your First Post
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {posts.map((post) => (
                  <li key={post.id}>
                    <Link href={`/admin/posts/${post.id}`} className="block hover:bg-gray-50">
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-blue-600 truncate">{post.title}</p>
                          <div className="ml-2 flex-shrink-0 flex">
                            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {new Date(post.created_at).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="flex items-center text-sm text-gray-500">
                              {post.content.substring(0, 100)}...
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 