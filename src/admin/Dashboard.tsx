import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Style from '../assets/Dashboard.module.css'
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js"
import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import CreatePost from './CreatePost'

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
);

const adminDashboardInside = import.meta.env.VITE_DASHBOARD_URL_INSIDE

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
  async createPost(post: Omit<Post, 'id'>): Promise<Post> {
    const { data, error } = await supabase
      .from('posts')
      .insert([{
        title: post.title,
        content: post.content,
        read_time: post.read_time,
        date: post.date,
        categories: post.categories,
        tags: post.tags
      }])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },
  
  async getPosts(): Promise<Post[]> {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('date', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },
  
  async getPost(id: string): Promise<Post | null> {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) return null;
    return data;
  },
};

const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

const findPostBySlug = (posts: Post[], slug: string): Post | null => {
  return posts.find(post => createSlug(post.title) === slug) || null;
};

const PostsList = ({ posts }: { posts: Post[] }) => {
  const navigate = useNavigate();
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    filterPosts();
  }, [posts, selectedCategory]);

  const filterPosts = () => {
    if (selectedCategory === 'All') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.categories.includes(selectedCategory)));
    }
  };

  const getAllCategories = () => {
    const allCategories = posts.flatMap(post => post.categories);
    return ['All', ...Array.from(new Set(allCategories))];
  };

  const handleViewPost = (post: Post) => {
    const slug = createSlug(post.title);
    navigate(`${adminDashboardInside}/${slug}`);
  };

  return (
    <div className={Style.mainContainer}>
      <div className={Style.header}>
        <h1 className={Style.mainTitle}>Blog Posts</h1>
        <button
          onClick={() => navigate(`${adminDashboardInside}/create`)}
          className={Style.createButton}
        >
          Create New Post
        </button>
      </div>

      <div className={Style.categoryFilter}>
        <div className={Style.categoryButtons}>
          {getAllCategories().map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`${Style.categoryButton} ${selectedCategory === category ? Style.active : ''}`}
            >
              {category} {category !== 'All' && `(${posts.filter(p => p.categories.includes(category)).length})`}
            </button>
          ))}
        </div>
        {selectedCategory !== 'All' && (
          <p className={Style.filterInfo}>
            Showing {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''} in "{selectedCategory}" category
          </p>
        )}
      </div>

      {filteredPosts.length === 0 ? (
        <div className={Style.emptyState}>
          {posts.length === 0 ? (
            <>
              <p className={Style.emptyTitle}>No posts yet</p>
              <p>Create your first post to get started!</p>
            </>
          ) : (
            <>
              <p className={Style.emptyTitle}>No posts found</p>
              <p>No posts in "{selectedCategory}" category. Try selecting a different category.</p>
            </>
          )}
        </div>
      ) : (
        <div className={Style.postsGrid}>
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => handleViewPost(post)}
              className={Style.postCard}
            >
              <div className={Style.postCardContent}>
                <div className={Style.postCardMain}>
                  <h2 className={Style.postTitle}>
                    {post.title}
                  </h2>
                  
                  <div className={Style.postMeta}>
                    <span> {new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const PostView = ({ posts }: { posts: Post[] }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? findPostBySlug(posts, slug) : null;

  if (!post) {
    return (
      <div className={Style.mainContainer}>
        <div className={Style.emptyState}>
          <p className={Style.emptyTitle}>Post not found</p>
          <p>The post you're looking for doesn't exist or may have been removed.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={Style.mainContainer}>

      <article className={Style.articleContainer}>
        <header className={Style.articleHeader}>
          <h1 className={Style.articleTitle}>
            {post.title}
          </h1>
          
          <div className={Style.articleMeta}>
            <div className={Style.articleMetaItemDate}>
              {new Date(post.date).toLocaleDateString()}
            </div>
            <div className={Style.articleMetaItem}>
              <b>Reading time: </b>{post.read_time} minutes
            </div>
          </div>

          {post.categories.length > 0 && (
            <div className={Style.articleCategories}>
              {post.categories.map(category => (
                <span key={category} className={Style.articleCategoryTag}>
                  <b>Categories: </b> <span className={Style.articleCategoryTagChild}>{category}</span>
                </span>
              ))}
            </div>
          )}

          {post.tags.length > 0 && (
            <div className={Style.articleTags}>
              <b>Tags: </b>
              {post.tags.map(tag => (
                <span key={tag} className={Style.articleTagItem}>
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>
        
        <div 
          className={Style.articleContent}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
};

const CreatePostWrapper = ({ onSave }: { onSave: (post: Omit<Post, 'id'>) => Promise<void> }) => {
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);

  const handleSave = async (postData: Omit<Post, 'id'>) => {
    setSaving(true);
    try {
      await onSave(postData);
      navigate(`${adminDashboardInside}`);
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to create post');
    } finally {
      setSaving(false);
    }
  };

  const handleBack = () => {
    navigate(`${adminDashboardInside}`);
  };

  return (
    <CreatePost
      onSave={handleSave}
      onBack={handleBack}
      saving={saving}
    />
  );
};

export default function Dashboard() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        try {
        const fetchedPosts = await supabaseClient.getPosts();
        setPosts(fetchedPosts);
        } catch (error) {
        console.error('Error loading posts:', error);
        } finally {
        setLoading(false);
        }
    };

    const handleSavePost = async (postData: Omit<Post, 'id'>) => {
        const post = await supabaseClient.createPost(postData);
        setPosts(prev => [post, ...prev]);
    };

    if (loading) {
        return (
        <div className={Style.loadingContainer}>
            <div>Loading...</div>
        </div>
        );
    }
        return (
        <>
          <Nav/>
             <Routes>
                <Route path="/" element={<PostsList posts={posts} />} />
                <Route path="/create" element={<CreatePostWrapper onSave={handleSavePost} />} />
                <Route path="/:slug" element={<PostView posts={posts} />} />
            </Routes>
          <Footer/>
        </>
    )
}