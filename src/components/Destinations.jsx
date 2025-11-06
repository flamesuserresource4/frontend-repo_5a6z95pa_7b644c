import { MapPin, Plane } from 'lucide-react';

const destinations = [
  {
    country: 'Germany',
    emoji: '🇩🇪',
    image:
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=2069&auto=format&fit=crop',
    points: ['Free/low-cost education', 'Strong job market', 'Global exposure'],
    highlight: true,
  },
  {
    country: 'USA',
    emoji: '🇺🇸',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2069&auto=format&fit=crop',
    points: ['World-class research', 'STEM OPT pathways', 'Vibrant campus life'],
  },
  {
    country: 'UK',
    emoji: '🇬🇧',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2069&auto=format&fit=crop',
    points: ['1-yr Masters', 'Historic universities', 'Post-study work'],
  },
  {
    country: 'Ireland',
    emoji: '🇮🇪',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2069&auto=format&fit=crop',
    points: ['Tech hub', 'Friendly culture', '2-yr Graduate Route'],
  },
  {
    country: 'Italy',
    emoji: '🇮🇹',
    image:
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2069&auto=format&fit=crop',
    points: ['Scholarships', 'Rich culture', 'English-taught programs'],
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366]">Top Study Destinations</h2>
            <p className="mt-2 text-[#003366]/70">Germany is our HQ and primary hub — explore global opportunities.</p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-md bg-[#009FE3] px-4 py-2 text-white font-semibold hover:bg-[#008ccc]"
          >
            Find My Perfect Country <Plane className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <div key={d.country} className={`group overflow-hidden rounded-xl ring-1 ring-gray-200 ${d.highlight ? 'border-2 border-[#009FE3]' : ''}`}>
              <div className="relative h-48">
                <img src={d.image} alt={d.country} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/0" />
                <div className="absolute bottom-3 left-3 text-white text-lg font-semibold">
                  <span className="mr-2 text-2xl">{d.emoji}</span>
                  {d.country}
                </div>
              </div>
              <div className="p-4">
                <ul className="text-sm text-[#003366]/80 space-y-2">
                  {d.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#009FE3]" /> {p}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-4 inline-block text-[#009FE3] font-semibold hover:underline">
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#009FE3] px-4 py-3 text-white font-semibold hover:bg-[#008ccc]"
          >
            Find My Perfect Country <Plane className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
