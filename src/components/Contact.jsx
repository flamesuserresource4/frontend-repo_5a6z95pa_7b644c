import { useState } from 'react';
import { Send, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Your request has been submitted. Our team will contact you shortly.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366]">Ready to Begin Your Study‑Abroad Journey?</h2>
            <p className="mt-2 text-[#003366]/70">Book a free consultation or apply now — our advisors will guide you every step of the way.</p>

            <div className="mt-6 space-y-4 text-[#003366]">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#009FE3] mt-1" />
                <div>
                  <p className="font-semibold">Germany HQ</p>
                  <p className="text-sm text-[#003366]/70">Leipziger Platz, Berlin, Germany</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#009FE3] mt-1" />
                <div>
                  <p className="font-semibold">India Office (Hyderabad)</p>
                  <p className="text-sm text-[#003366]/70">+91 90000 00000</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="aspect-video w-full overflow-hidden rounded-xl ring-1 ring-gray-200">
                <iframe
                  title="Berlin Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.934423181912!2d13.375!3d52.509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c585b4b0c5%3A0xa0b0c9d3d8b!2sLeipziger%20Platz%2C%2010117%20Berlin%2C%20Germany!5e0!3m2!1sen!2sde!4v1610000000000!5m2!1sen!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-gray-50 p-6 ring-1 ring-gray-200">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#003366]">Name</label>
                  <input required type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-[#009FE3] focus:ring-[#009FE3]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#003366]">Email</label>
                  <input required type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-[#009FE3] focus:ring-[#009FE3]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#003366]">Phone</label>
                  <input required type="tel" className="mt-1 w-full rounded-md border-gray-300 focus:border-[#009FE3] focus:ring-[#009FE3]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#003366]">Preferred Country</label>
                  <select className="mt-1 w-full rounded-md border-gray-300 focus:border-[#009FE3] focus:ring-[#009FE3]">
                    <option>Germany</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Ireland</option>
                    <option>Italy</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#003366]">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-md border-gray-300 focus:border-[#009FE3] focus:ring-[#009FE3]"></textarea>
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-[#009FE3] px-5 py-3 text-white font-semibold hover:bg-[#008ccc]">
                Apply Now <Send className="h-4 w-4" />
              </button>
              {status && <p className="text-sm text-green-700 mt-2">{status}</p>}
            </form>

            {/* Floating WhatsApp */}
            <a
              href="https://wa.me/49123456789"
              className="fixed right-4 bottom-24 sm:bottom-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white font-semibold shadow-lg hover:brightness-110"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>

            {/* Mobile sticky footer */}
            <div className="fixed bottom-0 inset-x-0 sm:hidden bg-white/95 backdrop-blur border-t border-gray-200">
              <div className="mx-auto max-w-7xl px-4 py-3 grid grid-cols-3 gap-2 text-sm">
                <a href="#contact" className="text-center font-semibold text-[#003366]">Apply Now</a>
                <a href="tel:+919000000000" className="text-center font-semibold text-[#003366]">Call Us</a>
                <a href="https://wa.me/49123456789" className="text-center font-semibold text-[#25D366]">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
