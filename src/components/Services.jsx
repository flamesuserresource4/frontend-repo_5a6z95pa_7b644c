import { CheckCircle2, BadgeHelp, FileText, Briefcase, Plane, UserRound } from 'lucide-react';

const services = [
  {
    title: 'University Shortlisting & Application',
    icon: CheckCircle2,
    desc: 'Personalized course matching and end‑to‑end application support to top universities.',
  },
  {
    title: 'Visa Assistance',
    icon: BadgeHelp,
    desc: 'Expert guidance for Schengen, Tier‑4, and F‑1 visas with documentation checks.',
  },
  {
    title: 'SOP / LOR Guidance',
    icon: FileText,
    desc: 'Impactful narratives and templates that reflect your achievements and goals.',
  },
  {
    title: 'Part‑Time Job & Accommodation',
    icon: Briefcase,
    desc: 'On‑ground insights to help you settle quickly with work and housing options.',
  },
  {
    title: 'Pre‑Departure Orientation',
    icon: Plane,
    desc: 'Culture, finance, and travel checklists including airport pickup coordination.',
  },
  {
    title: 'Career Mentorship',
    icon: UserRound,
    desc: 'Ongoing guidance from our global alumni network to shape your path.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366]">Services Tailored for Your Success</h2>
          <p className="mt-2 text-[#003366]/70">Reliable, transparent, and personalized — blending German excellence with global opportunity.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
              <div className="h-10 w-10 rounded-md bg-[#E6F7FF] text-[#009FE3] flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#003366]">{title}</h3>
              <p className="mt-1 text-sm text-[#003366]/70">{desc}</p>
              <a href="#contact" className="mt-4 inline-block text-[#009FE3] font-semibold hover:underline">Get Guidance</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
