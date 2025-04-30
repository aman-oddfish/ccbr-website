import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables:', {
    url: supabaseUrl ? 'Set' : 'Missing',
    key: supabaseAnonKey ? 'Set' : 'Missing'
  });
  throw new Error('Missing required Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

// Test the connection
const testConnection = async () => {
  try {
    const { data, error } = await supabase.from('posts').select('count', { count: 'exact', head: true });
    if (error) {
      console.error('Supabase connection test failed:', error.message);
      return false;
    }
    console.log('Supabase connection test successful');
    return true;
  } catch (err) {
    console.error('Failed to connect to Supabase:', err);
    return false;
  }
};

// Run the test immediately
testConnection();

// Types based on your database schema
export interface Admin {
  id: string;
  email: string;
  password: string; // Note: In production, this would be handled by Supabase Auth
  created_at: string;
}

export interface Contact {
  id: string;
  email: string;
  created_at: string;
}

export interface Page {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface NewsletterCampaign {
  id: string;
  subject: string;
  body: string;
  sent_at: string;
  created_at: string;
} 