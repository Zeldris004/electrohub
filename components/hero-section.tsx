"use client"

import Link from 'next/link'
import { ArrowRight, Zap, Truck, Shield, Headphones } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-slide-up">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Student Discount: Flat 15% OFF</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Everything Electronics
            <br />
            <span className="gradient-text">in One Place</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Premium quality components, robotics kits, and IoT modules for engineering students, hobbyists, and innovators. Build your dreams with ElectroHub.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link href="/products">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 h-12 text-base animate-pulse-glow">
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/diy-kits">
              <Button size="lg" variant="outline" className="px-8 h-12 text-base border-2">
                Explore DIY Kits
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text">10K+</p>
              <p className="text-sm text-muted-foreground">Products</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text">50K+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text">500+</p>
              <p className="text-sm text-muted-foreground">Colleges Served</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text">4.8</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Features Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          {[
            { icon: Truck, label: 'Free Shipping', desc: 'Orders above ₹999' },
            { icon: Shield, label: 'Genuine Products', desc: '100% Authentic' },
            { icon: Headphones, label: '24/7 Support', desc: 'Always here to help' },
            { icon: Zap, label: 'Fast Delivery', desc: '2-3 Business Days' },
          ].map((feature) => (
            <div 
              key={feature.label}
              className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-medium text-sm">{feature.label}</p>
                <p className="text-xs text-muted-foreground">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
