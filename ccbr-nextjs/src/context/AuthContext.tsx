'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

// Mock admin user (in production this would come from your database)
const DUMMY_ADMIN = {
  email: 'admin@example.com',
  password: 'password123',
};

interface AuthContextType {
  isAuthenticated: boolean;
  user: { email: string } | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: async () => false,
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ email: string } | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Check if user is already logged in from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('admin_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    } else if (pathname?.startsWith('/admin') && pathname !== '/admin/login') {
      // Redirect to login if trying to access admin routes without authentication
      router.push('/admin/login');
    }
  }, [pathname, router]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, you would validate against your database or auth service
    if (email === DUMMY_ADMIN.email && password === DUMMY_ADMIN.password) {
      const user = { email };
      setUser(user);
      setIsAuthenticated(true);
      localStorage.setItem('admin_user', JSON.stringify(user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('admin_user');
    router.push('/admin/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}; 