"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock, Bookmark, Facebook, Twitter, Linkedin } from "lucide-react"
import { use, useState } from "react"

export default function BlogDetailClient({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [isBookmarked, setIsBookmarked] = useState(false)

  // Mock blog data - in real app, fetch based on id
  const blogs = [
    {
      id: 1,
      title: "Best Practices in Hotel Management",
      excerpt: "Learn the latest strategies and techniques for effective hotel management in the modern era.",
      image: "/luxury-hotel-lobby.png",
      author: "Rajesh Kumar",
      date: "January 10, 2025",
      readTime: "8 min read",
      category: "Management",
      content: `
        <h2>Introduction to Modern Hotel Management</h2>
        <p>The hospitality industry is evolving rapidly, and hotel management practices must adapt to meet changing guest expectations and market demands.</p>
        
        <h2>Key Areas of Focus</h2>
        <p>Successful hotel management requires attention to multiple areas including guest experience, staff training, and operational efficiency.</p>
      `,
      tags: ["Hotel Management", "Best Practices", "Hospitality"],
    },
    {
      id: 2,
      title: "Tourism Industry Growth in Nepal",
      excerpt: "Comprehensive analysis of tourism trends and opportunities in Nepal's hospitality sector.",
      image: "/tourism-initiative.jpg",
      author: "Sita Sharma",
      date: "January 5, 2025",
      readTime: "10 min read",
      category: "Industry Insights",
      content: `
        <h2>Nepal's Tourism Renaissance</h2>
        <p>Nepal's tourism industry is experiencing unprecedented growth, driven by improved infrastructure and government initiatives.</p>
      `,
      tags: ["Tourism", "Nepal", "Industry Growth"],
    },
    {
      id: 3,
      title: "Customer Service Excellence",
      excerpt: "Master the art of delivering exceptional customer service that creates loyal guests.",
      image: "/luxury-hotel-restaurant.png",
      author: "Amit Thapa",
      date: "December 28, 2024",
      readTime: "6 min read",
      category: "Customer Service",
      content: `
        <h2>The Foundation of Great Service</h2>
        <p>Exceptional customer service is what sets great hotels apart from good ones.</p>
      `,
      tags: ["Customer Service", "Guest Experience"],
    },
  ]

  const blog = blogs.find(b => b.id === parseInt(id)) || blogs[0]

  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <Header />
      <main className="flex-grow">
        {/* Back Button */}
        <div className="bg-card border-b border-border">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link 
              href="/resources"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={18} />
              <span>Back to Resources</span>
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              {blog.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <User size={16} className="text-primary" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-primary" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-primary" />
              <span>{blog.readTime}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 mb-8">
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`flex items-center gap-2 px-4 py-2 border-2 rounded-lg font-semibold transition-all ${
                isBookmarked
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border hover:border-primary hover:bg-primary/5'
              }`}
            >
              <Bookmark className={isBookmarked ? 'fill-current' : ''} size={18} />
              <span>{isBookmarked ? 'Saved' : 'Save'}</span>
            </button>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Share:</span>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Facebook size={18} className="text-muted-foreground hover:text-primary" />
              </button>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Twitter size={18} className="text-muted-foreground hover:text-primary" />
              </button>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Linkedin size={18} className="text-muted-foreground hover:text-primary" />
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: blog.content }}
            style={{
              color: 'var(--foreground)',
            }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            <span className="text-sm font-semibold text-muted-foreground">Tags:</span>
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-muted rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      </main>
      <Footer />
      
      <style jsx global>{`
        .prose h2 {
          font-size: 1.875rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
          color: var(--foreground);
        }
        .prose p {
          margin-bottom: 1.5rem;
          line-height: 1.75;
          color: var(--muted-foreground);
        }
      `}</style>
    </div>
  )
}