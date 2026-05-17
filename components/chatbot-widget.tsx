"use client"

import { useState } from 'react'
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Message {
  id: number
  text: string
  isBot: boolean
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hi! I'm ElectroBot, your smart electronics assistant. How can I help you today?",
    isBot: true,
  },
]

const quickReplies = [
  "Find Arduino components",
  "IoT project suggestions",
  "Shipping information",
  "Track my order",
]

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isBot: false,
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(input),
        isBot: true,
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  const getBotResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase()
    
    if (lowerQuery.includes('arduino')) {
      return "We have a great selection of Arduino boards! Check out our Arduino Uno R3 (₹599) or Arduino Nano (₹349). Would you like me to show you our complete Arduino collection?"
    }
    if (lowerQuery.includes('raspberry') || lowerQuery.includes('pi')) {
      return "Looking for Raspberry Pi? We have the latest Pi 5 in stock! The 8GB version is our bestseller at ₹7,499. Shall I help you find accessories too?"
    }
    if (lowerQuery.includes('shipping') || lowerQuery.includes('delivery')) {
      return "We offer free shipping on orders above ₹999! Standard delivery takes 2-3 business days. Express delivery is available for ₹99 extra."
    }
    if (lowerQuery.includes('track') || lowerQuery.includes('order')) {
      return "To track your order, please visit the 'Track Order' page or enter your order ID here. You'll receive tracking updates via email and SMS."
    }
    if (lowerQuery.includes('iot') || lowerQuery.includes('project')) {
      return "For IoT projects, I recommend starting with our IoT Starter Kit (₹2,999). It includes ESP8266, sensors, and all the basics. Want me to suggest more project ideas?"
    }
    
    return "Thanks for your question! For detailed assistance, you can also reach our support team at support@electrohub.in or call +91 9322714343. Is there anything specific I can help you with?"
  }

  const handleQuickReply = (reply: string) => {
    setInput(reply)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-destructive animate-pulse" />
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <Card className="shadow-2xl border-accent/30">
          <CardHeader className="bg-gradient-to-r from-primary to-accent p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-white text-base">ElectroBot</CardTitle>
                  <p className="text-xs text-white/70 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    AI Assistant
                  </p>
                </div>
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/20"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      message.isBot
                        ? 'bg-secondary text-foreground rounded-bl-none'
                        : 'bg-accent text-accent-foreground rounded-br-none'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Replies */}
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  className="flex-1"
                />
                <Button size="icon" onClick={handleSend} className="bg-accent text-accent-foreground">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
