import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Brain,
  Workflow,
  Bot,
  BarChart3,
  Code2,
  Target,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const services = [
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Connect your apps and automate repetitive tasks using Make.com and n8n. Build powerful workflows that sync data, send notifications, and handle processes without manual intervention.',
    features: ['Make.com Scenarios', 'n8n Workflows', 'API Integrations']
  },
  {
    icon: Bot,
    title: 'Conversational AI',
    description: 'Design intelligent chatbots and voice assistants with Voiceflow. Create natural conversation flows that handle customer inquiries, qualify leads, and provide support at scale.',
    features: ['Voiceflow Design', 'Multi-Channel Bots', 'Intent Recognition']
  },
  {
    icon: Code2,
    title: 'Backend Development',
    description: 'Build secure and scalable backends with Supabase. Set up authentication, databases, real-time subscriptions, and storage solutions that power your automated systems.',
    features: ['Supabase Setup', 'Database Design', 'Auth & Security']
  },
  {
    icon: BarChart3,
    title: 'Data Integration',
    description: 'Sync data across platforms and create unified views of your business. Connect CRMs, spreadsheets, databases, and third-party APIs to keep information flowing smoothly.',
    features: ['CRM Sync', 'Data Pipelines', 'Report Automation']
  },
  {
    icon: Brain,
    title: 'Custom Solutions',
    description: 'Build tailored automation that fits your unique business needs. Combine multiple tools and platforms to create end-to-end systems that solve specific challenges.',
    features: ['Custom Workflows', 'System Integration', 'Process Optimization']
  },
  {
    icon: Target,
    title: 'Consulting & Training',
    description: 'Get expert guidance on automation strategy and tool selection. Learn best practices through hands-on training sessions that help your team build and maintain workflows independently.',
    features: ['Strategy Planning', 'Tool Selection', 'Team Training']
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="container mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 mb-4">
          Our Services
        </Badge>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
          Automation Services
          <span className="block text-[#D4AF37]">
            That Deliver Results
          </span>
        </h2>
        <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          We build practical automation solutions using proven tools and platforms
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className="group bg-white/5 border-0 hover:border hover:border-[#D4AF37]/50 transition-all duration-250 hover:shadow-lg hover:shadow-[#D4AF37]/20 backdrop-blur-sm p-6"
          >
            <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-250">
              <service.icon className="w-6 h-6 text-[#D4AF37]" aria-hidden="true" />
            </div>

            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#D4AF37] transition-colors duration-250">
              {service.title}
            </h3>

            <p className="text-white/70 mb-4 leading-relaxed text-base">
              {service.description}
            </p>

            <div className="space-y-2 mb-4">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-sm text-white/50">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-[#D4AF37] flex-shrink-0" aria-hidden="true" />
                  {feature}
                </div>
              ))}
            </div>

            <Button
              variant="ghost"
              className="mt-4 w-full bg-transparent border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#D4AF37] group/btn"
            >
              Learn More
              <ChevronRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" aria-hidden="true" />
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
