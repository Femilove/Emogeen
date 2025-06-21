"use client"

import WhyEdenOceans from "./WhyEdenOceans";
import JoinUs from "./JoinUs";
import FAQs from "./FAQs";
import BlogInsights from "./BlogInsights";
import ContactUs from "./ContactUs";
import MeetTheFounders from "./MeetTheFounders";
// import logo from './WhatsApp Image 2025-05-28 at 16.16.22_2dab7b22.jpg';
import { useState, useEffect, useCallback } from "react"
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
 
 
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react"
import { Link } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
import useEmblaCarousel from 'embla-carousel-react';


export default function ExclusiveResorts() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({
    hero: false,
    destinations: false,
    experiences: false,
    membership: false,
    testimonials: false,
    services:false
  })
   useEffect(() => {
    AOS.init({
      duration: 1000, // optional, sets animation duration in ms
      once: true,     // optional, animation only happens once
    });
  }, []);

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

  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  // const delay = 3000; // 3 seconds

  // const autoplay = useCallback(() => {
  //   if (!emblaApi) return;
  //   emblaApi.scrollNext();
  // }, [emblaApi]);

  // useEffect(() => {
  //   if (!emblaApi) return;
  //   const interval = setInterval(autoplay, delay);
  //   return () => clearInterval(interval); // cleanup on unmount
  // }, [emblaApi, autoplay]);

  // const images = ['https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcT2ziQ7eoHcX8BPXfDX4TMViQwBiovNriw8zviO9TrrVxJ1tbgjNTX7dRGxkTWkj5DPn-GiT7lydv56c98n8EHmXVhHAfjdJdNDFtcNEDM', 'https://s44650.pcdn.co/wp-content/uploads/2023/12/Mauritius-country-report.jpg', 'https://images.pexels.com/photos/5390337/pexels-photo-5390337.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=2'];

  const destinations = [
    {
      name: "Mauritius",
      image: "https://s44650.pcdn.co/wp-content/uploads/2023/12/Mauritius-country-report.jpg",
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
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqNNyYw123h3OwAXXuZr8LNDJ0IyXKnwdUUwKcFy2spE81pbzWAj03enwpN55gwc3TwP3z9qyDNejptBg-gjoYzz9gm2IDN6MVF4fKV8hmrKh8hKsXujOhwjPcQD28iwEbQteos=w810-h468-n-k-no",
      season: "Year-round",
      activities: ["Adventure", "Wildlife", "Beach"],
    },
  ]

  // const services = [
  //   {
  //     image: "https://images.pexels.com/photos/29904815/pexels-photo-29904815/free-photo-of-traditional-boat-with-yellow-sails-in-ha-long-bay.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     title: "Ocean Cruises:",
  //     description: " Luxurious cruises in destinations like the Maldives, Seychelles, and FijiIslands, off ering wellness activities onboard and shore excursions to pristine beaches and luxury resorts."
 
  //   },
  //   {
  //     image: "https://images.pexels.com/photos/1117773/pexels-photo-1117773.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     title: "Riverboat Cruises:",
  //     description: "  Serene riverboat experiences in Bali and Phuket, combining relaxation with cultural immersion and wellness practices."
 
  //   },
  //   {
  //     image: "https://images.pexels.com/photos/7264037/pexels-photo-7264037.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     title: "Luxury Wellness Retreats (Local & International):",
  //     description: "  Immersive experiences in destinations like Mauritius, Barbados, and Cape Verde, blending relaxation, adventure, and healing at luxury resorts.."
 
  //   },
  //   {
  //     image: "https://images.pexels.com/photos/2862070/pexels-photo-2862070.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     title: "Safari & Wellness Journeys:",
  //     description: "  Unique experiences in Kenya and Tanzania, combining safaris with wellness retreats for a transformative adventure."
 
  //   },

  // ]

  // const experiences = [
  //   {
  //     title: "Maldives",
  //     description: "World-class culinary experiences in the comfort of your residence",
  //     image: "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     title: "Mauritius",
  //     description: "Curated adventures and exclusive access to unique experiences",
  //     image: "https://images.pexels.com/photos/3703465/pexels-photo-3703465.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     title: "Dubai",
  //     description: "Personalized wellness and spa treatments",
  //     image: "https://images.pexels.com/photos/7264037/pexels-photo-7264037.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     title: "Bali",
  //     description: "Personalized wellness and spa treatments",
  //     image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     title: "Phuket & Twin Sands, Thailand:",
  //     description: "Personalized wellness and spa treatments",
  //     image: "https://images.pexels.com/photos/472309/pexels-photo-472309.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  // ]

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
              <div className="text-3xl font-bold text-gray-900">EdenOceans</div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center text-gray-950 hover:text-blue-600 transition-colors">
                  Destinations <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center text-gray-950 hover:text-blue-600 transition-colors">
                  Experiences <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <Link to="/membership" className="text-gray-950 hover:text-blue-600 transition-colors">
                Membership
              </Link>
              <Link to="/about" className="text-gray-950 hover:text-blue-600 transition-colors">
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
              <nav className="flex flex-col space-y-4 ">
                <Link to="/destinations" className="text-gray-100 hover:text-blue-600">
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
          className={`relative z-10 text-center text-white max-w-4xl mx-auto px-4 transform transition-all duration-2000 ${
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
      <section className="py-20 bg-gray-50 mt-32" id="destinations">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 `}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-[#0D1E6E]" data-aos="flip-right" data-aos-delay="10000">Featured Destinations</h2>
            <p className="text-xl max-w-3xl mx-auto text-[#a3957c] font-semibold" data-aos="flip-left"
     data-aos-easing="ease-out-cubic" data-aos-delay="18000">
            EdenOceans is a luxury wellness and travel club for highachieving individuals seeking deep restoration and meaningful transformation. We curate
exclusive journeys that blend ocean and riverboat cruises, elite hospitality, personalized
wellness programs, and global adventures in destinations like the Maldives, Bali, and
Seychelles—empowering you to align body, mind, and spirit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination) => (
              <Card
                key={destination.name}
                className={`group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl  
                `}
                  data-aos="zoom-in"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-[#0D1E6E] text-[#FBF3A0]">{destination.season}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{destination.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {destination.activities.map((activity) => (
                      <Badge key={activity}  className="text-xs text-[#a3957c]">
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
            <section className="py-20 bg-[#FBF3A0] mt-32" id="membership">
        <div className="container mx-auto px-4">
          <div
            className={`max-w-4xl mx-auto text-center transform transition-all duration-2000 ${
              isVisible.membership ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-[#0D1E6E]" data-aos="fade-left">Who We Are</h2>
            <p className="text-xl mb-8 text-[#a3957c] font-semibold " data-aos="zoom-out">
            EdenOceans is where luxury meets holistic wellness. We are a global travel and
wellness club designed for high-achieving women and men who seek more than a getaway we
off er transformation. Through ocean cruises, riverboat cruises, elite travel, personalized
coaching, and spiritual alignment, we guide our members toward vitality, joy, and meaningful
connection in destinations like Phuket, Seychelles, and beyond..
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-[#0D1E6E]" data-aos="fade-right">Mission:</h2>
            <p className="text-xl mb-8 text-[#a3957c] font-semibold" data-aos="zoom-in">
            We curate transformative wellness journeys that blend elite hospitality, strong social support systems,
personalized wellness programs, lifestyle coaching and seamless concierge services, with home care, and travel to selected 5
star resorts across the world. Through global partnerships with world-class resorts and wellness experts, we off er our
members access to premium retreats, & home wellness programs, designed to elevate physical vitality, mental clarity,
emotional balance, and soulful living.
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-[#0D1E6E]" data-aos="fade-right">Vision</h2>
            <p className="text-xl mb-8 text-[#a3957c] font-semibold" data-aos="zoom-out">
            To be the world's most exclusive integrated wellness club, empowering high-achieving individuals to experience
holistic rejuvenation, relaxation, restoration and life style transformation at the finest luxury destinations across the globe.
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-[#0D1E6E]" data-aos="fade-left">Core Values</h2>
            <ul>
              <li data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"><p className="text-xl mb-8 text-[#a3957c] font-semibold" >Intentional ulving: We believe in living with purpose, presence, and mindfulness.
Every experience we curate empowers our members to align their inner wellbeing with their
outer lifestyle.</p></li>
              <li data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"><p className="text-xl mb-8 text-[#a3957c] font-semibold">Transformational Travel: We view travel not as escape, but as elevation—a gateway to
              healing, self-discovery, and renewal in the most inspiring places on Earth</p></li>
              <li data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"><p className="text-xl mb-8 text-[#a3957c] font-semibold">Service Excellence: We are uncompromising in our standards. From curated retreats
              to concierge services, every detail is designed to deliver elegance, privacy, and lasting impact</p></li>
              <li data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"><p className="text-xl mb-8 text-[#a3957c] font-semibold">Visual Elements: A video snippet of a riverboat cruise in Bali, paired with images of
              members meditating by the ocean in Barbados or enjoying a safari in Kenya. Use a deep blue</p></li>
             
            </ul>

          </div>
        </div>
      </section>

            {/* Membership Tiers */}
            <section className="py-20 bg-gray-50 mt-32" id="testimonials">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transform transition-all duration-2000 ${
              isVisible.testimonials ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">It offers two exclusive membership tiers.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
              <Card
                
                className={`p-8 border-0 shadow-lg transform transition-all duration-2000 ${
                  isVisible.testimonials ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                
              >
                
                <p className="text-gray-600 mb-6 italic">
                  "A foundational tier for those beginning their wellness journey with EdenOceans."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">Royal membership:</div>
                    <div className="text-sm text-gray-500"><a href="#Join Us" >Join Royal</a></div>
                  </div>
                </div>
              </Card>
              <Card
                
                className={`p-8 border-0 shadow-lg transform transition-all duration-2000 ${
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
                
                className={`p-8 border-0 shadow-lg transform transition-all duration-2000 ${
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
                    <div className="text-sm text-gray-500"><a href="#Join Us" >Join Elite</a></div>
                  </div>
                </div>
              </Card>
           
          </div>
        </div>
      </section>



      {/* Experiences Section */}
      {/* <section className="py-20 mt-32" id="experiences">
        <div className="container mx-auto px-4">



          <div
            className={`text-center mb-16 transform transition-all duration-2000 ${
              isVisible.experiences ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
             <h2 className="text-4xl md:text-5xl font-light mb-6" data-aos="fade-up-left">Services/Experiences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto " data-aos="fade-up-right">
            Key Services:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group transform transition-all duration-2000 ${
                  isVisible.experiences ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200 + 200}ms` }} data-aos="zoom-in"
              >
                <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>






          <div
            className={`text-center mb-16 transform transition-all duration-2000 ${
              isVisible.experiences ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-xl text-gray-600 max-w-3xl mx-auto " data-aos="fade-up-left">
            Featured Destinations:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <div
                key={experience.title}
                className={`group transform transition-all duration-2000 ${
                  isVisible.experiences ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200 + 200}ms` }} data-aos="zoom-out"
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
      </section> */}
      
      {/* WhyEdenOceans */}
      <section className="py-20 mt-32" id="experiences">
        <WhyEdenOceans />
      </section>

       <section className="py-20 mt-32" id="Join Us" >
      <JoinUs />
      </section>

      <section className="py-20 mt-32" id="experiences">
      <FAQs />
      </section>

       <section className="py-20 mt-32" id="experiences">
      <BlogInsights />
      </section>

      <section className="py-20 mt-32" id="experiences">
      <ContactUs />
      </section>

      <section className="py-20 mt-32" id="experiences">
      <MeetTheFounders />
      </section> 




      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 mt-32">
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
