"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Clock, Package, ArrowRight, Star, Users } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { diyKits } from '@/lib/data'
import { ChatbotWidget } from '@/components/chatbot-widget'

const difficultyColors = {
  Beginner: 'bg-green-500/10 text-green-600 border-green-500/20',
  Intermediate: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
  Advanced: 'bg-red-500/10 text-red-600 border-red-500/20',
}

export default function DIYKitsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Complete Project Kits
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              DIY Project <span className="gradient-text">Kits</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Everything you need in one box. Each kit includes all components, detailed instructions, 
              and access to video tutorials. Perfect for learning, prototyping, and building amazing projects.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-accent" />
                <span>Complete Components</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-accent" />
                <span>Step-by-Step Guides</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                <span>Community Support</span>
              </div>
            </div>
          </div>

          {/* Difficulty Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button variant="outline" className="bg-green-500/10 border-green-500/30 text-green-600 hover:bg-green-500/20">
              Beginner Friendly
            </Button>
            <Button variant="outline" className="bg-yellow-500/10 border-yellow-500/30 text-yellow-600 hover:bg-yellow-500/20">
              Intermediate
            </Button>
            <Button variant="outline" className="bg-red-500/10 border-red-500/30 text-red-600 hover:bg-red-500/20">
              Advanced
            </Button>
          </div>

          {/* Kits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diyKits.map((kit, index) => (
              <Card 
                key={kit.id}
                className="group overflow-hidden border-border/50 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
              >
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative h-56 bg-secondary/30 overflow-hidden">
                    <Image
                      src={kit.image}
                      alt={kit.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    
                    {/* Difficulty Badge */}
                    <Badge 
                      className={`absolute top-4 right-4 ${difficultyColors[kit.difficulty]}`}
                    >
                      {kit.difficulty}
                    </Badge>

                    {/* Price Tag */}
                    <div className="absolute bottom-4 left-4">
                      <p className="text-3xl font-bold text-foreground">
                        ₹{kit.price.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {kit.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {kit.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{kit.projectTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Package className="w-4 h-4" />
                        <span>{kit.components.length} Components</span>
                      </div>
                    </div>

                    {/* Components Preview */}
                    <div className="mb-6">
                      <p className="text-xs text-muted-foreground mb-2">Includes:</p>
                      <div className="flex flex-wrap gap-1">
                        {kit.components.slice(0, 4).map((component) => (
                          <span 
                            key={component}
                            className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                          >
                            {component}
                          </span>
                        ))}
                        {kit.components.length > 4 && (
                          <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">
                            +{kit.components.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link href={`/diy-kits/${kit.id}`}>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        View Kit Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Custom Kit CTA */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 border-accent/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Need a Custom Kit?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Can&apos;t find the perfect kit for your project? We can create a custom kit with exactly the components you need.
                </p>
                <Link href="/contact">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Request Custom Kit
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
      <ChatbotWidget />
    </main>
  )
}
