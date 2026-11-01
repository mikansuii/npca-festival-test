import { Link } from 'react-router-dom';
import { Settings2 } from 'lucide-react';

export function Header() {
  const navLinks = [
    { to: '/event', label: 'ステージ企画' },
    { to: '/navigation', label: '場所' },
    { to: '/exhibits', label: '展示' },
    { to: '/bushi', label: '部誌' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-ink-200">
      <nav className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="text-ink-900 font-bold text-sm hover:no-underline">
          灘校パソコン研究部 文化祭2027
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="text-ink-600 hover:text-ink-900 text-sm hover:no-underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/admin" className="inline-flex items-center gap-1 text-ink-600 hover:text-ink-900 text-xs hover:no-underline md:text-sm">
          <Settings2 className="h-3.5 w-3.5" /> 管理
        </Link>
      </nav>
    </header>
  );
}
