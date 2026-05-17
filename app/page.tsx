import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { CategoriesSection } from '@/components/categories-section'
import { FeaturedProducts } from '@/components/featured-products'
import { DIYKitsSection } from '@/components/diy-kits-section'
import { SmartRecommendations } from '@/components/smart-recommendations'
import { TestimonialsSection } from '@/components/testimonials-section'
import { FlashSaleBanner, StudentDiscountBanner } from '@/components/promotional-banners'
import { ChatbotWidget } from '@/components/chatbot-widget'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <FlashSaleBanner />
      <FeaturedProducts />
      <SmartRecommendations />
      <DIYKitsSection />
      <StudentDiscountBanner />
      <TestimonialsSection />
      <Footer />
      <ChatbotWidget />
    </main>
  )
}
