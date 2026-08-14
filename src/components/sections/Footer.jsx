import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react"

const links = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About Us", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
]

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">

        {/* Main */}
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="text-center sm:text-left">
            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600">
                <span className="text-lg font-semibold">
                  S
                </span>
              </div>

              <div>
                <p className="text-lg font-semibold">
                  SmileCare
                </p>

                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  Dental Clinic
                </p>
              </div>
            </a>

            <p className="mx-auto mt-4 max-w-xs text-xs leading-5 text-slate-400 sm:mx-0">
              Professional dental care focused on your comfort,
              health, and confident smile.
            </p>

            {/* WhatsApp + Call */}
            <div className="mt-5 flex justify-center gap-2 sm:justify-start">
              <a
                href="https://wa.me/917276639836"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-green-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-green-700"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>

              <a
                href="tel:+97276639836"
                className="flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2.5 text-xs font-semibold text-slate-300 transition hover:border-sky-500 hover:text-white"
              >
                <Phone size={15} />
                Call
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold">
              Quick Links
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-y-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs text-slate-400 transition hover:text-sky-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Clinic Details */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold">
              Clinic Details
            </h3>

            <div className="mt-4 space-y-4">

              <div className="flex items-start justify-center gap-3 sm:justify-start">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-sky-500"
                />

                <p className="text-xs leading-5 text-slate-400">
                  123 Smile Street,
                  <br />
                  Mumbai, Maharashtra
                </p>
              </div>

              <div className="flex items-start justify-center gap-3 sm:justify-start">
                <Clock
                  size={17}
                  className="mt-0.5 shrink-0 text-sky-500"
                />

                <p className="text-xs leading-5 text-slate-400">
                  Monday – Saturday
                  <br />
                  9:00 AM – 7:00 PM
                </p>
              </div>

              <a
                href="tel:+917276639836"
                className="flex items-center justify-center gap-3 text-xs text-slate-400 transition hover:text-white sm:justify-start"
              >
                <Phone size={17} className="text-sky-500" />
                +91 99999 99999
              </a>

            </div>
          </div>

          {/* Appointment */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold">
              Book Your Visit
            </h3>

            <p className="mt-3 text-xs leading-5 text-slate-400">
              Schedule your dental visit with our experienced team.
            </p>

            <a
              href="#contact"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-sky-500"
            >
              Book Appointment

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-9 border-t border-slate-800 pt-5 text-center sm:mt-12 sm:flex sm:items-center sm:justify-between sm:text-left">

          <p className="text-[10px] text-slate-500 sm:text-xs">
            © 2026 SmileCare Dental Clinic. All rights reserved.
          </p>

          <a
            href="#home"
            className="mt-3 inline-block text-[10px] text-slate-500 transition hover:text-sky-400 sm:mt-0 sm:text-xs"
          >
            Back to top ↑
          </a>

        </div>

      </div>
    </footer>
  )
}

export default Footer