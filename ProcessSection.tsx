import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const steps = [
  {
    number: 1,
    title: 'Discovery Call',
    subtitle: 'Understanding Your Needs',
    description: 'We discuss your current processes, pain points, and goals to identify the best automation opportunities for your business.'
  },
  {
    number: 2,
    title: 'Solution Mapping',
    subtitle: 'Planning the Workflow',
    description: 'We map out your automation workflow, select the right tools, and design the data flow between your systems and applications.'
  },
  {
    number: 3,
    title: 'Build & Test',
    subtitle: 'Creating Your Automation',
    description: 'We build your workflows, configure integrations, and thoroughly test everything to ensure reliable operation before going live.'
  },
  {
    number: 4,
    title: 'Launch & Support',
    subtitle: 'Deployment and Training',
    description: 'We deploy your automation, provide training on how it works, and offer ongoing support to optimize and expand as needed.'
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="container mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 mb-4">
          Our Process
        </Badge>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
          From Idea to
          <span className="block text-[#D4AF37]">
            Implementation
          </span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-16 -right-3 w-6 h-0.5 bg-[#D4AF37]/30 z-0"></div>
            )}
            <Card className="relative bg-white/5 border-0 hover:border-b-2 hover:border-b-[#D4AF37] transition-all duration-250 p-6 h-full">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mb-4 text-xl font-bold text-[#0A0A0A]">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-1 text-white">{step.title}</h3>
              <p className="text-sm text-[#D4AF37] mb-3">{step.subtitle}</p>
              <p className="text-white/70 leading-relaxed text-base">{step.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
