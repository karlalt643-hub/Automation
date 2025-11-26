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
    icon: Brain,
    title: 'AI Model Development',
    description: 'Reduce development time by 60% with custom machine learning models trained on your data. Our AI solutions deliver actionable insights and automation tailored specifically to your business needs.',
    features: ['Neural Networks', 'Deep Learning', 'NLP Processing']
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Cut operational costs by 70% through end-to-end workflow automation. Eliminate repetitive manual tasks and scale your operations exponentially without adding headcount.',
    features: ['RPA Integration', 'API Orchestration', 'Smart Workflows']
  },
  {
    icon: Bot,
    title: 'Intelligent Chatbots',
    description: 'Achieve 85% query resolution with AI-powered conversational agents. Our chatbots understand context, learn from every interaction, and provide human-like support around the clock.',
    features: ['24/7 Support', 'Multi-Language', 'Context Aware']
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Improve forecast accuracy by 40% using AI-powered data analysis. Stay ahead of market trends, optimize critical decisions, and maintain competitive advantage through intelligent insights.',
    features: ['Data Mining', 'Forecasting', 'Real-time Insights']
  },
  {
    icon: Code2,
    title: 'Custom AI Solutions',
    description: 'Solve unique challenges with 95% accuracy through bespoke AI systems. We design and build solutions from the ground up to address your specific business requirements.',
    features: ['Full Stack', 'Cloud Native', 'Scalable Architecture']
  },
  {
    icon: Target,
    title: 'AI Consulting',
    description: 'Maximize ROI by 250% with strategic AI adoption guidance. Our experts provide implementation roadmaps, technology selection, and comprehensive strategy design tailored to your goals.',
    features: ['Strategy Design', 'Tech Audits', 'ROI Planning']
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
          AI-Powered Solutions for
          <span className="block text-[#D4AF37]">
            Every Challenge
          </span>
        </h2>
        <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          From concept to deployment, we deliver AI solutions that transform businesses
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
