"use client"

import { useState } from 'react'
import { Sparkles, ChevronRight, Package, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { smartRecommendations, products } from '@/lib/data'
import { useStore } from '@/lib/store-context'

type ProjectType = keyof typeof smartRecommendations

export function SmartRecommendations() {
  const [selectedProject, setSelectedProject] = useState<ProjectType>('home-automation')
  const { addToCart } = useStore()
  
  const recommendation = smartRecommendations[selectedProject]
  const recommendedProducts = products.filter(p => 
    recommendation.products.some(name => 
      p.name.toLowerCase().includes(name.toLowerCase()) || 
      name.toLowerCase().includes(p.name.toLowerCase())
    )
  ).slice(0, 5)

  const totalPrice = recommendedProducts.reduce((sum, p) => sum + p.price, 0)

  const handleAddAllToCart = () => {
    recommendedProducts.forEach(product => {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    })
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              <Sparkles className="w-3 h-3 mr-1" />
              Smart Electronics Assistant
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Project <span className="gradient-text">Recommendations</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Tell us what you want to build, and we&apos;ll recommend all the components you need
            </p>
          </div>

          {/* Project Selection */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {(Object.keys(smartRecommendations) as ProjectType[]).map((key) => (
              <Button
                key={key}
                variant={selectedProject === key ? 'default' : 'outline'}
                onClick={() => setSelectedProject(key)}
                className={selectedProject === key ? 'bg-accent text-accent-foreground' : ''}
              >
                {smartRecommendations[key].title}
              </Button>
            ))}
          </div>

          {/* Recommendation Card */}
          <Card className="border-accent/30 bg-card/50 backdrop-blur">
            <CardHeader className="border-b border-border/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Package className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{recommendation.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{recommendation.description}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  ₹{totalPrice.toLocaleString()}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {/* Recommended Products */}
              <div className="space-y-3 mb-6">
                {recommendedProducts.map((product, index) => (
                  <div 
                    key={product.id}
                    className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-sm flex items-center justify-center font-medium">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                    <p className="font-semibold text-accent">₹{product.price.toLocaleString()}</p>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={handleAddAllToCart}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add All to Cart - ₹{totalPrice.toLocaleString()}
                </Button>
                <Button variant="outline" className="flex-1">
                  Customize Selection
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
