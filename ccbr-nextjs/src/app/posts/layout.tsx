import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CCBR Posts - Latest Business News and Articles',
  description: 'Stay updated with the latest business news, articles, and insights from the Central Coast Business Review.',
};

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
} 