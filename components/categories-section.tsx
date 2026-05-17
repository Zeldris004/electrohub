"use client"

import Link from 'next/link'
import { 
  Cpu, 
  Server, 
  Radio, 
  Wifi, 
  Settings, 
  Battery, 
  Bot, 
  Wrench, 
  Cable, 
  Monitor,
  ArrowRight
} from 'lucide-react'
import { categories } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Server,
  Radio,
  Wifi,
  Settings,
  Battery,
  Bot,
  Wrench,
  Cable,
  Monitor,
}

export function CategoriesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Shop by <span className="gradient-text">Category</span>
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Explore our wide range of electronics components organized by category
            </p>
          </div>
          <Link 
            href="/products"
            className="flex items-center gap-2 text-accent hover:gap-3 transition-all font-medium"
          >
            View All Categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon] || Cpu
            return (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Icon */}
                <div className="relative w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent/20 transition-all">
                  <Icon className="w-6 h-6 text-accent" />
                </div>

                {/* Content */}
                <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.productCount} Products
                </p>

                {/* Arrow */}
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
