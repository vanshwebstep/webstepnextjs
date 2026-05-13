"use client";
import SingleBlogPage from '@/components/Blog/SingleBlogPost';

export default function BlogSlugClient({ post }) {
  if (!post) return (
    <div className="text-center py-40 text-2xl font-bold text-slate-500">
      Post not found
    </div>
  );
  return <SingleBlogPage post={post} />;
}