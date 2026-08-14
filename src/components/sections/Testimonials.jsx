import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    rating: 5,
    review:
      "The entire experience was excellent. The staff was welcoming and the treatment was very comfortable.",
    date: "2 weeks ago",
  },
  {
    name: "Rahul Mehta",
    rating: 5,
    review:
      "Very professional clinic with caring doctors. Everything was explained clearly before the treatment.",
    date: "1 month ago",
  },
  {
    name: "Ananya Patel",
    rating: 5,
    review:
      "Clean clinic, friendly staff and excellent dental care. I would definitely recommend SmileCare.",
    date: "2 months ago",
  },
  {
    name: "Amit Shah",
    rating: 5,
    review:
      "One of the best dental experiences I've had. The doctor was patient and made me feel comfortable.",
    date: "3 months ago",
  },
]

function Testimonials() {
  return (
    <section
      id="reviews"
      className="bg-slate-50 px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-600 sm:text-sm">
            Patient Reviews
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Loved by our
            <span className="text-sky-600"> patients.</span>
          </h2>
        </div>

        {/* Reviews */}
        <div className="mt-7 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-xl border border-slate-200 bg-white p-3 text-center sm:rounded-2xl sm:p-5"
            >
              {/* Stars */}
              <div className="flex justify-center gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={11}
                    className="fill-amber-400 text-amber-400 sm:size-[14px]"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-2.5 text-[10px] leading-4 text-slate-600 sm:mt-4 sm:text-sm sm:leading-6">
                "{testimonial.review}"
              </p>

              {/* Patient */}
              <div className="mt-3 border-t border-slate-100 pt-2.5 sm:mt-5 sm:pt-4">
                <p className="text-[10px] font-semibold text-slate-900 sm:text-sm">
                  {testimonial.name}
                </p>

                <p className="mt-0.5 text-[8px] text-slate-400 sm:mt-1 sm:text-xs">
                  {testimonial.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Rating */}
        <div className="mt-5 flex justify-center sm:mt-7">
          <div className="flex items-center gap-1.5 text-[10px] text-slate-500 sm:gap-2 sm:text-sm">
            <Star
              size={13}
              className="fill-amber-400 text-amber-400 sm:size-[16px]"
            />

            <span>
              <strong className="text-slate-900">4.9/5</strong>{" "}
              from Google Reviews
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials