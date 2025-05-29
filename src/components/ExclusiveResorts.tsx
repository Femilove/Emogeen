"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import {
  Menu,
  X,
  ChevronDown,
  Search,
  User,
  Phone,
  Mail,
  MapPin,
  Star,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function ExclusiveResorts() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }))
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[id]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const destinations = [
    {
      name: "Mauritius",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
      season: "Winter",
      activities: ["Skiing", "Spa", "Fine Dining"],
    },
    {
      name: "Dubai",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
      season: "Year-round",
      activities: ["Beach", "Water Sports", "Golf"],
    },
    {
      name: "Fiji Islands",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      season: "Spring/Fall",
      activities: ["Wine Tasting", "Culinary", "Spa"],
    },
    {
      name: "Costa Rica",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
      season: "Year-round",
      activities: ["Adventure", "Wildlife", "Beach"],
    },
  ]

  const services = [
    {
      title: "Ocean Cruises:",
      description: " Luxurious cruises in destinations like the Maldives, Seychelles, and FijiIslands, off ering wellness activities onboard and shore excursions to pristine beaches and luxury resorts."
 
    },
    {
      title: "Riverboat Cruises:",
      description: "  Serene riverboat experiences in Bali and Phuket, combining relaxation with cultural immersion and wellness practices."
 
    },
    {
      title: "Luxury Wellness Retreats (Local & International):",
      description: "  Immersive experiences in destinations like Mauritius, Barbados, and Cape Verde, blending relaxation, adventure, and healing at luxury resorts.."
 
    },
    {
      title: "Safari & Wellness Journeys:",
      description: "  Unique experiences in Kenya and Tanzania, combining safaris with wellness retreats for a transformative adventure."
 
    },

  ]

  const experiences = [
    {
      title: "Maldives",
      description: "World-class culinary experiences in the comfort of your residence",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    },
    {
      title: "Mauritius",
      description: "Curated adventures and exclusive access to unique experiences",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
    },
    {
      title: "Dubai",
      description: "Personalized wellness and spa treatments",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    },
    {
      title: "Bali",
      description: "Personalized wellness and spa treatments",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    },
    {
      title: "Phuket & Twin Sands, Thailand:",
      description: "Personalized wellness and spa treatments",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-gray-900">EdenOceans</div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center text-gray-900 hover:text-blue-600 transition-colors">
                  Destinations <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center text-gray-900 hover:text-blue-600 transition-colors">
                  Experiences <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <Link to="/membership" className="text-gray-900 hover:text-blue-600 transition-colors">
                Membership
              </Link>
              <Link to="/about" className="text-gray-900 hover:text-blue-600 transition-colors">
                About
              </Link>
            </nav>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button className="hidden lg:inline-flex bg-blue-600 hover:bg-blue-700">Contact Us</Button>

              {/* Mobile Menu Button */}
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link to="/destinations" className="text-gray-900 hover:text-blue-600">
                  Destinations
                </Link>
                <Link to="/experiences" className="text-gray-900 hover:text-blue-600">
                  Experiences
                </Link>
                <Link to="/membership" className="text-gray-900 hover:text-blue-600">
                  Membership
                </Link>
                <Link to="/about" className="text-gray-900 hover:text-blue-600">
                  About
                </Link>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Contact Us</Button>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&h=1080&fit=crop"
            alt="Luxury Resort"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div
          className={`relative z-10 text-center text-white max-w-4xl mx-auto px-4 transform transition-all duration-1000 ${
            isVisible.hero ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          id="hero"
        >
          <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
          Luxury wellness.
            <br />
            <span className="font-normal">re-imagined for you.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
          in elegant gold serif font,
followed by a subheading: “Embark on transformative journeys with ocean cruises, riverboat
cruises, and wellness escapes in the world’s most stunning destinations.” in white
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
            Join the Journey
            </Button>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-gray-50" id="destinations">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 delay-200 ${
              isVisible.destinations ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">Featured Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EdenOceans is a luxury wellness and travel club for highachieving individuals seeking deep restoration and meaningful transformation. We curate
exclusive journeys that blend ocean and riverboat cruises, elite hospitality, personalized
wellness programs, and global adventures in destinations like the Maldives, Bali, and
Seychelles—empowering you to align body, mind, and spirit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination, index) => (
              <Card
                key={destination.name}
                className={`group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform ${
                  isVisible.destinations ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-blue-600">{destination.season}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{destination.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {destination.activities.map((activity) => (
                      <Badge key={activity} variant="outline" className="text-xs">
                        {activity}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


            {/* Membership CTA Section */}
            <section className="py-20 bg-gray-900 text-white" id="membership">
        <div className="container mx-auto px-4">
          <div
            className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
              isVisible.membership ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">Who We Are</h2>
            <p className="text-xl mb-8 text-gray-300">
            EdenOceans is where luxury meets holistic wellness. We are a global travel and
wellness club designed for high-achieving women and men who seek more than a getaway we
off er transformation. Through ocean cruises, riverboat cruises, elite travel, personalized
coaching, and spiritual alignment, we guide our members toward vitality, joy, and meaningful
connection in destinations like Phuket, Seychelles, and beyond..
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Mission:</h2>
            <p className="text-xl mb-8 text-gray-300">
            We curate transformative wellness journeys that blend elite hospitality, strong social support systems,
personalized wellness programs, lifestyle coaching and seamless concierge services, with home care, and travel to selected 5
star resorts across the world. Through global partnerships with world-class resorts and wellness experts, we off er our
members access to premium retreats, & home wellness programs, designed to elevate physical vitality, mental clarity,
emotional balance, and soulful living.
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Vision</h2>
            <p className="text-xl mb-8 text-gray-300">
            To be the world's most exclusive integrated wellness club, empowering high-achieving individuals to experience
holistic rejuvenation, relaxation, restoration and life style transformation at the finest luxury destinations across the globe.
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Core Values</h2>
            <ul>
              <li><p className="text-xl mb-8 text-gray-300">Intentional ulving: We believe in living with purpose, presence, and mindfulness.
Every experience we curate empowers our members to align their inner wellbeing with their
outer lifestyle.</p></li>
              <li><p className="text-xl mb-8 text-gray-300">Transformational Travel: We view travel not as escape, but as elevation—a gateway to
              healing, self-discovery, and renewal in the most inspiring places on Earth</p></li>
              <li><p className="text-xl mb-8 text-gray-300">Service Excellence: We are uncompromising in our standards. From curated retreats
              to concierge services, every detail is designed to deliver elegance, privacy, and lasting impact</p></li>
              <li><p className="text-xl mb-8 text-gray-300">Visual Elements: A video snippet of a riverboat cruise in Bali, paired with images of
              members meditating by the ocean in Barbados or enjoying a safari in Kenya. Use a deep blue</p></li>
             
            </ul>

          </div>
        </div>
      </section>

            {/* Membership Tiers */}
            <section className="py-20 bg-gray-50" id="testimonials">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.testimonials ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">It offers two exclusive membership tiers.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
              <Card
                
                className={`p-8 border-0 shadow-lg transform transition-all duration-1000 ${
                  isVisible.testimonials ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                
              >
                
                <p className="text-gray-600 mb-6 italic">
                  "A foundational tier for those beginning their wellness journey with EdenOceans."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">Premium Membership:</div>
                    <div className="text-sm text-gray-500"><a href="#Join Us" >Join Premium</a></div>
                  </div>
                </div>
              </Card>
              <Card
                
                className={`p-8 border-0 shadow-lg transform transition-all duration-1000 ${
                  isVisible.testimonials ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                
              >
              
                <p className="text-gray-600 mb-6 italic">
                  "An elevated tier for those seeking a more immersive and exclusive experience."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">Elite Membership:</div>
                    <div className="text-sm text-gray-500"><a href="#Join Us" >JJoin Elite</a></div>
                  </div>
                </div>
              </Card>
           
          </div>
        </div>
      </section>



      {/* Experiences Section */}
      <section className="py-20" id="experiences">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.experiences ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">Services/Experiences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Key Services:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group transform transition-all duration-1000 ${
                  isVisible.experiences ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200 + 200}ms` }}
              >
                <div className="relative h-64 mb-2 overflow-hidden rounded-lg">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.experiences ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Featured Destinations:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <div
                key={experience.title}
                className={`group transform transition-all duration-1000 ${
                  isVisible.experiences ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200 + 200}ms` }}
              >
                <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                  <img
                    src={experience.image || "/placeholder.svg"}
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{experience.title}</h3>
                <p className="text-gray-600 mb-4">{experience.description}</p>
                <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold mb-6">EXCLUSIVE RESORTS</div>
              <p className="text-gray-400 mb-6">
                Creating extraordinary travel experiences for discerning travelers worldwide.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Destinations</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    North America
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Caribbean
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Europe
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Asia Pacific
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Membership</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Application
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Member Portal
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Concierge
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3" />
                  <span>1-800-EXCLUSIVE</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3" />
                  <span>info@exclusiveresorts.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3" />
                  <span>Denver, Colorado</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© 2024 Exclusive Resorts. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
                <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
