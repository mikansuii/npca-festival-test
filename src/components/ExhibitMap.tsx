import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '@/lib/data';

type ExhibitSpot = {
  projectId: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

const categoryColors: Record<string, string> = {
  'ゲーム': '#e74c3c',
  'AI': '#27ae60',
  'Web': '#3498db',
  'API': '#f39c12',
};

const spots: ExhibitSpot[] = [
  { projectId: '1', x: 8, y: 12, w: 28, h: 18 },
  { projectId: '2', x: 42, y: 12, w: 28, h: 18 },
  { projectId: '3', x: 76, y: 12, w: 20, h: 18 },
  { projectId: '4', x: 8, y: 38, w: 24, h: 18 },
  { projectId: '5', x: 38, y: 38, w: 32, h: 18 },
  { projectId: '6', x: 76, y: 38, w: 20, h: 18 },
  { projectId: '7', x: 8, y: 64, w: 40, h: 20 },
  { projectId: '8', x: 56, y: 64, w: 40, h: 20 },
];

export function ExhibitMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
      <div
        className="relative w-full h-full bg-ink-50 border border-ink-200 rounded overflow-hidden"
        style={{ aspectRatio: '16 / 9' }}
      >
        {/* Building outline */}
        <div className="absolute inset-2 border-2 border-ink-300 rounded-md">
          {/* Floor label */}
          <div className="absolute top-2 left-3 text-xs font-mono text-ink-400">
            校舎2階 — PC研究部室
          </div>

          {/* Corridor line */}
          <div
            className="absolute bg-ink-100"
            style={{ left: '47%', top: '6%', width: '6%', height: '88%' }}
          />

          {/* Exhibit spots */}
          {spots.map((spot) => {
            const project = projects.find((p) => p.id === spot.projectId);
            if (!project) return null;
            const color = categoryColors[project.category] || '#95a5a6';
            const isHovered = hovered === spot.projectId;
            return (
              <Link
                key={spot.projectId}
                to={`/exhibits/${project.slug}`}
                className="absolute rounded-md flex items-center justify-center text-center transition-all duration-200 hover:z-10 hover:shadow-lg"
                style={{
                  left: `${spot.x}%`,
                  top: `${spot.y}%`,
                  width: `${spot.w}%`,
                  height: `${spot.h}%`,
                  backgroundColor: color,
                  opacity: isHovered ? 0.95 : 0.55,
                  transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                }}
                onMouseEnter={() => setHovered(spot.projectId)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="px-1">
                  <div className="text-xs font-mono text-white/70 leading-none mb-0.5">
                    No.{project.sortOrder}
                  </div>
                  <div className="text-xs font-bold text-white leading-tight">
                    {project.title}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Tooltip */}
        {hovered && (() => {
          const spot = spots.find((s) => s.projectId === hovered);
          const project = projects.find((p) => p.id === hovered);
          if (!spot || !project) return null;
          return (
            <div
              className="absolute z-20 pointer-events-none bg-ink-900 text-white text-sm rounded-lg px-3 py-2 shadow-xl whitespace-nowrap"
              style={{
                left: `${Math.min(spot.x + spot.w / 2, 70)}%`,
                top: `${Math.max(spot.y - 4, 0)}%`,
              }}
            >
              <div className="font-bold">{project.title}</div>
              <div className="text-xs text-ink-300 mt-0.5">{project.category} — クリックで詳細</div>
            </div>
          );
        })()}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-4 text-xs text-ink-600">
        {Object.entries(categoryColors).map(([cat, color]) => (
          <div key={cat} className="flex items-center gap-1.5">
            <span
              className="inline-block w-3 h-3 rounded"
              style={{ backgroundColor: color }}
            />
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
}
