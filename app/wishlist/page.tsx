"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingCart, Trash2 } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useStore } from '@/lib/store-context'
import { ChatbotWidget } from '@/components/chatbot-widget'

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart } = useStore()

  const handleMoveToCart = (item: { id: string; name: string; price: number; image: string }) => {
    addToCart(item)
    removeFromWishlist(item.id)
  }

  if (wishlist.length === 0) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-24 pb-16 container mx-auto px-4">
          <div className="max-w-md mx-auto text-center py-16">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Your wishlist is empty</h1>
            <p className="text-muted-foreground mb-6">
              Save items you love by clicking the heart icon on any product.
            </p>
            <Link href="/products">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              My <span className="gradient-text">Wishlist</span>
            </h1>
            <p className="text-muted-foreground">
              {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
            </p>
          </div>

          {/* Wishlist Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlist.map((item) => (
              <Card key={item.id} className="group border-border/50 hover:border-accent/50 transition-colors">
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative aspect-square bg-secondary/30">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    {/* Remove Button */}
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/90 hover:bg-destructive hover:text-destructive-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <Link href={`/products/${item.id}`}>
                      <h3 className="font-semibold hover:text-accent transition-colors line-clamp-2">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-lg font-bold text-accent mt-2">
                      ₹{item.price.toLocaleString()}
                    </p>

                    {/* Actions */}
                    <Button 
                      className="w-full mt-4 bg-primary hover:bg-primary/90"
                      onClick={() => handleMoveToCart(item)}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Move to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <ChatbotWidget />
    </main>
  )
}
