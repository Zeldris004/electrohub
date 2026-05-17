"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Clock, Package, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { diyKits } from '@/lib/data'

const difficultyColors = {
  Beginner: 'bg-green-500/10 text-green-600 border-green-500/20',
  Intermediate: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
  Advanced: 'bg-red-500/10 text-red-600 border-red-500/20',
}

export function DIYKitsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Complete Project Kits
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            DIY Project <span className="gradient-text">Kits</span>
          </h2>
          <p className="text-muted-foreground">
            Everything you need in one box. Perfect for learning, prototyping, and building amazing projects.
          </p>
        </div>

        {/* Kits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diyKits.map((kit, index) => (
            <Card 
              key={kit.id}
              className="group overflow-hidden border-border/50 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative h-48 bg-secondary/30 overflow-hidden">
                  <Image
                    src={kit.image}
                    alt={kit.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  
                  {/* Difficulty Badge */}
                  <Badge 
                    className={`absolute top-4 right-4 ${difficultyColors[kit.difficulty]}`}
                  >
                    {kit.difficulty}
                  </Badge>

                  {/* Price Tag */}
                  <div className="absolute bottom-4 left-4">
                    <p className="text-2xl font-bold text-foreground">
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
                  <div className="flex flex-wrap gap-1 mb-4">
                    {kit.components.slice(0, 3).map((component) => (
                      <span 
                        key={component}
                        className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                      >
                        {component}
                      </span>
                    ))}
                    {kit.components.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                        +{kit.components.length - 3} more
                      </span>
                    )}
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

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link href="/diy-kits">
            <Button size="lg" variant="outline" className="px-8">
              View All DIY Kits
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
