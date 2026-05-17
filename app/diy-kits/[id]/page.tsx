"use client"

import { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Clock, 
  Package, 
  ShoppingCart, 
  ChevronRight, 
  CheckCircle2,
  Play,
  BookOpen,
  Users,
  Download
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { diyKits } from '@/lib/data'
import { useStore } from '@/lib/store-context'
import { ChatbotWidget } from '@/components/chatbot-widget'

const difficultyColors = {
  Beginner: 'bg-green-500/10 text-green-600 border-green-500/20',
  Intermediate: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
  Advanced: 'bg-red-500/10 text-red-600 border-red-500/20',
}

export default function DIYKitDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const { addToCart } = useStore()

  const kit = diyKits.find(k => k.id === id)
  const relatedKits = diyKits.filter(k => k.id !== id).slice(0, 3)

  if (!kit) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-24 pb-16 container mx-auto px-4">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold mb-4">Kit Not Found</h1>
            <Link href="/diy-kits">
              <Button>Back to DIY Kits</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const handleAddToCart = () => {
    addToCart({
      id: kit.id,
      name: kit.name,
      price: kit.price,
      image: kit.image,
    })
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/diy-kits" className="hover:text-foreground">DIY Kits</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{kit.name}</span>
          </nav>

          {/* Kit Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div className="relative aspect-video lg:aspect-square rounded-2xl bg-secondary/30 overflow-hidden">
              <Image
                src={kit.image}
                alt={kit.name}
                fill
                className="object-cover"
              />
              <Badge 
                className={`absolute top-4 right-4 ${difficultyColors[kit.difficulty]}`}
              >
                {kit.difficulty}
              </Badge>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                  Complete Project Kit
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{kit.name}</h1>
                <p className="text-lg text-muted-foreground">{kit.description}</p>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Build Time</p>
                    <p className="font-medium">{kit.projectTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Components</p>
                    <p className="font-medium">{kit.components.length} Items</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Skill Level</p>
                    <p className="font-medium">{kit.difficulty}</p>
                  </div>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="p-6 rounded-xl bg-secondary/30 border border-border">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold gradient-text">
                    ₹{kit.price.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground">incl. all components</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <Button 
                    className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 h-12"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Link href="/checkout" className="flex-1">
                    <Button variant="outline" className="w-full h-12">
                      Buy Now
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Free Shipping
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Video Tutorials
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Support Included
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* What&apos;s Included */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">What&apos;s Included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {kit.components.map((component, index) => (
                <div 
                  key={component}
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50"
                >
                  <span className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-medium text-sm">
                    {index + 1}
                  </span>
                  <span className="font-medium">{component}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Learning Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-border/50 hover:border-accent/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Play className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Video Tutorials</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Step-by-step video guide to build your project from scratch
                  </p>
                  <Button variant="outline" className="w-full">
                    Watch Videos
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-border/50 hover:border-accent/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Documentation</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Detailed written instructions with circuit diagrams and code
                  </p>
                  <Button variant="outline" className="w-full">
                    Read Docs
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-border/50 hover:border-accent/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Download className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Code & Files</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download all source code, schematics, and 3D print files
                  </p>
                  <Button variant="outline" className="w-full">
                    Download Files
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Kits */}
          {relatedKits.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedKits.map((relatedKit) => (
                  <Link key={relatedKit.id} href={`/diy-kits/${relatedKit.id}`}>
                    <Card className="group overflow-hidden border-border/50 hover:border-accent/50 transition-all">
                      <CardContent className="p-0">
                        <div className="relative h-40 bg-secondary/30">
                          <Image
                            src={relatedKit.image}
                            alt={relatedKit.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold group-hover:text-accent transition-colors">
                            {relatedKit.name}
                          </h3>
                          <p className="text-accent font-bold">
                            ₹{relatedKit.price.toLocaleString()}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
      <ChatbotWidget />
    </main>
  )
}
