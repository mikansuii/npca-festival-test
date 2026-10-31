import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, Calendar } from 'lucide-react';

const navLinks = [
  { to: '/#projects', label: '展示' },
  { to: '/#members', label: '部員' },
  { to: '/#schedule', label: 'スケジュール' },
  { to: '/#access', label: 'アクセス' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAnchorClick = (anchor: string) => {
    setMenuOpen(false);
    if (location.pathname === '/') {
      const el = document.querySelector(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/${anchor}`;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-navy-200/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-navy-500 flex items-center justify-center group-hover:bg-navy-600 transition-colors">
            <Terminal className="w-6 h-6 text-white" />
          </div>
          <div className="text-navy-900">
            <div className="font-bold text-sm leading-tight">灘校パソコン研究部</div>
            <div className="text-xs text-navy-500 leading-tight">文化祭 2026</div>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <button
                onClick={() => handleAnchorClick(link.to.replace('/#', '#'))}
                className="text-navy-700 hover:text-navy-900 transition-colors text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-navy-500 group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleAnchorClick('#schedule')}
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg bg-navy-500 hover:bg-navy-600 text-white font-bold text-sm transition-all hover:shadow-lg hover:shadow-navy-500/30"
        >
          <Calendar className="w-4 h-4" />
          日程を見る
        </button>

        <button
          className="md:hidden text-navy-900 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-navy-200">
          <ul className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <button
                  onClick={() => handleAnchorClick(link.to.replace('/#', '#'))}
                  className="block py-2 text-navy-700 hover:text-navy-900 transition-colors text-sm font-medium"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleAnchorClick('#schedule')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-navy-500 text-white font-bold text-sm"
              >
                <Calendar className="w-4 h-4" />
                日程を見る
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
