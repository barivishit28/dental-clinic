import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const galleryImages = [
    {
        src: "/images/gallery/p1.png",
        alt: "Patient smile transformation",
    },
    {
        src: "/images/gallery/p2.png",
        alt: "Patient dental treatment result",
    },
    {
        src: "/images/gallery/p3.png",
        alt: "Patient smile improvement",
    },
    {
        src: "/images/gallery/p4.png",
        alt: "Patient dental result",
    },
    {
        src: "/images/gallery/p5.png",
        alt: "Patient dental treatment result",
    },
]

function Gallery() {
    const [current, setCurrent] = useState(1)
    const [width, setWidth] = useState(0)
    const [isDesktop, setIsDesktop] = useState(false)
    const [transition, setTransition] = useState(true)

    const containerRef = useRef(null)

    const total = galleryImages.length

    // Clone last + original images + clone first
    const slides = [
        galleryImages[total - 1],
        ...galleryImages,
        galleryImages[0],
    ]

    useEffect(() => {
        const updateLayout = () => {
            if (containerRef.current) {
                setWidth(containerRef.current.offsetWidth)
            }

            setIsDesktop(window.innerWidth >= 1024)
        }

        updateLayout()

        window.addEventListener("resize", updateLayout)

        return () => {
            window.removeEventListener("resize", updateLayout)
        }
    }, [])

    const gap = isDesktop ? 16 : 0

    const cardWidth = isDesktop
        ? (width - gap * 2) / 3
        : width

    const nextSlide = () => {
        if (!transition) return

        setCurrent((prev) => prev + 1)
    }

    const prevSlide = () => {
        if (!transition) return

        setCurrent((prev) => prev - 1)
    }

    const handleTransitionEnd = () => {
        // Clone of first reached
        if (current === total + 1) {
            setTransition(false)
            setCurrent(1)
        }

        // Clone of last reached
        if (current === 0) {
            setTransition(false)
            setCurrent(total)
        }
    }

    useEffect(() => {
        if (!transition) {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setTransition(true)
                })
            })
        }
    }, [transition])

    /*
      Desktop:
      [P5] [P1] [P2]
            ↑
          CENTER

      After next:
      [P1] [P2] [P3]
            ↑
          CENTER

      ...
      
      When P5 is center:
      [P4] [P5] [P1]

      When P1 is center again:
      [P5] [P1] [P2]
    */

    const offset = isDesktop
        ? width / 2 -
          cardWidth / 2 -
          current * (cardWidth + gap)
        : -current * cardWidth

    return (
        <section
            id="gallery"
            className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
        >
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-600 sm:text-sm">
                        Patient Results
                    </p>

                    <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                        Real smiles, real
                        <span className="text-sky-600">
                            {" "}results.
                        </span>
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                        See the difference personalized dental care can make.
                    </p>
                </div>

                {/* Carousel */}
                <div
                    ref={containerRef}
                    className="relative mt-8 overflow-hidden sm:mt-10"
                >
                    <div
                        onTransitionEnd={handleTransitionEnd}
                        className={`flex ${
                            transition
                                ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                                : ""
                        }`}
                        style={{
                            gap: `${gap}px`,
                            transform: `translateX(${offset}px)`,
                        }}
                    >
                        {slides.map((image, index) => {
                            const isCenter = index === current

                            return (
                                <div
                                    key={`${image.src}-${index}`}
                                    className="shrink-0"
                                    style={{
                                        width: `${cardWidth}px`,
                                    }}
                                >
                                    <div
                                        className={`overflow-hidden rounded-2xl transition-all duration-700 ${
                                            isCenter
                                                ? "scale-100 opacity-100 blur-0"
                                                : "scale-[0.94] opacity-50 blur-[2px]"
                                        }`}
                                    >
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="aspect-square w-full object-cover sm:aspect-auto sm:h-[320px] lg:h-[380px]"
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Previous */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-md transition-all duration-300 hover:bg-sky-600 hover:text-white sm:left-4 sm:h-10 sm:w-10"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    {/* Next */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-md transition-all duration-300 hover:bg-sky-600 hover:text-white sm:right-4 sm:h-10 sm:w-10"
                        aria-label="Next image"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>

                {/* Dots */}
                <div className="mt-5 flex justify-center gap-1.5">
                    {galleryImages.map((_, index) => {
                        const activeIndex =
                            ((current - 1) % total + total) % total

                        return (
                            <button
                                key={index}
                                onClick={() => {
                                    setTransition(true)
                                    setCurrent(index + 1)
                                }}
                                aria-label={`Go to image ${index + 1}`}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                    activeIndex === index
                                        ? "w-5 bg-sky-600"
                                        : "w-1.5 bg-slate-300 hover:bg-slate-400"
                                }`}
                            />
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default Gallery