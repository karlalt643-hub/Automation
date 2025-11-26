'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CircuitBoard, ArrowRight, Menu, X } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-[#D4AF37] rounded-lg rotate-6 blur-sm"></div>
            <div className="relative bg-[#D4AF37] rounded-lg p-2 flex items-center justify-center">
              <CircuitBoard className="w-6 h-6 text-[#0A0A0A]" aria-hidden="true" />
            </div>
          </div>
          <span className="text-2xl font-bold text-[#D4AF37]">
            AutomateFlow
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-white/80 hover:text-[#D4AF37] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded"
          >
            Services
          </a>
          <a
            href="#tech"
            className="text-white/80 hover:text-[#D4AF37] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded"
          >
            Technology
          </a>
          <a
            href="#process"
            className="text-white/80 hover:text-[#D4AF37] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded"
          >
            Process
          </a>
          <Button className="bg-[#D4AF37] hover:bg-[#FFEB3B] text-[#0A0A0A] font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 active:scale-98 active:translate-y-0.5">
            Get Started <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <button
          className="md:hidden text-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-6 space-y-4 pb-4">
          <a
            href="#services"
            className="block text-white/80 hover:text-[#D4AF37] transition-colors duration-150 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#tech"
            className="block text-white/80 hover:text-[#D4AF37] transition-colors duration-150 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Technology
          </a>
          <a
            href="#process"
            className="block text-white/80 hover:text-[#D4AF37] transition-colors duration-150 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Process
          </a>
          <Button className="w-full bg-[#D4AF37] hover:bg-[#FFEB3B] text-[#0A0A0A] font-semibold transition-all duration-200">
            Get Started <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      )}
    </nav>
  );
}
