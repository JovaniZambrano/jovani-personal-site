'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Your production data - 9 photos
  const productions = [
    {
      title: "Honey Brown Eyes",
      playwright: "Stefanie Zadravec",
      theater: "Little Branch Theater",
      director: "Amela Karadža",
      image: "/productions/honey-brown-eyes.webp"
    },
    {
      title: "Honey Brown Eyes",
      playwright: "Stefanie Zadravec",
      theater: "Little Branch Theater",
      director: "Amela Karadža",
      image: "/productions/honey-brown-eyes-2.webp"
    },
    {
      title: "Honey Brown Eyes",
      playwright: "Stefanie Zadravec",
      theater: "Little Branch Theater",
      director: "Amela Karadža",
      image: "/productions/honey-brown-eyes-3.webp"
    },
    {
      title: "Wolf Play",
      playwright: "Hansol Jung",
      theater: "The Spot",
      director: "Kevin Wade",
      image: "/productions/wolf-play.webp"
    },
    {
      title: "Wolf Play",
      playwright: "Hansol Jung",
      theater: "The Spot",
      director: "Kevin Wade",
      image: "/productions/wolf-play-2.webp"
    },
    {
      title: "Sweat",
      playwright: "Lynn Nottage",
      theater: "Boise Contemporary Theater",
      director: "Stefan Novinski",
      image: "/productions/sweat.webp"
    },
    {
      title: "Sweat",
      playwright: "Lynn Nottage",
      theater: "Boise Contemporary Theater",
      director: "Stefan Novinski",
      image: "/productions/sweat-2.webp"
    },
    {
      title: "Blood Wedding",
      playwright: "Federico García Lorca",
      theater: "Rutgers Mason Gross School of the Arts",
      director: "Matt Dickson",
      image: "/productions/blood-wedding.webp"
    },
    {
      title: "Blood Wedding",
      playwright: "Federico García Lorca",
      theater: "Rutgers Mason Gross School of the Arts",
      director: "Matt Dickson",
      image: "/productions/blood-wedding-2.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0e13] text-[#e8e8e8]">
    {/* Lightbox for expanded photos */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 text-white text-4xl hover:text-[#c4a574] z-10"
              onClick={() => setLightboxImage(null)}
            >
              ×
            </button>
            
            {/* Image */}
            <div className="relative w-full h-full">
              <Image
                src={lightboxImage}
                alt="Production photo expanded"
                fill
                className="object-contain"
              />
              
              {/* Production info overlay - visible in lightbox */}
              {productions.find(p => p.image === lightboxImage) && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-medium mb-2 text-white">
                    {productions.find(p => p.image === lightboxImage)?.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-300 mb-2">
                    By {productions.find(p => p.image === lightboxImage)?.playwright}
                  </p>
                  <p className="text-sm md:text-base text-gray-400">
                    {productions.find(p => p.image === lightboxImage)?.theater}
                  </p>
                  <p className="text-sm md:text-base text-gray-400">
                    Directed by {productions.find(p => p.image === lightboxImage)?.director}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0e13]/95 backdrop-blur-sm border-b border-[#8b6f47]/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 text-sm flex-1">
              <a href="#about" className="text-[#c4a574] hover:text-[#d4b584] transition-colors">About</a>
              <a href="#upcoming" className="text-[#c4a574] hover:text-[#d4b584] transition-colors">Upcoming</a>
              <a href="#work" className="text-[#c4a574] hover:text-[#d4b584] transition-colors">Performance</a>
              <a href="#beyond" className="text-[#c4a574] hover:text-[#d4b584] transition-colors">Beyond</a>
              <a href="#contact" className="text-[#c4a574] hover:text-[#d4b584] transition-colors">Connect</a>
            </div>

            {/* Desktop Download Buttons */}
            <div className="hidden md:flex gap-4 text-sm">
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-[#8b6f47] text-white hover:bg-[#9b7f57] rounded font-medium transition-all shadow-lg hover:shadow-xl"
              >
                Resume
              </a>
              <a 
                href="/headshot.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-[#8b6f47] text-white hover:bg-[#9b7f57] rounded font-medium transition-all shadow-lg hover:shadow-xl"
              >
                Headshot
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button 
              className="md:hidden flex flex-col gap-1.5 z-[70]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-[#c4a574] transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#c4a574] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#c4a574] transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-In Menu */}
      {mobileMenuOpen && (
        <>
          {/* Dark overlay */}
          <div 
            className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-[60]"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Slide-in menu panel */}
          <div className="md:hidden fixed top-0 right-0 bottom-0 w-80 bg-[#0f0e13]/75 backdrop-blur-lg z-[65] shadow-2xl overflow-y-auto border-l border-[#8b6f47]/30">
            <div className="flex flex-col pt-24 px-8 pb-8">
              <div className="flex flex-col gap-6">
                <a 
                  href="#about" 
                  className="text-xl text-[#c4a574] hover:text-[#d4b584] transition-colors py-2 border-b border-[#8b6f47]/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#upcoming" 
                  className="text-xl text-[#c4a574] hover:text-[#d4b584] transition-colors py-2 border-b border-[#8b6f47]/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Upcoming
                </a>
                <a 
                  href="#work" 
                  className="text-xl text-[#c4a574] hover:text-[#d4b584] transition-colors py-2 border-b border-[#8b6f47]/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Performance
                </a>
                <a 
                  href="#beyond" 
                  className="text-xl text-[#c4a574] hover:text-[#d4b584] transition-colors py-2 border-b border-[#8b6f47]/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Beyond
                </a>
                <a 
                  href="#contact" 
                  className="text-xl text-[#c4a574] hover:text-[#d4b584] transition-colors py-2 border-b border-[#8b6f47]/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Connect
                </a>
              </div>
              
              <div className="flex flex-col gap-3 pt-8">
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#8b6f47] text-white rounded text-center font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resume
                </a>
                <a 
                  href="/headshot.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#8b6f47] text-white rounded text-center font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Headshot
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 text-[#e8d4b8]">
                Jovani Andrés<br />Zambrano
              </h1>
              <p className="text-lg md:text-xl text-[#c4a574] mb-6 md:mb-8 font-light tracking-wide">
                Actor | Theater Maker | AEA
              </p>
              <p className="text-base md:text-lg leading-relaxed text-[#d0d0d0]">
                New York roots, Boise home. Actor and theater maker committed to work that asks important questions and builds community through shared stories.
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden border-2 border-[#8b6f47]/30 shadow-2xl">
                <Image
                  src="/hero/hero.webp"
                  alt="Jovani Zambrano"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <p className="text-xs text-[#999] mt-2 text-right">Photo by Ted Ely</p>
            </div>
          </div>
        </div>
      </section>

     {/* About Section - NO TITLE */}
      <section id="about" className="py-16 md:py-20 px-6 bg-gradient-to-b from-[#1a1520]/50 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 text-base md:text-lg leading-relaxed text-[#d0d0d0]">
            <p>
              Trained at Rutgers Mason Gross School of the Arts, Jovani performed at Shakespeare's Globe in London in As You Like It and Julius Caesar, where he participated in a workshop with Mark Rylance. He's appeared at Theater for the New City, Hudson Valley Shakespeare, Alley Repertory Theater, Boise Contemporary Theater, and The Spot, with a favorite role being Oscar in Sweat by Lynn Nottage. He gravitates toward characters wrestling with internal conflicts—often the underdogs or the least expected.
            </p>
            <p>
              Beyond acting, Jovani embraces the full scope of theater-making as a sound designer, producer, director, and marketer. Alongside his wife, he co-founded Little Branch, a theater company dedicated to thought-provoking, community-driven storytelling that creates meaningful connections both on and off the stage.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Section */}
      <section id="upcoming" className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 md:mb-8 text-[#e8d4b8]">Upcoming Next</h2>
          <div className="bg-[#1a1520]/30 rounded-lg p-6 md:p-8 border border-[#8b6f47]/30 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 relative flex-shrink-0">
                <Image
                  src="/logos/lb-logo.png"
                  alt="Little Branch Theater"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium text-[#e8d4b8]">Little Branch Theater</h3>
                <p className="text-sm md:text-base text-[#c4a574]">Co-Founder & Co-Director</p>
              </div>
            </div>
           <p className="text-[#d0d0d0] leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              Little Branch is excited to share that we successfully completed our inaugural production! Honey Brown Eyes by Stefanie Zadravec was a meaningful debut for our company and resonated deeply with Boise's refugee community.
            </p>
            <p className="text-[#d0d0d0] leading-relaxed mb-6 text-sm md:text-base">
              Now we're thrilled to announce our second production: Sanctuary City by Martyna Majok, running May 7-17, 2026. This powerful play continues our mission of asking important and relevant questions that challenge our community in thoughtful ways.
            </p>
            <Link 
              href="https://www.littlebranchtheater.org" 
              target="_blank"
              className="inline-block px-6 py-3 border-2 border-[#8b6f47] text-[#c4a574] hover:bg-[#8b6f47] hover:text-white rounded transition-all shadow-lg hover:shadow-xl font-medium text-sm md:text-base"
            >
              Visit Little Branch Theater
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-20 px-6 bg-gradient-to-b from-transparent to-[#1a1520]/50">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-[#1a1520]/30 rounded-lg border-2 border-[#8b6f47]/30 overflow-hidden shadow-xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/aJ0cD1Nbj20"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Selected Work Section - NO TITLE */}
      <section id="work" className="py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {productions.map((production, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
                onClick={() => setLightboxImage(production.image)}
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-2 border-transparent group-hover:border-[#8b6f47] transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                  <Image
                    src={production.image}
                    alt={`${production.title} production photo`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Information overlay - appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-base md:text-lg font-medium mb-1 text-white">{production.title}</h3>
                    <p className="text-sm text-gray-300 mb-1">By {production.playwright}</p>
                    <p className="text-xs text-gray-400">{production.theater}</p>
                    <p className="text-xs text-gray-400">Directed by {production.director}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the Stage - Combined with Reflections */}
      <section id="beyond" className="py-16 md:py-20 px-6 bg-gradient-to-b from-[#1a1520]/50 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-[#e8d4b8]">Beyond the Stage</h2>
          
          {/* Reflection Card */}
          <div className="bg-[#1a1520]/30 rounded-lg p-6 border border-[#8b6f47]/30 mb-8">
            <h3 className="text-lg md:text-xl font-medium text-[#e8d4b8] mb-2">Learning DIY Theater</h3>
            <p className="text-sm text-[#999] mb-4">March 2026</p>
            <p className="text-[#d0d0d0] leading-relaxed">
              Building a theater from the ground up. This includes learning how to market, how to budget, and how to literally build. Currently constructing the set of Sanctuary City in our own backyard—a hands-on education in every facet of theater-making.
            </p>
          </div>

          {/* Current Interests */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-[#1a1520]/30 rounded-lg p-4 border border-[#8b6f47]/30 text-center">
              <div className="text-2xl mb-2">🎭</div>
              <p className="text-xs text-[#c4a574] mb-1 uppercase tracking-wide">Next Up</p>
              <p className="text-sm text-[#e8e8e8]">Performing in Sanctuary City</p>
            </div>
            
            <div className="bg-[#1a1520]/30 rounded-lg p-4 border border-[#8b6f47]/30 text-center">
              <div className="text-2xl mb-2">📖</div>
              <p className="text-xs text-[#c4a574] mb-1 uppercase tracking-wide">Reading</p>
              <p className="text-sm text-[#e8e8e8]">Crime and Punishment</p>
            </div>
            
            <div className="bg-[#1a1520]/30 rounded-lg p-4 border border-[#8b6f47]/30 text-center">
              <div className="text-2xl mb-2">♟️</div>
              <p className="text-xs text-[#c4a574] mb-1 uppercase tracking-wide">Chess</p>
              <p className="text-sm text-[#e8e8e8]">Elo 879</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 md:mb-8 text-[#e8d4b8] text-center">Let's Connect</h2>
          

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <div className="bg-[#1a1520]/30 rounded-lg p-6 border border-[#8b6f47]/30">
              <h3 className="text-xl font-medium text-[#e8d4b8] mb-4">Send a Message</h3>
              <form 
                action="https://formspree.io/f/xyknojvp" 
                method="POST"
                className="space-y-4"
              >
                {/* Hidden fields for Formspree */}
                <input type="hidden" name="_next" value="https://jovanizambrano.com/#contact" />
                <input type="hidden" name="_subject" value="New contact form submission from jovanizambrano.com" />
                <input type="hidden" name="_captcha" value="true" />
                
                <div>
                  <label htmlFor="name" className="block text-sm text-[#c4a574] mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-[#0f0e13]/50 border border-[#8b6f47]/30 rounded text-[#e8e8e8] focus:outline-none focus:border-[#8b6f47] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm text-[#c4a574] mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-[#0f0e13]/50 border border-[#8b6f47]/30 rounded text-[#e8e8e8] focus:outline-none focus:border-[#8b6f47] transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm text-[#c4a574] mb-2">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0f0e13]/50 border border-[#8b6f47]/30 rounded text-[#e8e8e8] focus:outline-none focus:border-[#8b6f47] transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 border-2 border-[#8b6f47] text-[#c4a574] hover:bg-[#8b6f47] hover:text-white rounded font-medium transition-all shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div className="bg-[#1a1520]/30 rounded-lg p-6 border border-[#8b6f47]/30">
              <h3 className="text-xl font-medium text-[#e8d4b8] mb-6">Connect on Social</h3>
              <a 
                href="https://www.instagram.com/jovani_witha_j" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 border-2 border-[#8b6f47] text-[#c4a574] hover:bg-[#8b6f47] hover:text-white rounded transition-all shadow-lg hover:shadow-xl font-medium"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-6 border-t border-[#8b6f47]/20">
        <div className="max-w-7xl mx-auto text-center text-[#b8b8b8]">
          <p className="text-xs md:text-sm">© 2026 Jovani Andrés Zambrano</p>
        </div>
      </footer>
    </div>
  );
}