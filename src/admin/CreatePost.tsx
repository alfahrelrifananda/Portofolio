import Style from '../assets/CreatePost.module.css';
import { useState, useRef } from "react";

interface Post {
  id: string;
  title: string;
  content: string;
  read_time: number;
  date: string;
  categories: string[];
  tags: string[];
}

interface CreatePostProps {
  onSave: (post: Omit<Post, 'id'>) => Promise<void>;
  onBack: () => void;
  saving: boolean;
}

const CreatePost: React.FC<CreatePostProps> = ({ onSave, onBack, saving }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState('');
  const [newTag, setNewTag] = useState('');

  const editorRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      setContent(editorRef.current.innerHTML);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = `<img src="${event.target?.result}" style="max-width: 100%; height: auto; margin: 10px 0;" alt="Uploaded image" />`;
        document.execCommand('insertHTML', false, img);
        if (editorRef.current) {
          setContent(editorRef.current.innerHTML);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContentChange = () => {
    if (editorRef.current) {
      setContent(editorRef.current.innerHTML);
    }
  };

  const calculateReadTime = (content: string): number => {
    const text = content.replace(/<[^>]*>/g, '');
    const words = text.split(/\s+/).length;
    return Math.ceil(words / 200);
  };

  const addCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory('');
    }
  };

  const removeCategory = (category: string) => {
    setCategories(categories.filter(c => c !== category));
  };

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  const handleSave = async () => {
    if (!title.trim() || !content.trim()) {
      alert('Please fill in both title and content');
      return;
    }

    await onSave({
      title: title.trim(),
      content,
      read_time: calculateReadTime(content),
      date: new Date().toISOString(),
      categories,
      tags
    });
  };

  return (
    <div className={Style.mainContainer}>
      <div className={Style.header}>
        <button
          onClick={handleSave}
          disabled={saving}
          className={Style.saveButton}
        >
          {saving ? 'Saving...' : 'Save Post'}
        </button>
      </div>

      <div className={Style.formGrid}>
        {/* Title */}
        <div className={Style.formGroup}>
          <label className={Style.formLabel}>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your post title..."
            className={`${Style.formInput} ${Style.titleInput}`}
          />
        </div>

        {/* Categories */}
        <div className={Style.formGroup}>
          <label className={Style.formLabel}>Categories</label>
          <div className={Style.tagInputGroup}>
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Add category..."
              className={Style.tagInput}
              onKeyPress={(e) => e.key === 'Enter' && addCategory()}
            />
            <button onClick={addCategory} className={Style.addCategoryButton}>
              Add
            </button>
          </div>
          <div className={Style.tagsContainer}>
            {categories.map(category => (
              <span key={category} className={Style.categoryChip}>
                {category}
                <button
                  onClick={() => removeCategory(category)}
                  className={Style.removeButton}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className={Style.formGroup}>
          <label className={Style.formLabel}>Tags</label>
          <div className={Style.tagInputGroup}>
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder="Add tag..."
              className={Style.tagInput}
              onKeyPress={(e) => e.key === 'Enter' && addTag()}
            />
            <button onClick={addTag} className={Style.addTagButton}>
              Add
            </button>
          </div>
          <div className={Style.tagsContainer}>
            {tags.map(tag => (
              <span key={tag} className={Style.tagChip}>
                #{tag}
                <button
                  onClick={() => removeTag(tag)}
                  className={Style.removeButton}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Rich Text Editor */}
        <div className={Style.formGroup}>
          <label className={Style.formLabel}>Content</label>
          <div className={Style.editorContainer}>
            {/* Toolbar */}
            <div className={Style.editorToolbar}>
              <button
                type="button"
                onClick={() => execCommand('bold')}
                className={Style.toolbarButton}
                title="Bold"
              >
                <strong>B</strong>
              </button>
              <button
                type="button"
                onClick={() => execCommand('italic')}
                className={Style.toolbarButton}
                title="Italic"
              >
                <em>I</em>
              </button>
              <button
                type="button"
                onClick={() => execCommand('underline')}
                className={Style.toolbarButton}
                title="Underline"
              >
                <u>U</u>
              </button>
              
              <button
                type="button"
                onClick={() => execCommand('insertUnorderedList')}
                className={Style.toolbarButton}
                title="Bullet List"
              >
                • List
              </button>
              <button
                type="button"
                onClick={() => execCommand('insertOrderedList')}
                className={Style.toolbarButton}
                title="Numbered List"
              >
                1. List
              </button>
              <button
                type="button"
                onClick={() => {
                  const url = prompt('Enter URL:');
                  if (url) {
                    const text = window.getSelection()?.toString() || prompt('Enter link text:') || url;
                    execCommand('createLink', url);
                    if (!document.queryCommandSupported('createLink')) {
                      const link = `<a href="${url}" target="_blank" style="color: #3b82f6; text-decoration: underline;">${text}</a>`;
                      execCommand('insertHTML', link);
                    }
                  }
                }}
                className={Style.toolbarButton}
                title="Add Link"
              >
                🔗 Link
              </button>
              <button
                type="button"
                onClick={() => {
                  const selection = window.getSelection();
                  const selectedText = selection?.toString();
                  
                  if (selectedText) {
                    const codeSpan = `<code style="background-color: #f1f5f9; color: #e11d48; padding: 2px 4px; border-radius: 4px; font-family: 'Courier New', monospace; font-size: 0.9em;">${selectedText}</code>`;
                    execCommand('insertHTML', codeSpan);
                  } else {
                    const codeBlock = `<pre style="background-color: #1e293b; color: #e2e8f0; padding: 16px; border-radius: 8px; font-family: 'Courier New', monospace; font-size: 0.9em; overflow-x: auto; margin: 10px 0;"><code>// Enter your code here
console.log('Hello World!');</code></pre>`;
                    execCommand('insertHTML', codeBlock);
                  }
                }}
                className={Style.toolbarButton}
                title="Code Block/Inline Code"
              >
                &lt;/&gt; Code
              </button>
              
              <div className={Style.toolbarDivider}></div>
              
              <button
                type="button"
                onClick={() => execCommand('justifyLeft')}
                className={Style.toolbarButton}
                title="Align Left"
              >
                ⬅️
              </button>
              <button
                type="button"
                onClick={() => execCommand('justifyCenter')}
                className={Style.toolbarButton}
                title="Align Center"
              >
                ↔️
              </button>
              <button
                type="button"
                onClick={() => execCommand('justifyRight')}
                className={Style.toolbarButton}
                title="Align Right"
              >
                ➡️
              </button>
              
              <div className={Style.toolbarDivider}></div>
              
              <select
                onChange={(e) => execCommand('fontSize', e.target.value)}
                className={Style.toolbarSelect}
              >
                <option value="3">Normal</option>
                <option value="1">Small</option>
                <option value="4">Large</option>
                <option value="5">X-Large</option>
                <option value="6">XX-Large</option>
              </select>
              
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className={Style.toolbarButton}
                title="Insert Image"
              >
                🖼️
              </button>
              
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className={Style.hiddenFileInput}
              />
            </div>
            
            {/* Editor */}
            <div
              ref={editorRef}
              contentEditable
              onInput={handleContentChange}
              className={Style.editorContent}
              suppressContentEditableWarning={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;