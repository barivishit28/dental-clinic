import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "We generally recommend a dental checkup every six months.",
  },
  {
    question: "Do you offer emergency dental care?",
    answer:
      "Yes. We provide prompt care for dental pain, injuries, and other emergencies.",
  },
  {
    question: "Is teeth whitening safe?",
    answer:
      "Yes. Professional whitening is safe when performed under proper dental supervision.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment through our online booking form or call our clinic directly.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Yes. We provide gentle and comfortable dental care for children of all ages.",
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-3xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-600 sm:text-sm">
            FAQ
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Frequently asked
            <span className="text-sky-600"> questions.</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="mt-7 space-y-2.5 sm:mt-10 sm:space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={faq.question}
                className={`rounded-xl border transition-all duration-300 sm:rounded-2xl ${
                  isOpen
                    ? "border-sky-200 bg-sky-50/40"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="text-xs font-semibold text-slate-900 sm:text-base">
                    {faq.question}
                  </span>

                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 sm:h-8 sm:w-8">
                    {isOpen ? (
                      <Minus size={14} />
                    ) : (
                      <Plus size={14} />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-5">
                    <p className="text-[10px] leading-4 text-slate-500 sm:text-sm sm:leading-6">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQ