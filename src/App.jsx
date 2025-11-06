import Header from './components/Header';
import Destinations from './components/Destinations';
import Services from './components/Services';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#003366]">
      <Header />

      {/* About Us */}
      <section id="about" className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Global Roots, German Excellence.</h2>
              <p className="mt-3 text-[#003366]/80">
                i5 Overseas Consultancy was founded in Germany to connect ambitious students from India and around the world to top universities across Europe and beyond. Our mission is to empower students with reliable, transparent, and personalized study‑abroad solutions.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {["Visa Expertise", "Career Mentorship", "Affordable Guidance", "Global Alumni Network"].map((item) => (
                  <div key={item} className="rounded-lg bg-white p-4 ring-1 ring-gray-200">
                    <p className="text-sm font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-72 md:h-full min-h-[280px]">
              <img
                src="https://images.unsplash.com/photo-1543349689-9a4d426bee8e?q=80&w=1974&auto=format&fit=crop"
                alt="Brandenburg Gate with students"
                className="absolute inset-0 h-full w-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#003366]/0 to-[#009FE3]/20" />
            </div>
          </div>
        </div>
      </section>

      <Destinations />
      <Services />

      {/* Success Stories */}
      <section id="success" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">From Hyderabad to Hamburg — and Beyond.</h2>
            <p className="mt-2 text-[#003366]/70">Real journeys, real outcomes — powered by our trusted processes.</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Aarav • Germany',
                img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1887&auto=format&fit=crop',
                text: 'Admitted to TU Berlin with scholarship. Visa approved in 3 weeks.',
              },
              {
                name: 'Sanya • UK',
                img: 'https://images.unsplash.com/photo-1554931670-0e530c722e2a?q=80&w=1887&auto=format&fit=crop',
                text: 'Fast‑track 1‑yr Masters and Graduate Route support secured.',
              },
              {
                name: 'Rahul • USA',
                img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop',
                text: 'STEM program admit with OPT pathway and on‑campus job help.',
              },
            ].map((s) => (
              <div key={s.name} className="rounded-xl overflow-hidden ring-1 ring-gray-200">
                <div className="relative h-48">
                  <img src={s.img} alt={s.name} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
                </div>
                <div className="p-4">
                  <p className="text-sm text-[#003366]/80">{s.text}</p>
                  <p className="mt-2 text-[#003366] font-semibold">{s.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-extrabold text-[#003366]">98%</p>
              <p className="text-sm text-[#003366]/70">Visa Success</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-[#003366]">1000+</p>
              <p className="text-sm text-[#003366]/70">Students Placed</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-[#003366]">25</p>
              <p className="text-sm text-[#003366]/70">Partner Universities</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      {/* Footer */}
      <footer className="bg-[#003366] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} i5 Overseas Consultancy. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
