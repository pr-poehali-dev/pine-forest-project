import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const navLinks = [
  { label: 'Главная', href: '/' },
  { label: 'Каталог', href: '/catalog' },
  { label: 'О базе', href: '/#about' },
  { label: 'Территория', href: '/#territory' },
  { label: 'Галерея', href: '/#gallery' },
  { label: 'Контакты', href: '/#contacts' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isHome = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-pine shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-sand-light/20 border border-sand/30 flex items-center justify-center">
              <span className="text-sand text-lg">🌲</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-white font-semibold text-lg tracking-wide">
                Сосновый бор
              </span>
              <span className="text-sand/70 text-[10px] uppercase tracking-[0.15em] font-body font-light">
                Зона отдыха
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-sand text-sm font-body font-light tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-sand transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-4">
            <Link
              to="/booking"
              className="hidden md:flex items-center gap-2 bg-sand text-pine px-5 py-2.5 text-sm font-body font-medium tracking-wide hover:bg-sand-light transition-all duration-200"
            >
              <Icon name="Calendar" size={15} />
              Забронировать
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
              aria-label="Меню"
            >
              <span className="w-6 h-px bg-white transition-all duration-300 group-hover:bg-sand" />
              <span className="w-4 h-px bg-white transition-all duration-300 group-hover:bg-sand ml-2" />
              <span className="w-6 h-px bg-white transition-all duration-300 group-hover:bg-sand" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-pine transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-5">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌲</span>
              <span className="font-display text-white text-xl">Сосновый бор</span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-sand transition-colors"
              aria-label="Закрыть"
            >
              <Icon name="X" size={24} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 flex flex-col justify-center px-8 gap-6">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-white/80 hover:text-sand text-3xl font-medium tracking-wide transition-colors duration-200 border-b border-white/10 pb-4"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="px-8 py-10">
            <Link
              to="/booking"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-sand text-pine py-4 text-base font-body font-medium tracking-wide hover:bg-sand-light transition-colors duration-200"
            >
              <Icon name="Calendar" size={18} />
              Забронировать
            </Link>
            <div className="flex items-center gap-2 justify-center mt-6 text-white/50 text-sm">
              <Icon name="Phone" size={14} />
              <span>+7 (900) 000-00-00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
