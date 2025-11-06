import { useMemo } from 'react';
import { GraduationCap, Globe, ArrowRight, ShieldCheck } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Services', href: '#services' },
  { label: 'Success Stories', href: '#success' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const heroBg = useMemo(
    () =>
      'https://images.unsplash.com/photo-1546538994-6e0b987b3c48?q=80&w=2069&auto=format&fit=crop',
    []
  );

  return (
    <header id="home" className="relative min-h-screen bg-[#003366] text-white">
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 text-[#003366] border-b border-white/20">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2 font-semibold">
            <div className="h-9 w-9 rounded-md bg-[#009FE3] flex items-center justify-center text-white">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="text-[#003366] tracking-tight">i5 Overseas Consultancy</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium hover:text-[#009FE3] transition-colors">
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-[#009FE3] px-4 py-2 text-white text-sm font-semibold shadow hover:bg-[#008ccc] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#009FE3]"
            >
              Book Free Consultation
            </a>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <img
          src={heroBg}
          alt="Berlin cityscape with students"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#003366]/70 to-[#003366] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20">
              <ShieldCheck className="h-4 w-4 text-[#00D1FF]" />
              Trusted by 1000+ global students
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Headquartered in Germany — Your Trusted Partner for Global Education Success.
            </h1>
            <p className="mt-4 text-white/90 text-lg md:text-xl">
              From university admissions to visa and part-time support, i5 Overseas helps you study abroad with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#009FE3] px-5 py-3 text-white font-semibold shadow hover:bg-[#008ccc]"
              >
                Apply Now <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 text-white font-semibold ring-1 ring-white/30 hover:bg-white/20"
              >
                Book Free Consultation
              </a>
              <a
                href="#destinations"
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-[#003366] font-semibold hover:bg-gray-100"
              >
                <Globe className="h-4 w-4" /> Explore Destinations
              </a>
            </div>

            {/* Country quick cards */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {[
                { flag: '🇩🇪', name: 'Germany' },
                { flag: '🇺🇸', name: 'USA' },
                { flag: '🇬🇧', name: 'UK' },
                { flag: '🇮🇪', name: 'Ireland' },
                { flag: '🇮🇹', name: 'Italy' },
              ].map((c) => (
                <a
                  key={c.name}
                  href="#destinations"
                  className="rounded-lg bg-white/10 ring-1 ring-white/20 p-3 text-white hover:bg-white/20"
                >
                  <div className="text-2xl">{c.flag}</div>
                  <div className="text-sm mt-1 font-medium">{c.name}</div>
                </a>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-baseline gap-2"><span className="text-3xl font-bold">1000+</span><span className="text-sm">Successful Students</span></div>
              <div className="flex items-baseline gap-2"><span className="text-3xl font-bold">25+</span><span className="text-sm">Partner Universities</span></div>
              <div className="flex items-baseline gap-2"><span className="text-3xl font-bold">98%</span><span className="text-sm">Visa Success</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA strip */}
      <div className="bg-[#009FE3]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between text-white">
          <p className="text-center text-sm sm:text-base font-medium">Your Study Journey Starts with i5 Overseas.</p>
          <a href="#contact" className="mt-2 sm:mt-0 inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-[#003366] font-semibold hover:bg-gray-100">
            Apply Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
