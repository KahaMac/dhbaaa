import JobDetailClient from "./client-page"

// Generate static params for static export
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ]
}

// Server component wrapper
export default function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  return <JobDetailClient params={params} />
}