import { ArrowRight, Phone } from "lucide-react"

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-50"
    >
      <div className="mx-auto grid max-w-7xl gap-7 px-4 py-7 sm:px-6 sm:py-12 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-20">

        {/* Content */}
        <div className="max-w-2xl">

          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-3 py-1.5 text-[11px] font-medium text-sky-700 shadow-sm sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500 sm:h-2 sm:w-2" />
            Trusted Dental Care Since 2012
          </div>

          {/* Heading */}
          <h1 className="text-[2.15rem] font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Your smile deserves
            <span className="block text-sky-600">
              exceptional care.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            Modern, comfortable dental care delivered by experienced
            professionals who put your health, comfort, and confidence first.
          </p>

          {/* Buttons */}
          <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:mt-9 sm:gap-4">

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-sky-700 hover:shadow-lg hover:shadow-sky-600/20 sm:px-6 sm:py-3.5 sm:text-sm"
            >
              Book Appointment

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 sm:size-[17px]"
              />
            </a>

            <a
              href="tel:+917276639836"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 transition-all duration-300 hover:border-slate-300 hover:bg-slate-100 sm:px-6 sm:py-3.5 sm:text-sm"
            >
              <Phone size={15} className="sm:size-[17px]" />
              Talk to Us
            </a>

          </div>

          {/* Trust Stats */}
          <div className="mt-6 flex items-center gap-4 border-t border-slate-200 pt-4 sm:mt-12 sm:gap-8 sm:pt-7">

            <div>
              <p className="text-lg font-semibold text-slate-900 sm:text-2xl">
                4.9/5
              </p>

              <p className="mt-0.5 text-[10px] text-slate-500 sm:mt-1 sm:text-sm">
                Patient Rating
              </p>
            </div>

            <div className="h-7 w-px bg-slate-200 sm:h-10" />

            <div>
              <p className="text-lg font-semibold text-slate-900 sm:text-2xl">
                2,500+
              </p>

              <p className="mt-0.5 text-[10px] text-slate-500 sm:mt-1 sm:text-sm">
                Happy Patients
              </p>
            </div>

            <div className="h-7 w-px bg-slate-200 sm:h-10" />

            <div>
              <p className="text-lg font-semibold text-slate-900 sm:text-2xl">
                12+
              </p>

              <p className="mt-0.5 text-[10px] text-slate-500 sm:mt-1 sm:text-sm">
                Years Experience
              </p>
            </div>

          </div>
        </div>

        {/* Image */}
        <div className="relative">

          <div className="relative overflow-hidden rounded-[1.5rem] bg-sky-100 sm:rounded-[2rem]">

            <img
              src="/images/dentist-hero.png"
              alt="Dentist providing professional dental care"
              className="h-[240px] w-full object-cover sm:h-[520px] lg:h-[620px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-3 left-3 rounded-xl border border-white/70 bg-white/95 p-2.5 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-8 sm:rounded-2xl sm:p-4">

            <div className="flex items-center gap-2.5 sm:gap-3">

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600 sm:h-11 sm:w-11">
                <span className="text-sm font-semibold sm:text-lg">
                  ✓
                </span>
              </div>

              <div>
                <p className="text-[10px] font-semibold text-slate-900 sm:text-sm">
                  Gentle & Professional
                </p>

                <p className="mt-0.5 text-[9px] text-slate-500 sm:text-xs">
                  Care you can trust
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero