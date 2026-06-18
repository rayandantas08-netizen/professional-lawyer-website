import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Áreas de Atuação', href: '#areas' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#6B0000]/95 backdrop-blur-md shadow-lg'
          : 'bg-[#6B0000]/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Versão melhorada */}
          <a href="#home" onClick={(e) => handleClick(e, '#home')} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C9A959]/20 rounded-lg flex items-center justify-center border border-[#C9A959]/30">
              <span className="text-[#C9A959] font-bold text-sm tracking-wider">S&D</span>
            </div>
            <div>
              <span className="text-xl font-bold text-white font-[family-name:var(--font-heading)]">
                Santana <span className="text-[#C9A959]">&</span> Dantas
              </span>
              <span className="block text-[10px] uppercase tracking-[3px] text-white/60 -mt-1">Advocacia</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm font-medium text-white/80 hover:text-[#C9A959] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C9A959] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5598984994578?text=Olá! Gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C9A959] text-[#6B0000] px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#D4B768] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Agendar Consulta
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#6B0000] border-t border-[#C9A959]/20 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="block py-3 px-4 text-white/80 hover:text-[#C9A959] hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5598984994578?text=Olá! Gostaria de agendar uma consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-[#C9A959] text-[#6B0000] px-6 py-3 rounded-lg font-semibold mt-2 hover:bg-[#D4B768] transition-colors"
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </header>
  );
}
