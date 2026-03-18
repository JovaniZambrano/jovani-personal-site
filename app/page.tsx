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
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <Image
              src={lightboxImage}
              alt="Production photo expanded"
              fill
              className="object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-white text-4xl hover:text-[#c4a574]"
              onClick={() => setLightboxImage(null)}
            >
              ×
            </button>
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
              <a href="#videos" className="text-[#c4a574] hover:text-[#d4b584] transition-colors">Selected Work</a>
              <a href="#upcoming" className="text-[#c4a574] hover:text-[#d4b584] transition-colors">Upcoming</a>
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
          {/* Lighter overlay - more see-through */}
          <div 
            className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-[60]"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Slide-in menu panel - TRANSPARENT */}
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
                  href="#videos" 
                  className="text-xl text-[#c4a574] hover:text-[#d4b584] transition-colors py-2 border-b border-[#8b6f47]/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Selected Work
                </a>
                <a 
                  href="#upcoming" 
                  className="text-xl text-[#c4a574] hover:text-[#d4b584] transition-colors py-2 border-b border-[#8b6f47]/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Upcoming
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
                Born and raised in New York, now calling Boise home. Passionate about stories that spark conversation and challenge perspectives.
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

    {/* About Section */}
      <section id="about" className="py-16 md:py-20 px-6 bg-gradient-to-b from-[#1a1520]/50 to-transparent">
        <div className="max-w-4xl mx-auto">
          {/* <h2 className="text-3xl md:text-4xl font-serif mb-6 md:mb-8 text-[#e8d4b8]">About</h2> */}
          <div className="space-y-4 text-base md:text-lg leading-relaxed text-[#d0d0d0]">
            <p>
              Born and raised in New York, Jovani now calls Boise home, where he pursues his passion for acting and creating theater. Jovani is drawn to stories that spark conversation—ones that challenge perspectives and linger with audiences long after the curtain falls. He gravitates toward characters wrestling with internal conflicts, often the underdogs or the least expected, and brings presence and commitment to every role.
            </p>
            <p>
              In addition to acting, Jovani is embracing new creative challenges—sound designer, producer, director, marketer, and web designer—fully immersing himself in the many facets of theater-making. Alongside his wife, he co-founded Little Branch, a theater company dedicated to thought-provoking, community-driven storytelling and creating meaningful connections both on and off the stage.
            </p>
            <p>
              Jovani studied acting at Rutgers Mason Gross School of the Arts and had the incredible opportunity to perform at Shakespeare's Globe in London in As You Like It and Julius Caesar, where he also participated in a workshop with the brilliant Mark Rylance. One of his favorite roles was portraying Oscar in Sweat by Lynn Nottage. He has performed at Theater for the New City, Hudson Valley Shakespeare, Alley Repertory Theater, Boise Contemporary Theater, and The Spot.
            </p>
          </div>
        </div>
      </section>

{/* Commercial/Video Section */}
      <section id="videos" className="py-16 md:py-20 px-6">
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

      {/* Selected Work Section */}
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

      {/* Upcoming Section */}
      <section id="upcoming" className="py-16 md:py-20 px-6 bg-gradient-to-b from-transparent to-[#1a1520]/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 md:mb-8 text-[#e8d4b8]">Coming Up Next</h2>
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
  Now we're thrilled to announce our second production: Sanctuary City by Martyna Majok, running May 7-17, 2026. This powerful play continues our mission of asking important and relevant questions that challenge our community in thoughtful ways. Check out our website to follow along on our journey.
</p>
            <Link 
              href="https://www.littlebranchtheater.org" 
              target="_blank"
              className="inline-block px-6 py-3 bg-[#8b6f47] text-white hover:bg-[#9b7f57] rounded transition-all shadow-lg hover:shadow-xl font-medium text-sm md:text-base"
            >
              Visit Little Branch Theater
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 md:mb-8 text-[#e8d4b8]">Let's Connect</h2>
          <p className="text-[#b8b8b8] mb-6 md:mb-8 text-sm md:text-base">
            Follow along on Instagram for updates and behind-the-scenes moments.
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.instagram.com/jovani_witha_j" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 md:px-10 py-3 md:py-4 border-2 border-[#8b6f47] text-[#c4a574] hover:bg-[#8b6f47] hover:text-white rounded transition-all shadow-lg hover:shadow-xl font-medium text-sm md:text-lg"
            >
              Instagram
            </a>
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