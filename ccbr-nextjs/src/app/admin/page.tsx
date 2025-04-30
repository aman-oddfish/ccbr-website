'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function AdminPage() {
  const { isAuthenticated, user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Logged in as {user?.email}</span>
              <button
                onClick={logout}
                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/admin/posts" className="block">
              <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Posts</h3>
                  <p className="mt-1 text-sm text-gray-500">Manage your blog posts</p>
                </div>
              </div>
            </Link>

            <Link href="/admin/contacts" className="block">
              <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Contacts</h3>
                  <p className="mt-1 text-sm text-gray-500">Manage newsletter subscribers</p>
                </div>
              </div>
            </Link>

            <Link href="/admin/newsletters" className="block">
              <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Newsletters</h3>
                  <p className="mt-1 text-sm text-gray-500">Create and send newsletters</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 