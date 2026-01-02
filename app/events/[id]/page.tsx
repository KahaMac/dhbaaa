import EventClient from "./client-page"

// Generate static params for static export
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ]
}

export default function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  return <EventClient params={params} />
}
