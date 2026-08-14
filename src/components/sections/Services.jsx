import {
  Smile,
  Sparkles,
  Stethoscope,
  ShieldCheck,
  Baby,
  Siren,
} from "lucide-react"

const services = [
  {
    icon: Smile,
    title: "General Dentistry",
    description: "Complete care for healthy teeth and gums.",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description: "Professional treatment for a brighter smile.",
  },
  {
    icon: Stethoscope,
    title: "Dental Implants",
    description: "Natural-looking, long-lasting tooth replacement.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Care",
    description: "Regular care to prevent dental problems.",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description: "Gentle dental care designed for children.",
  },
  {
    icon: Siren,
    title: "Emergency Care",
    description: "Quick care for unexpected dental emergencies.",
  },
]

function Services() {
  return (
    <section
      id="services"
      className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Centered Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-600 sm:mb-3 sm:text-sm">
            Our Services
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Complete care for
            <span className="text-sky-600"> every smile.</span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-lg sm:leading-7">
            Personalized dental care from routine checkups to advanced treatments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:mt-14 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.title}
                className="group rounded-xl border border-slate-200 bg-white p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-200/50 sm:rounded-2xl sm:p-6"
              >
                {/* Icon + Card Title */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-600 group-hover:text-white sm:h-11 sm:w-11 sm:rounded-xl">
                    <Icon
                      size={16}
                      strokeWidth={1.8}
                      className="sm:size-[21px]"
                    />
                  </div>

                  <h3 className="text-sm font-semibold leading-5 text-slate-900 sm:text-lg">
                    {service.title}
                  </h3>
                </div>

                {/* Centered Description */}
                <p className="mt-3 text-center text-[11px] leading-4 text-slate-500 sm:mt-4 sm:text-sm sm:leading-6">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Services