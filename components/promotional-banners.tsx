"use client"

import Link from 'next/link'
import { Clock, Percent, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FlashSaleBanner() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-accent p-8 md:p-12">
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }}
          />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm mb-4">
                <Percent className="w-4 h-4" />
                Limited Time Offer
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                Flash Sale - Up to 40% OFF
              </h3>
              <p className="text-white/80">
                On selected Arduino, Raspberry Pi, and sensor modules
              </p>
            </div>

            {/* Timer */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-white">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Ends in:</span>
              </div>
              <div className="flex gap-2">
                {[
                  { value: '02', label: 'Days' },
                  { value: '14', label: 'Hours' },
                  { value: '32', label: 'Mins' },
                  { value: '58', label: 'Secs' },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="w-14 h-14 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center text-2xl font-bold text-white">
                      {item.value}
                    </div>
                    <p className="text-xs text-white/70 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link href="/products?sale=true">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 whitespace-nowrap">
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function StudentDiscountBanner() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-accent/20 via-accent/10 to-primary/10 border border-accent/30 p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm mb-4">
                Students Only
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Flat <span className="gradient-text">15% OFF</span> for Students
              </h3>
              <p className="text-muted-foreground max-w-lg">
                Verify your student ID and get exclusive discounts on all electronics components. 
                Valid for all college and university students.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/student-discount">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Verify Student ID
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline">
                  Browse Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
