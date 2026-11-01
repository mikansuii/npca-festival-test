import { useRef, useState, type PointerEvent } from 'react';
import { Link } from 'react-router-dom';
import { type ExhibitSpot, type FacilitySpot } from '@/lib/festivalData';
import { useFestivalData } from '@/lib/useFestivalData';

type FlowPath = {
  d: string;
};

const flowPaths: FlowPath[] = [
  // 入口から右列展示を巡る
  { d: 'M 22 83 L 22 28 L 22 58 L 22 83 L 56 83 L 56 28 L 56 58 L 56 83 L 90 83' },
];

const categoryColors: Record<string, string> = {
  'ゲーム': '#e74c3c',
  'VR': '#27ae60',
  'ハードウェア': '#3498db',
  '技術': '#f39c12',
  'クイズ': '#9b59b6',
};

const facilityStyles: Record<FacilitySpot['kind'], { bg: string; border: string; text: string }> = {
  reception: { bg: '#eaf2ff', border: '#3b82f6', text: '#1d4ed8' },
  exit: { bg: '#fef3e8', border: '#f59e0b', text: '#b45309' },
  board: { bg: '#2d2d2d', border: '#1a1a1a', text: '#e0e0e0' },
};

type ExhibitMapProps = {
  editable?: boolean;
  selectedSpotId?: string | null;
  onSelectSpot?: (type: 'exhibit' | 'facility', id: string) => void;
};

export function ExhibitMap({ editable = false, selectedSpotId = null, onSelectSpot }: ExhibitMapProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ type: 'exhibit' | 'facility'; id: string; offsetX: number; offsetY: number } | null>(null);
  const { projects, exhibitSpots, facilitySpots, setExhibitSpots, setFacilitySpots } = useFestivalData();

  const startDrag = (event: PointerEvent<HTMLDivElement>, type: 'exhibit' | 'facility', id: string, spot: ExhibitSpot | FacilitySpot) => {
    if (!editable || !mapRef.current) return;
    const bounds = mapRef.current.getBoundingClientRect();
    dragRef.current = {
      type,
      id,
      offsetX: (event.clientX - bounds.left) / bounds.width - spot.x / 100,
      offsetY: (event.clientY - bounds.top) / bounds.height - spot.y / 100,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    onSelectSpot?.(type, id);
  };

  const moveSpot = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!editable || !drag || !mapRef.current) return;
    const bounds = mapRef.current.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - drag.offsetX) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height - drag.offsetY) * 100;
    if (drag.type === 'exhibit') {
      setExhibitSpots(exhibitSpots.map((spot) => spot.id === drag.id
        ? { ...spot, x: Math.max(0, Math.min(100 - spot.w, x)), y: Math.max(0, Math.min(100 - spot.h, y)) }
        : spot));
    } else {
      setFacilitySpots(facilitySpots.map((spot) => spot.id === drag.id
        ? { ...spot, x: Math.max(0, Math.min(100 - spot.w, x)), y: Math.max(0, Math.min(100 - spot.h, y)) }
        : spot));
    }
  };

  return (
    <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
      <div
        className="relative w-full h-full bg-ink-50 border border-ink-200 rounded overflow-hidden"
        style={{ aspectRatio: '16 / 9' }}
      >
        {/* Building outline */}
        <div ref={mapRef} className="absolute inset-2 border-2 border-ink-300 rounded-md">
          {/* Floor label */}
          <div className="absolute top-1 left-3 text-xs font-mono text-ink-400 z-0">
            校舎2階 — PC研究部室
          </div>

          {/* Facility spots (rendered first, behind exhibits) */}
          {facilitySpots.map((spot) => {
            const style = facilityStyles[spot.kind];
            const isHovered = hovered === spot.id;
            return (
              <div
                key={spot.id}
                className="absolute flex items-center justify-center text-center rounded transition-all duration-200"
                style={{
                  left: `${spot.x}%`,
                  top: `${spot.y}%`,
                  width: `${spot.w}%`,
                  height: `${spot.h}%`,
                  backgroundColor: style.bg,
                  border: `1.5px solid ${style.border}`,
                  opacity: isHovered ? 1 : 0.85,
                  cursor: editable ? 'grab' : undefined,
                  touchAction: editable ? 'none' : undefined,
                  outline: selectedSpotId === spot.id ? '2px solid #111827' : undefined,
                }}
                onMouseEnter={() => setHovered(spot.id)}
                onMouseLeave={() => setHovered(null)}
                onPointerDown={(event) => startDrag(event, 'facility', spot.id, spot)}
                onPointerMove={moveSpot}
                onPointerUp={() => { dragRef.current = null; }}
                onClick={() => editable && onSelectSpot?.('facility', spot.id)}
              >
                <span
                  className="text-xs font-bold leading-tight"
                  style={{ color: style.text }}
                >
                  {spot.label}
                </span>
              </div>
            );
          })}

          {/* Flow path (動線) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="3"
                markerHeight="3"
                refX="1.5"
                refY="1.5"
                orient="auto"
              >
                <path d="M0,0 L3,1.5 L0,3 Z" fill="#7c3aed" />
              </marker>
            </defs>
            {flowPaths.map((path, i) => (
              <path
                key={i}
                d={path.d}
                stroke="#7c3aed"
                strokeWidth="0.8"
                strokeDasharray="2 1.5"
                fill="none"
                markerEnd="url(#arrowhead)"
                opacity="0.6"
              />
            ))}
          </svg>

          {/* Exhibit spots */}
          {exhibitSpots.map((spot) => {
            const project = projects.find((p) => p.id === spot.projectId);
            if (!project) return null;
            const color = categoryColors[project.category] || '#95a5a6';
            const isHovered = hovered === spot.projectId;
            const itemClass = 'absolute rounded-md flex items-center justify-center text-center transition-all duration-200 hover:z-10 hover:shadow-lg';
            const itemStyle = {
                  left: `${spot.x}%`,
                  top: `${spot.y}%`,
                  width: `${spot.w}%`,
                  height: `${spot.h}%`,
                  backgroundColor: color,
                  opacity: isHovered ? 0.95 : 0.55,
                  transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                  cursor: editable ? 'grab' : undefined,
                  touchAction: editable ? 'none' as const : undefined,
                  outline: selectedSpotId === spot.id ? '2px solid #111827' : undefined,
                };
            const itemContent = (
              <div className="px-1">
                <div className="text-xs font-mono text-white/70 leading-none mb-0.5">
                  No.{project.sortOrder}
                </div>
                <div className="text-xs font-bold text-white leading-tight">
                  {project.title}
                </div>
              </div>
            );
            const pointerProps = {
              onMouseEnter: () => setHovered(spot.projectId),
              onMouseLeave: () => setHovered(null),
                onPointerDown: (event: PointerEvent<HTMLDivElement>) => startDrag(event, 'exhibit', spot.id, spot),
                onPointerMove: moveSpot,
                onPointerUp: () => { dragRef.current = null; },
                onClick: () => editable && onSelectSpot?.('exhibit', spot.id),
              };
            return editable ? (
              <div key={spot.id} className={itemClass} style={itemStyle} {...pointerProps}>{itemContent}</div>
            ) : (
              <Link key={spot.id} to={`/exhibits/${project.slug}`} className={itemClass} style={itemStyle} onMouseEnter={pointerProps.onMouseEnter} onMouseLeave={pointerProps.onMouseLeave}>
                {itemContent}
              </Link>
            );
          })}
        </div>

        {/* Tooltip */}
        {hovered && (() => {
          const exhibitSpot = exhibitSpots.find((s) => s.projectId === hovered);
          const project = projects.find((p) => p.id === hovered);
          if (exhibitSpot && project) {
            return (
              <div
                className="absolute z-20 pointer-events-none bg-ink-900 text-white text-sm rounded-lg px-3 py-2 shadow-xl whitespace-nowrap"
                style={{
                  left: `${Math.min(exhibitSpot.x + exhibitSpot.w / 2, 70)}%`,
                  top: `${Math.max(exhibitSpot.y - 4, 0)}%`,
                }}
              >
                <div className="font-bold">{project.title}</div>
                <div className="text-xs text-ink-300 mt-0.5">{project.category} — クリックで詳細</div>
              </div>
            );
          }
          const facility = facilitySpots.find((s) => s.id === hovered);
          if (facility) {
            return (
              <div
                className="absolute z-20 pointer-events-none bg-ink-900 text-white text-sm rounded-lg px-3 py-2 shadow-xl whitespace-nowrap"
                style={{
                  left: `${Math.min(facility.x + facility.w / 2, 70)}%`,
                  top: `${Math.max(facility.y - 4, 0)}%`,
                }}
              >
                <div className="font-bold">{facility.label}</div>
              </div>
            );
          }
          return null;
        })()}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-ink-600">
        {Object.entries(categoryColors).map(([cat, color]) => (
          <div key={cat} className="flex items-center gap-1.5">
            <span
              className="inline-block w-3 h-3 rounded"
              style={{ backgroundColor: color }}
            />
            {cat}
          </div>
        ))}
        <span className="text-ink-300">|</span>
        <div className="flex items-center gap-1.5">
          <span className="inline-block w-4 h-0 border-t-2 border-dashed" style={{ borderColor: '#7c3aed' }} />
          動線
        </div>
        <span className="text-ink-300">|</span>
        {Object.entries(facilityStyles).map(([kind, style]) => (
          <div key={kind} className="flex items-center gap-1.5">
            <span
              className="inline-block w-3 h-3 rounded border"
              style={{ backgroundColor: style.bg, borderColor: style.border }}
            />
            {facilitySpots.find((s) => s.kind === kind as FacilitySpot['kind'])?.label}
          </div>
        ))}
      </div>
    </div>
  );
}
