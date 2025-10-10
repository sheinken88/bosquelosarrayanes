"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "home", href: `/${locale}#hero` },
    { key: "tour", href: `/${locale}#tour` },
    { key: "pricing", href: `/${locale}#pricing` },
    { key: "gallery", href: `/${locale}#gallery` },
    { key: "contact", href: `/${locale}#contact` },
  ];

  const languages = [
    { code: "es", name: "ES" },
    { code: "en", name: "EN" },
    { code: "pt", name: "PT" },
  ];

  const switchLocale = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, "");
    return `/${newLocale}${currentPath}`;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-b from-[var(--forest-dark)] via-[var(--forest-dark)] to-[var(--forest-dark)]/80 shadow-lg"
          : "bg-gradient-to-b from-[var(--forest-dark)]/60 via-[var(--forest-dark)]/40 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <div className="text-2xl text-white font-light">
              Bosque de Arrayanes
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-white hover:text-[var(--earth-gold)] transition-colors duration-300 font-medium"
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-2 border-l border-white/20 pl-6">
            {languages.map((lang) => (
              <Link
                key={lang.code}
                href={switchLocale(lang.code)}
                className={`px-3 py-1 rounded text-sm font-medium transition-all duration-300 ${
                  locale === lang.code
                    ? "bg-[var(--earth-gold)] text-[var(--forest-dark)]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {lang.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-[var(--earth-gold)] transition-colors duration-300 py-2 font-medium"
                >
                  {t(item.key)}
                </a>
              ))}
              <div className="flex space-x-2 pt-3 border-t border-white/20">
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={switchLocale(lang.code)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-2 rounded text-sm font-medium transition-all duration-300 ${
                      locale === lang.code
                        ? "bg-[var(--earth-gold)] text-[var(--forest-dark)]"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {lang.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
