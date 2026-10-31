import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { to: '/#projects', label: '展示' },
  { to: '/#members', label: '部員' },
  { to: '/#schedule', label: 'スケジュール' },
  { to: '/#access', label: '場所' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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
    <header className="sticky top-0 z-50 bg-white border-b border-ink-200">
      <nav className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="text-ink-900 font-bold text-sm hover:no-underline">
          灘校パソコン研究部 文化祭2026
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <button
                onClick={() => handleAnchorClick(link.to.replace('/#', '#'))}
                className="text-ink-600 hover:text-ink-900 text-sm"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-ink-800 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-ink-200 bg-white">
          <ul className="px-6 py-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <button
                  onClick={() => handleAnchorClick(link.to.replace('/#', '#'))}
                  className="block py-1.5 text-ink-600 hover:text-ink-900 text-sm"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
