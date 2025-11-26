import { Card } from '@/components/ui/card';
import { Zap, Target, Rocket, BarChart3 } from 'lucide-react';

export function StatsSection() {
  return (
    <section className="container mx-auto px-6 py-24">
      <Card className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 p-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <Zap className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" aria-hidden="true" />
            <div className="text-4xl font-bold text-[#D4AF37] mb-2">5x</div>
            <div className="text-white/70">Faster Processes</div>
          </div>
          <div>
            <Target className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" aria-hidden="true" />
            <div className="text-4xl font-bold text-[#D4AF37] mb-2">60%</div>
            <div className="text-white/70">Time Saved</div>
          </div>
          <div>
            <Rocket className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" aria-hidden="true" />
            <div className="text-4xl font-bold text-[#D4AF37] mb-2">1-2 Weeks</div>
            <div className="text-white/70">Typical Timeline</div>
          </div>
          <div>
            <BarChart3 className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" aria-hidden="true" />
            <div className="text-4xl font-bold text-[#D4AF37] mb-2">100%</div>
            <div className="text-white/70">Client Retention</div>
          </div>
        </div>
      </Card>
    </section>
  );
}
