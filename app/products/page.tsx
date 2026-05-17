import { Suspense } from 'react'
import { ProductsPageContent } from './products-content'

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <ProductsPageContent />
    </Suspense>
  )
}
