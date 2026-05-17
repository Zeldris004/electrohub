import Image from 'next/image'
import Link from 'next/link'
import { 
  Zap, 
  Target, 
  Users, 
  Award, 
  Lightbulb,
  Heart,
  ArrowRight
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChatbotWidget } from '@/components/chatbot-widget'

const stats = [
  { value: '10K+', label: 'Products Available' },
  { value: '50K+', label: 'Happy Customers' },
  { value: '500+', label: 'Colleges Served' },
  { value: '99%', label: 'Satisfaction Rate' },
]

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'We source only genuine components from trusted manufacturers, ensuring your projects work flawlessly.',
  },
  {
    icon: Users,
    title: 'Student Focused',
    description: 'Our pricing and policies are designed with engineering students in mind, making electronics accessible to all.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Driven',
    description: 'We continuously add new products and kits to support the latest trends in IoT, robotics, and embedded systems.',
  },
  {
    icon: Heart,
    title: 'Community Support',
    description: 'Our team of engineers is always ready to help you with technical queries and project guidance.',
  },
]

const team = [
  {
    name: 'Arjun Mehta',
    role: 'Founder & CEO',
    image: '/images/team-1.jpg',
    bio: 'IIT Delhi graduate with a passion for making electronics accessible.',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Operations',
    image: '/images/team-2.jpg',
    bio: 'Supply chain expert ensuring fast delivery across India.',
  },
  {
    name: 'Rahul Verma',
    role: 'Technical Lead',
    image: '/images/team-3.jpg',
    bio: 'Electronics engineer curating our product catalog.',
  },
  {
    name: 'Sneha Gupta',
    role: 'Community Manager',
    image: '/images/team-4.jpg',
    bio: 'Building and nurturing our maker community.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Making Electronics
              <br />
              <span className="gradient-text">Accessible to All</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              ElectroHub was born from a simple idea: every engineering student and hobbyist 
              deserves access to quality electronics components at affordable prices.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-secondary/30">
              <Image
                src="/images/about-story.jpg"
                alt="ElectroHub Story"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-2xl font-bold">Founded in 2023</p>
                <p className="text-muted-foreground">By engineers, for engineers</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                From a College Dorm to
                <br />
                <span className="gradient-text">India&apos;s Trusted Electronics Store</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  It all started when our founder, Arjun, was a student at IIT Delhi. 
                  Frustrated by the lack of affordable, quality electronics components 
                  for his robotics projects, he started sourcing components directly 
                  from manufacturers and sharing them with fellow students.
                </p>
                <p>
                  What began as a small operation from a college dorm has grown into 
                  ElectroHub - a trusted platform serving over 50,000 students, hobbyists, 
                  and professionals across India.
                </p>
                <p>
                  Today, we offer 10,000+ products, curated DIY kits, and a supportive 
                  community that helps makers bring their ideas to life. Our mission 
                  remains the same: make electronics accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center border-border/50">
                <CardContent className="p-6">
                  <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do at ElectroHub
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="border-border/50 hover:border-accent/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-muted-foreground">
              The passionate engineers and makers behind ElectroHub
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden border-border/50 hover:border-accent/50 transition-colors group">
                <CardContent className="p-0">
                  <div className="relative h-64 bg-secondary/30">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-accent mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-accent/30">
            <CardContent className="p-8 md:p-12 text-center">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Building?
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-6">
                Join thousands of makers who trust ElectroHub for their electronics needs. 
                Start exploring our products today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Shop Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">Contact Us</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
      <ChatbotWidget />
    </main>
  )
}
