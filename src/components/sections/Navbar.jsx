import { useEffect, useState } from "react"
import {
    Phone,
    ArrowUpRight,
    Menu,
    X,
} from "lucide-react"

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
]

function Navbar() {
    const [activeSection, setActiveSection] = useState("home")
    const [menuOpen, setMenuOpen] = useState(false)

    /* Active section detection */
    useEffect(() => {
        const sections = navLinks
            .map((link) => document.querySelector(link.href))
            .filter(Boolean)

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

                if (visibleSection) {
                    setActiveSection(visibleSection.target.id)
                }
            },
            {
                rootMargin: "-30% 0px -60% 0px",
                threshold: [0, 0.2, 0.5, 1],
            }
        )

        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    /* Close mobile menu after clicking */
    const handleNavClick = () => {
        setMenuOpen(false)
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
            <nav className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

                {/* Logo */}
                <a
                    href="#home"
                    onClick={handleNavClick}
                    className="flex items-center gap-3"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600">
                        <span className="text-lg font-semibold text-white">
                            S
                        </span>
                    </div>

                    <div>
                        <p className="text-[18px] font-semibold tracking-tight text-slate-900">
                            SmileCare
                        </p>

                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                            Dental Clinic
                        </p>
                    </div>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-7 lg:flex">
                    {navLinks.map((link) => {
                        const sectionId = link.href.replace("#", "")
                        const isActive = activeSection === sectionId

                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`group relative py-2 text-[15px] font-medium transition-colors duration-300 ${isActive
                                        ? "text-slate-900"
                                        : "text-slate-500 hover:text-slate-900"
                                    }`}
                            >
                                {link.name}

                                <span
                                    className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-sky-600 transition-all duration-300 ${isActive
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                        }`}
                                />
                            </a>
                        )
                    })}
                </div>

                {/* Desktop Actions */}
                <div className="hidden items-center gap-3 lg:flex">

                    <a
                        href="tel:+917276639836"
                        className="group flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-[15px] font-medium text-slate-700 transition-all duration-300 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                    >
                        <Phone
                            size={16}
                            className="transition-transform duration-300 group-hover:scale-110"
                        />
                        Call
                    </a>

                    <a
                        href="#contact"
                        className="group flex items-center gap-2 rounded-full bg-sky-600 px-5 py-2.5 text-[15px] font-medium text-white transition-all duration-300 hover:bg-sky-700 hover:shadow-lg hover:shadow-sky-600/20"
                    >
                        Book Appointment

                        <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </a>

                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="rounded-lg border border-slate-200 p-2.5 text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-600 lg:hidden"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

            </nav>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${menuOpen
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-5 py-4">

                    <div className="space-y-1">
                        {navLinks.map((link) => {
                            const sectionId = link.href.replace("#", "")
                            const isActive = activeSection === sectionId

                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={handleNavClick}
                                    className={`block rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${isActive
                                            ? "bg-sky-50 text-sky-700"
                                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                        }`}
                                >
                                    {link.name}
                                </a>
                            )
                        })}
                    </div>

                    {/* Mobile Actions */}
                    <div className="mt-3 space-y-2 border-t border-slate-100 pt-3">

                        <a
                            href="tel:+917276639836"
                            className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-xs font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                        >
                            <Phone size={15} />
                            Call Now
                        </a>

                        <a
                            href="#contact"
                            onClick={handleNavClick}
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-sky-600 py-2.5 text-xs font-medium text-white transition hover:bg-sky-700"
                        >
                            Book Appointment
                            <ArrowUpRight size={14} />
                        </a>

                    </div>

                </div>
            </div>
        </header>
    )
}

export default Navbar