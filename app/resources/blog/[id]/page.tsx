import BlogDetailClient from "./client-page"

// Generate static params for static export
export async function generateStaticParams() {
  // Return the blog post IDs that should be statically generated
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ]
}

export default function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  return <BlogDetailClient params={params} />
}