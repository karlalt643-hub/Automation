import { CircuitBoard } from 'lucide-react';

export function Footer() {
  return (
    <footer className="container mx-auto px-6 py-12 border-t border-white/10">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-4">
            <CircuitBoard className="w-6 h-6 text-[#D4AF37]" aria-hidden="true" />
            <span className="text-xl font-bold text-white">AutomateFlow</span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed">
            Practical automation solutions for modern businesses
          </p>
        </div>

        <div className="flex-1">
          <h4 className="font-bold text-white mb-4">Services</h4>
          <ul className="space-y-2 text-white/50 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-[#D4AF37] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded"
              >
                Workflow Automation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#D4AF37] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded"
              >
                Chatbot Development
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#D4AF37] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded"
              >
                Consulting
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h4 className="font-bold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-white/50 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-[#D4AF37] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#D4AF37] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#D4AF37] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h4 className="font-bold text-white mb-4">Legal</h4>
          <ul className="space-y-2 text-white/50 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-[#D4AF37] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#D4AF37] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#D4AF37] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded"
              >
                Security
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 mt-8 text-center text-white/50 text-sm">
        © 2025 AutomateFlow. All rights reserved.
      </div>
    </footer>
  );
}
