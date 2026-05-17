"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ChevronRight, 
  CreditCard, 
  Wallet, 
  Building2, 
  Smartphone,
  Shield,
  CheckCircle2,
  ArrowLeft
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useStore } from '@/lib/store-context'
import { ChatbotWidget } from '@/components/chatbot-widget'

const paymentMethods = [
  { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, description: 'Pay securely with your card' },
  { id: 'upi', name: 'UPI', icon: Smartphone, description: 'Google Pay, PhonePe, Paytm' },
  { id: 'netbanking', name: 'Net Banking', icon: Building2, description: 'All major banks supported' },
  { id: 'wallet', name: 'Wallet', icon: Wallet, description: 'Paytm, Amazon Pay, etc.' },
]

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useStore()
  const [step, setStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  })

  const shipping = cartTotal >= 999 ? 0 : 99
  const total = cartTotal + shipping

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handlePlaceOrder = async () => {
    setIsProcessing(true)
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsProcessing(false)
    setOrderPlaced(true)
    clearCart()
  }

  if (orderPlaced) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-24 pb-16 container mx-auto px-4">
          <div className="max-w-md mx-auto text-center py-16">
            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Order Placed Successfully!</h1>
            <p className="text-muted-foreground mb-2">
              Thank you for your purchase. Your order has been confirmed.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Order ID: <span className="font-mono font-medium">EH-{Date.now().toString().slice(-8)}</span>
            </p>
            <div className="space-y-3">
              <Link href="/products">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Continue Shopping
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="w-full">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  if (cart.length === 0) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-24 pb-16 container mx-auto px-4">
          <div className="max-w-md mx-auto text-center py-16">
            <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
            <Link href="/products">
              <Button>Start Shopping</Button>
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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/cart" className="hover:text-foreground flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Back to Cart
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Checkout</span>
          </nav>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {['Shipping', 'Payment', 'Review'].map((label, index) => (
              <div key={label} className="flex items-center gap-2">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step > index + 1 
                      ? 'bg-green-500 text-white' 
                      : step === index + 1 
                        ? 'bg-accent text-accent-foreground' 
                        : 'bg-secondary text-muted-foreground'
                  }`}
                >
                  {step > index + 1 ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
                </div>
                <span className={`hidden sm:block ${step === index + 1 ? 'font-medium' : 'text-muted-foreground'}`}>
                  {label}
                </span>
                {index < 2 && <ChevronRight className="w-4 h-4 text-muted-foreground" />}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Step 1: Shipping */}
              {step === 1 && (
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle>Shipping Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={shippingInfo.firstName}
                          onChange={handleShippingChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={shippingInfo.lastName}
                          onChange={handleShippingChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={shippingInfo.email}
                          onChange={handleShippingChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={shippingInfo.phone}
                          onChange={handleShippingChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        name="address"
                        value={shippingInfo.address}
                        onChange={handleShippingChange}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          name="city"
                          value={shippingInfo.city}
                          onChange={handleShippingChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          name="state"
                          value={shippingInfo.state}
                          onChange={handleShippingChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pincode">PIN Code</Label>
                        <Input
                          id="pincode"
                          name="pincode"
                          value={shippingInfo.pincode}
                          onChange={handleShippingChange}
                          required
                        />
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      onClick={() => setStep(2)}
                    >
                      Continue to Payment
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Payment */}
              {step === 2 && (
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      {paymentMethods.map((method) => (
                        <div 
                          key={method.id}
                          className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-colors ${
                            paymentMethod === method.id 
                              ? 'border-accent bg-accent/5' 
                              : 'border-border hover:border-accent/50'
                          }`}
                          onClick={() => setPaymentMethod(method.id)}
                        >
                          <RadioGroupItem value={method.id} id={method.id} />
                          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                            <method.icon className="w-5 h-5 text-accent" />
                          </div>
                          <div className="flex-1">
                            <Label htmlFor={method.id} className="font-medium cursor-pointer">
                              {method.name}
                            </Label>
                            <p className="text-sm text-muted-foreground">{method.description}</p>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>

                    {/* Card Details (if card selected) */}
                    {paymentMethod === 'card' && (
                      <div className="space-y-4 pt-4 border-t border-border">
                        <div className="space-y-2">
                          <Label>Card Number</Label>
                          <Input placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Expiry Date</Label>
                            <Input placeholder="MM/YY" />
                          </div>
                          <div className="space-y-2">
                            <Label>CVV</Label>
                            <Input placeholder="123" type="password" />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setStep(1)}>
                        Back
                      </Button>
                      <Button 
                        className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                        onClick={() => setStep(3)}
                      >
                        Review Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Review */}
              {step === 3 && (
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle>Review Your Order</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Shipping Address */}
                    <div>
                      <h4 className="font-medium mb-2">Shipping Address</h4>
                      <div className="p-4 rounded-lg bg-secondary/30 text-sm">
                        <p className="font-medium">{shippingInfo.firstName} {shippingInfo.lastName}</p>
                        <p className="text-muted-foreground">{shippingInfo.address}</p>
                        <p className="text-muted-foreground">
                          {shippingInfo.city}, {shippingInfo.state} - {shippingInfo.pincode}
                        </p>
                        <p className="text-muted-foreground">{shippingInfo.phone}</p>
                      </div>
                    </div>

                    {/* Items */}
                    <div>
                      <h4 className="font-medium mb-2">Order Items</h4>
                      <div className="space-y-3">
                        {cart.map((item) => (
                          <div key={item.id} className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30">
                            <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                              <Image src={item.image} alt={item.name} fill className="object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium truncate">{item.name}</p>
                              <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                            </div>
                            <p className="font-medium">₹{(item.price * item.quantity).toLocaleString()}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setStep(2)}>
                        Back
                      </Button>
                      <Button 
                        className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                        onClick={handlePlaceOrder}
                        disabled={isProcessing}
                      >
                        {isProcessing ? 'Processing...' : `Pay ₹${total.toLocaleString()}`}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Order Summary */}
            <div>
              <Card className="border-border/50 sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Items Preview */}
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                          <Image src={item.image} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{item.name}</p>
                          <p className="text-xs text-muted-foreground">x{item.quantity}</p>
                        </div>
                        <p className="text-sm font-medium">₹{(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>₹{cartTotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className={shipping === 0 ? 'text-green-500' : ''}>
                        {shipping === 0 ? 'Free' : `₹${shipping}`}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <span className="font-semibold">Total</span>
                    <span className="text-2xl font-bold gradient-text">
                      ₹{total.toLocaleString()}
                    </span>
                  </div>

                  {/* Security Badge */}
                  <div className="flex items-center justify-center gap-2 pt-4 text-xs text-muted-foreground">
                    <Shield className="w-4 h-4" />
                    <span>Secure 256-bit SSL Encryption</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ChatbotWidget />
    </main>
  )
}
