import {
  CheckCircle2,
  HeartPulse,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

const benefits = [
  {
    icon: HeartPulse,
    title: "Patient-First Care",
    description: "Comfort-focused treatment tailored to you.",
  },
  {
    icon: ShieldCheck,
    title: "Experienced Team",
    description: "Skilled dentists with proven clinical expertise.",
  },
  {
    icon: Sparkles,
    title: "Modern Technology",
    description: "Advanced equipment for precise treatment.",
  },
  {
    icon: CheckCircle2,
    title: "Transparent Care",
    description: "Clear treatment plans with no surprises.",
  },
]

function WhyChooseUs() {
  return (
    <section
      id="about"
      className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-600 sm:text-sm">
            Why Choose Us
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Care that puts your
            <span className="text-sky-600"> smile first.</span>
          </h2>
        </div>

        {/* Content */}
        <div className="mt-8 grid gap-5 lg:mt-14 lg:grid-cols-2 lg:items-center lg:gap-12">

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl sm:rounded-[2rem]">
              <img
                src="/images/clinic.png"
                alt="Modern SmileCare dental clinic"
                className="h-[260px] w-full object-cover sm:h-[420px] lg:h-[500px]"
              />
            </div>

            <div className="absolute bottom-4 right-4 rounded-xl bg-white px-4 py-3 shadow-lg sm:bottom-6 sm:right-6 sm:rounded-2xl sm:px-5 sm:py-4">
              <p className="text-xl font-semibold text-slate-900">12+</p>
              <p className="text-xs text-slate-500">Years of Excellence</p>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon

              return (
                <div
                  key={benefit.title}
                  className="group rounded-xl border border-slate-200 bg-white p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg sm:rounded-2xl sm:p-5"
                >
                  {/* Icon + Title */}
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600 transition-all duration-300 group-hover:bg-sky-600 group-hover:text-white sm:h-10 sm:w-10">
                      <Icon size={16} className="sm:size-[18px]" />
                    </div>

                    <h3 className="text-sm font-semibold leading-5 text-slate-900 sm:text-base">
                      {benefit.title}
                    </h3>
                  </div>

                  {/* Centered Description */}
                  <p className="mt-3 text-center text-[11px] leading-4 text-slate-500 sm:mt-4 sm:text-sm sm:leading-5">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs