import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface Post {
  id: string;
  title: string;
  content: string;
  read_time: number;
  date: string;
  categories: string[];
  tags: string[];
}

const supabaseClient = {
  async getPosts(): Promise<Post[]> {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("date", { ascending: false });
    if (error) throw error;
    return data || [];
  },
  async getPost(id: string): Promise<Post | null> {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();
    if (error) return null;
    return data;
  },
};

interface PostsContextType {
  posts: Post[];
  getPost: (id: string) => Promise<Post | null>;
  refetch: () => Promise<void>;
}

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (context === undefined) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return context;
};

interface PostsProviderProps {
  children: ReactNode;
}

export const PostsProvider: React.FC<PostsProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadPosts = async () => {
    try {
      const postsData = await supabaseClient.getPosts();
      setPosts(postsData);
    } catch (err) {
      console.error("Failed to load posts:", err);
      setPosts([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const value: PostsContextType = {
    posts,
    getPost: supabaseClient.getPost,
    refetch: loadPosts,
  };

  if (isLoading) {
    return <div className="loadingContainer">Loading...</div>;
  }

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
