'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Rocket, Bot } from 'lucide-react';

interface HeroSectionProps {
  mounted: boolean;
}

export function HeroSection({ mounted }: HeroSectionProps) {
  return (
    <section className="container mx-auto px-6 pt-20 pb-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className={`space-y-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37]/20 transition-colors duration-200">
            <Sparkles className="w-3 h-3 mr-1" aria-hidden="true" />
            Next-Gen AI Solutions
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Automate Your
            <span className="block text-[#D4AF37]">
              Future with AI
            </span>
          </h1>

          <p className="text-base md:text-lg text-white/70 leading-relaxed">
            Transform your business with cutting-edge AI automation. We build intelligent systems that work 24/7,
            scale infinitely, and deliver results beyond human capability.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-[#D4AF37] hover:bg-[#FFEB3B] text-[#0A0A0A] font-semibold text-base md:text-lg px-8 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 active:scale-98"
            >
              Start Your Project
              <Rocket className="ml-2 w-5 h-5" aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] text-base md:text-lg px-8 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2"
            >
              View Case Studies
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:space-x-8 space-y-4 sm:space-y-0 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D4AF37]">500+</div>
              <div className="text-xs text-white/50 uppercase">Projects Deployed</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-white/10"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D4AF37]">98%</div>
              <div className="text-xs text-white/50 uppercase">Client Satisfaction</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-white/10"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D4AF37]">24/7</div>
              <div className="text-xs text-white/50 uppercase">AI Operations</div>
            </div>
          </div>
        </div>

        <div className={`relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFEB3B]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <ThreeDCube />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ThreeDCube() {
  return (
    <div className="relative w-64 h-64 animate-float">
      <div className="absolute inset-0 perspective-1000">
        <div className="relative w-full h-full animate-spin-slow preserve-3d">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/30 to-[#FFEB3B]/30 border border-[#D4AF37]/50 backdrop-blur-sm rounded-lg rotate-x-45 rotate-y-45"></div>
          <div className="absolute inset-4 bg-gradient-to-br from-[#FFEB3B]/20 to-[#D4AF37]/20 border border-[#FFEB3B]/50 backdrop-blur-sm rounded-lg rotate-x-30 rotate-y-60"></div>
          <div className="absolute inset-8 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFEB3B]/20 border border-[#D4AF37]/50 backdrop-blur-sm rounded-lg rotate-x-60 rotate-y-30"></div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <Bot className="w-20 h-20 text-[#D4AF37] animate-pulse" aria-hidden="true" />
      </div>
    </div>
  );
}
