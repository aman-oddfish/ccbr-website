import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/header';
import { AuthProvider } from '@/context/AuthContext';

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Central Coast Business Review",
  description: "Central Coast Business News and Information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
