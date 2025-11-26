import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="container mx-auto px-6 py-24">
      <Card className="relative overflow-hidden bg-[#D4AF37]/10 border border-[#D4AF37]/30 p-12 text-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Automate Your Future?
          </h2>
          <p className="text-base md:text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of companies already leveraging AI to transform their operations
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#D4AF37] hover:bg-[#FFEB3B] text-[#0A0A0A] font-semibold text-base md:text-lg px-8 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 active:scale-98 w-full sm:w-auto"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] text-base md:text-lg px-8 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 w-full sm:w-auto"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}
