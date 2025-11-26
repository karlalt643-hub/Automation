import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu } from 'lucide-react';

const technologies = [
  { name: 'Make.com', category: 'Automation' },
  { name: 'Voiceflow', category: 'Chatbot Builder' },
  { name: 'n8n', category: 'Workflow Automation' },
  { name: 'Supabase', category: 'Backend Platform' },
  { name: 'Airtable', category: 'Database' },
  { name: 'Zapier', category: 'Integration' },
  { name: 'Stripe', category: 'Payments' },
  { name: 'Twilio', category: 'Communications' },
];

export function TechStackSection() {
  return (
    <section id="tech" className="container mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 mb-4">
          Our Tools
        </Badge>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
          Powered by
          <span className="block text-[#D4AF37]">
            Proven Platforms
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <Card
            key={index}
            className="bg-white/5 border-0 hover:border hover:border-[#D4AF37] transition-all duration-250 p-6 text-center group hover:scale-105 focus-within:ring-2 focus-within:ring-[#D4AF37]"
          >
            <Cpu className="w-12 h-12 text-[#D4AF37] mx-auto mb-3 group-hover:rotate-180 transition-transform duration-500" aria-hidden="true" />
            <div className="font-bold text-white mb-1">{tech.name}</div>
            <div className="text-xs text-white/50">{tech.category}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}
