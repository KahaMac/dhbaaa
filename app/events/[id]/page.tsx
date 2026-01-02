import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Calendar, Share2, ArrowLeft, MapPin } from "lucide-react"

// Mock event detail
const mockEvent = {
  id: "1",
  title: "Annual Hotel Summit 2024",
  excerpt: "Join us for an exclusive gathering of hotel industry leaders",
  content: `The Annual Hotel Summit 2024 is a premier gathering of hospitality industry leaders, 
innovators, and professionals.

Key topics include:
- Post-pandemic recovery
- Sustainability
- Digital transformation
- Staff training
- Customer experience`,
  date: "2024-12-15",
  category: "Events",
  image: "/placeholder.svg?key=dkkpv",
  time: "9:00 AM - 5:00 PM",
  location: "Kathmandu Convention Center",
  registrationLink: "#",
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Events & News", href: "/events" },
            { label: mockEvent.title },
          ]}
        />

        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">

            {/* Back Button */}
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold mb-6 transition"
            >
              <ArrowLeft size={20} />
              Back to Events
            </Link>

            {/* Hero Image */}
            <div className="mb-8 rounded-lg overflow-hidden h-96">
              <img
                src={mockEvent.image}
                alt={mockEvent.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-foreground mb-6">
              {mockEvent.title}
            </h1>

            {/* ✅ ONE-LINE FILTER / INFO BAR */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pb-6 mb-8 border-b border-border">

              {/* Category */}
              <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {mockEvent.category}
              </span>

              {/* Date & Time */}
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Calendar size={18} />
                <span>
                  {new Date(mockEvent.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  • {mockEvent.time}
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin size={18} />
                <span>{mockEvent.location}</span>
              </div>

              {/* Share */}
              <button className="ml-auto flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition text-sm">
                <Share2 size={18} />
                Share
              </button>
            </div>

            {/* Content */}
            <div className="prose prose-sm max-w-none mb-10">
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {mockEvent.content}
              </p>
            </div>

            {/* Call to Action */}
            {mockEvent.category === "Events" && (
              <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Don't Miss This Event!
                </h3>
                <p className="mb-6 text-lg opacity-90">
                  Register now to secure your spot at this exclusive gathering.
                </p>
                <button className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                  Register Now
                </button>
              </div>
            )}

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
