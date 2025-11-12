"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on a standalone page (not homepage)
  const isStandalonePage = pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash navigation with navbar offset
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const sectionId = hash.substring(1);
      const section = document.getElementById(sectionId);

      if (section) {
        // Use setTimeout to ensure DOM is ready
        setTimeout(() => {
          const navbarHeight = 80; // h-20 = 80px
          const elementPosition = section.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 0);
      }
    };

    // Handle initial hash on page load
    handleHashChange();

    // Handle hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Activities", href: "/#activities" },
    { label: "Impact", href: "/#impact" },
    { label: "Programs", href: "/#programs" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <Image
              src="/aahred_logo.png"
              alt="AAHRED"
              width={180}
              height={50}
              className="h-12 w-auto transition-all"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-medium text-gray-700 transition-colors hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-2.5 rounded-full font-semibold transition-all bg-blue-600 text-white hover:bg-blue-700"
            >
              Get Involved
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors text-gray-900 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-6 py-3 bg-blue-600 text-white text-center rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Involved
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}