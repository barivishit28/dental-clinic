import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
} from "lucide-react"
import { useState } from "react"

function Contact() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    concern: "",
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleWhatsApp = (e) => {
    e.preventDefault()

    const message = `Hello SmileCare Dental Clinic,

Name: ${form.name}
Age: ${form.age}
Gender: ${form.gender}
Dental Concern: ${form.concern}

I would like to book an appointment.`

    const whatsappNumber = "917276639836"

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  return (
    <section
      id="contact"
      className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-600 sm:text-sm">
            Contact Us
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Ready for a healthier
            <span className="text-sky-600"> smile?</span>
          </h2>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10 lg:grid-cols-2 lg:gap-8">

          {/* WhatsApp Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">

            <div className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600">
                <MessageCircle size={19} />
              </div>

              <h3 className="mt-3 text-base font-semibold text-slate-900">
                Book via WhatsApp
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Share your details and we'll get back to you.
              </p>
            </div>

            <form
              onSubmit={handleWhatsApp}
              className="mt-6 space-y-3"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              />

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  min="1"
                  max="120"
                  value={form.age}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />

                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                >
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <textarea
                name="concern"
                placeholder="Your dental concern"
                value={form.concern}
                onChange={handleChange}
                required
                rows="3"
                className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                <MessageCircle size={17} />
                Continue on WhatsApp
              </button>
            </form>

            <a
              href="tel:+917276639836"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
            >
              <Phone size={17} />
              Call Now
            </a>
          </div>

          {/* Location + Map */}
          <div className="space-y-4">

            <div className="grid grid-cols-2 gap-3">

              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                <MapPin className="mx-auto text-sky-600" size={19} />

                <h3 className="mt-3 text-sm font-semibold text-slate-900">
                  Visit Us
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  123 Smile Street,
                  <br />
                  Mumbai, Maharashtra
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                <Clock className="mx-auto text-sky-600" size={19} />

                <h3 className="mt-3 text-sm font-semibold text-slate-900">
                  Opening Hours
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Mon – Sat
                  <br />
                  9:00 AM – 7:00 PM
                </p>
              </div>

            </div>

            {/* Map */}
            <div className="h-[280px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:h-[350px]">
              <iframe
                title="SmileCare Dental Clinic Location"
                src="https://www.google.com/maps?q=Mumbai,Maharashtra&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact