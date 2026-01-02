import HotelClient from "./client-page"

// Generate static params for static export
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ]
}

export default function HotelDetailPage({ params }: { params: Promise<{ id: string }> }) {
  return <HotelClient params={params} />
}