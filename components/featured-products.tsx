"use client"

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ProductCard } from './product-card'
import { products } from '@/lib/data'

export function FeaturedProducts() {
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 4)
  const trendingProducts = products.slice(0, 8)

  return (
    <section className="py-16 lg:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Featured Products */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Featured <span className="gradient-text">Products</span>
              </h2>
              <p className="text-muted-foreground">
                Hand-picked components for your next project
              </p>
            </div>
            <Link 
              href="/products"
              className="flex items-center gap-2 text-accent hover:gap-3 transition-all font-medium"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Trending Products */}
        <div>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Trending <span className="gradient-text">Now</span>
              </h2>
              <p className="text-muted-foreground">
                Most popular products this week
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
