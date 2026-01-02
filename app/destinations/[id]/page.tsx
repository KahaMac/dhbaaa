import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { MapPin, Hotel, ArrowRight } from "lucide-react"
import DestinationClient from "./client-page"

// Generate static params for static export
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ]
}

export default function DestinationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  return <DestinationClient params={params} />
}
