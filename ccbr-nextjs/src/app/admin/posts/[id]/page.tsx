'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import RichTextEditor from '@/components/RichTextEditor';

interface EditPostPageProps {
  params: {
    id: string;
  };
}

export default function EditPostPage({ params }: EditPostPageProps) {
  const { id } = params;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin/login');
      return;
    }

    const fetchPost = async () => {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        
        if (data) {
          setTitle(data.title);
          setContent(data.content);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setError('Failed to load post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, isAuthenticated, router]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSaving(true);

    if (!title || !content) {
      setError('Title and content are required');
      setSaving(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('posts')
        .update({ title, content, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;
      
      router.push('/admin/posts');
    } catch (err) {
      console.error('Error updating post:', err);
      setError('Failed to update post. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    
    try {
      setSaving(true);
      const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      router.push('/admin/posts');
    } catch (err) {
      console.error('Error deleting post:', err);
      setError('Failed to delete post. Please try again.');
      setSaving(false);
    }
  };

  if (!isAuthenticated) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Edit Post</h1>
            <div className="flex gap-2">
              <button
                onClick={handleDelete}
                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                disabled={saving || loading}
              >
                Delete
              </button>
              <Link
                href="/admin/posts"
                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </Link>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-10">Loading post...</div>
          ) : (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    {error && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <span className="block sm:inline">{error}</span>
                      </div>
                    )}

                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="Post Title"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                        Content
                      </label>
                      <div className="mt-1">
                        <RichTextEditor value={content} onChange={setContent} />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={saving}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
                      >
                        {saving ? 'Saving...' : 'Save Changes'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 