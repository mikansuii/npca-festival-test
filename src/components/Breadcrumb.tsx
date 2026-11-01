import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';

const routeNames: Record<string, string> = {
  '/': 'ホーム',
  '/exhibits': '展示',
  '/event': 'ステージ企画',
  '/navigation': '場所',
  '/bushi': '部誌',
  '/admin': '管理',
};

export function Breadcrumb() {
  const location = useLocation();
  const path = location.pathname;

  if (path === '/') return null;

  const segments = path.split('/').filter(Boolean);

  const crumbs: { to: string; label: string }[] = [
    { to: '/', label: 'ホーム' },
  ];

  let currentPath = '';
  for (const seg of segments) {
    currentPath += '/' + seg;
    const known = routeNames[currentPath];
    if (known) {
      crumbs.push({ to: currentPath, label: known });
    } else if (segments.length > 1 && segments[0] === 'exhibits') {
      crumbs.push({ to: '/exhibits', label: '展示' });
      crumbs.push({ to: currentPath, label: '展示詳細' });
      break;
    } else {
      crumbs.push({ to: currentPath, label: seg });
    }
  }

  const deduped = crumbs.filter((c, i) => i === 0 || c.to !== crumbs[i - 1].to);

  return (
    <nav className="max-w-3xl mx-auto px-6 pt-4">
      <ol className="flex items-center gap-1.5 text-xs text-ink-500 flex-wrap">
        {deduped.map((crumb, i) => {
          const isLast = i === deduped.length - 1;
          return (
            <li key={crumb.to} className="flex items-center gap-1.5">
              {i === 0 ? (
                <Link to={crumb.to} className="hover:text-ink-900 flex items-center gap-1">
                  <Home className="w-3 h-3" />
                  <span className="sr-only">{crumb.label}</span>
                </Link>
              ) : isLast ? (
                <span className="text-ink-700 font-medium">{crumb.label}</span>
              ) : (
                <Link to={crumb.to} className="hover:text-ink-900 hover:no-underline">
                  {crumb.label}
                </Link>
              )}
              {!isLast && <span className="text-ink-300">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
