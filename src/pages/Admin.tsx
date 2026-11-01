import { useState } from 'react';
import { RotateCcw, SlidersHorizontal } from 'lucide-react';
import { ExhibitMap } from '@/components/ExhibitMap';
import { useFestivalData } from '@/lib/useFestivalData';

type Selection = { type: 'exhibit' | 'facility'; id: string };

const inputClass = 'w-full rounded border border-ink-200 bg-white px-3 py-2 text-sm text-ink-900 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100';

function TextField({ label, value, onChange, multiline = false }: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
}) {
  return (
    <label className="block text-xs font-medium text-ink-600">
      <span className="mb-1 block">{label}</span>
      {multiline ? (
        <textarea className={`${inputClass} min-h-24 resize-y`} value={value} onChange={(event) => onChange(event.target.value)} />
      ) : (
        <input className={inputClass} value={value} onChange={(event) => onChange(event.target.value)} />
      )}
    </label>
  );
}

function NumberField({ label, value, onChange }: { label: string; value: number; onChange: (value: number) => void }) {
  return (
    <label className="block text-xs font-medium text-ink-600">
      <span className="mb-1 block">{label}</span>
      <input className={inputClass} type="number" min="0" max="100" step="1" value={Math.round(value)} onChange={(event) => onChange(Number(event.target.value))} />
    </label>
  );
}

export function Admin() {
  const { projects, exhibitSpots, facilitySpots, setProjects, setExhibitSpots, setFacilitySpots, reset } = useFestivalData();
  const [selection, setSelection] = useState<Selection | null>(null);
  const selectedExhibit = exhibitSpots.find((spot) => spot.id === selection?.id);
  const selectedProject = selectedExhibit ? projects.find((project) => project.id === selectedExhibit.projectId) : undefined;
  const selectedFacility = facilitySpots.find((spot) => spot.id === selection?.id);

  const updateProject = (values: Partial<(typeof projects)[number]>) => {
    if (!selectedProject) return;
    setProjects(projects.map((project) => project.id === selectedProject.id ? { ...project, ...values } : project));
  };

  const updateExhibitSpot = (key: 'x' | 'y' | 'w' | 'h', value: number) => {
    if (!selectedExhibit) return;
    const max = key === 'x' ? 100 - selectedExhibit.w : key === 'y' ? 100 - selectedExhibit.h : 100;
    setExhibitSpots(exhibitSpots.map((spot) => spot.id === selectedExhibit.id ? { ...spot, [key]: Math.max(0, Math.min(max, value)) } : spot));
  };

  const updateFacility = (values: Partial<(typeof facilitySpots)[number]>) => {
    if (!selectedFacility) return;
    setFacilitySpots(facilitySpots.map((spot) => spot.id === selectedFacility.id ? { ...spot, ...values } : spot));
  };

  const restoreDefaults = () => {
    if (window.confirm('展示内容と配置を初期状態に戻しますか？')) reset();
  };

  return (
    <main className="min-h-[calc(100vh-9rem)] bg-[#f3f5f2]">
      <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-ink-200 pb-5">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.12em] text-emerald-800">
              <SlidersHorizontal className="h-4 w-4" /> Festival / Content Studio
            </div>
            <h1 className="text-2xl font-bold text-ink-900">展示・配置の管理</h1>
            <p className="mt-1 text-sm text-ink-600">マーカーをドラッグして配置し、選択項目の情報を編集できます。</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 text-xs text-ink-600">
              <span className="h-2 w-2 rounded-full bg-emerald-600" /> このブラウザーに保存
            </span>
            <button type="button" onClick={restoreDefaults} className="inline-flex items-center gap-2 rounded border border-ink-300 bg-white px-3 py-2 text-sm font-medium text-ink-700 hover:bg-ink-50">
              <RotateCcw className="h-4 w-4" /> 初期状態に戻す
            </button>
          </div>
        </header>

        <div className="grid items-start gap-5 xl:grid-cols-[270px_minmax(0,1fr)_300px]">
          <aside className="rounded border border-ink-200 bg-white">
            <div className="border-b border-ink-200 px-4 py-3">
              <h2 className="text-sm font-bold text-ink-900">編集する項目</h2>
              <p className="mt-0.5 text-xs text-ink-500">展示 {projects.length}件 / 設備 {facilitySpots.length}件</p>
            </div>
            <div className="p-2">
              <p className="px-2 pb-1 pt-2 text-[10px] font-bold tracking-wider text-ink-400">EXHIBITS</p>
              {exhibitSpots.map((spot) => {
                const project = projects.find((item) => item.id === spot.projectId);
                if (!project) return null;
                const active = selection?.type === 'exhibit' && selection.id === spot.id;
                return (
                  <button key={spot.id} type="button" onClick={() => setSelection({ type: 'exhibit', id: spot.id })} className={`mb-1 flex w-full items-center gap-3 rounded px-2 py-2 text-left ${active ? 'bg-emerald-50 text-emerald-950 ring-1 ring-emerald-700' : 'text-ink-700 hover:bg-ink-50'}`}>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded bg-ink-100 font-mono text-xs">{String(project.sortOrder).padStart(2, '0')}</span>
                    <span className="min-w-0"><span className="block truncate text-sm font-semibold">{project.title}</span><span className="block text-[11px] text-ink-500">{project.category}</span></span>
                  </button>
                );
              })}
              <p className="px-2 pb-1 pt-4 text-[10px] font-bold tracking-wider text-ink-400">FACILITIES</p>
              {facilitySpots.map((spot) => {
                const active = selection?.type === 'facility' && selection.id === spot.id;
                return <button key={spot.id} type="button" onClick={() => setSelection({ type: 'facility', id: spot.id })} className={`mb-1 flex w-full items-center rounded px-3 py-2 text-left text-sm ${active ? 'bg-emerald-50 font-semibold text-emerald-950 ring-1 ring-emerald-700' : 'text-ink-700 hover:bg-ink-50'}`}>{spot.label}</button>;
              })}
            </div>
          </aside>

          <section className="min-w-0 rounded border border-ink-200 bg-white p-4 sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <div><h2 className="text-base font-bold text-ink-900">会場レイアウト</h2><p className="text-xs text-ink-500">選択したマーカーをつかんで移動</p></div>
              <span className="font-mono text-[10px] text-ink-400">DRAG TO REPOSITION</span>
            </div>
            <ExhibitMap editable selectedSpotId={selection?.id ?? null} onSelectSpot={(type, id) => setSelection({ type, id })} />
          </section>

          <aside className="rounded border border-ink-200 bg-white">
            <div className="border-b border-ink-200 px-4 py-3">
              <h2 className="text-sm font-bold text-ink-900">選択項目の設定</h2>
            </div>
            {selectedProject && selectedExhibit ? (
              <div className="space-y-4 p-4">
                <TextField label="展示名" value={selectedProject.title} onChange={(title) => updateProject({ title })} />
                <TextField label="分類" value={selectedProject.category} onChange={(category) => updateProject({ category })} />
                <TextField label="URLスラッグ" value={selectedProject.slug} onChange={(slug) => updateProject({ slug })} />
                <TextField label="説明" value={selectedProject.description} multiline onChange={(description) => updateProject({ description })} />
                <div className="border-t border-ink-100 pt-4">
                  <p className="mb-3 text-xs font-bold text-ink-700">配置とサイズ (%)</p>
                  <div className="grid grid-cols-2 gap-3">
                    <NumberField label="左位置 X" value={selectedExhibit.x} onChange={(x) => updateExhibitSpot('x', x)} />
                    <NumberField label="上位置 Y" value={selectedExhibit.y} onChange={(y) => updateExhibitSpot('y', y)} />
                    <NumberField label="幅" value={selectedExhibit.w} onChange={(w) => updateExhibitSpot('w', w)} />
                    <NumberField label="高さ" value={selectedExhibit.h} onChange={(h) => updateExhibitSpot('h', h)} />
                  </div>
                </div>
              </div>
            ) : selectedFacility ? (
              <div className="space-y-4 p-4">
                <TextField label="表示名" value={selectedFacility.label} onChange={(label) => updateFacility({ label })} />
                <div className="border-t border-ink-100 pt-4">
                  <p className="mb-3 text-xs font-bold text-ink-700">配置とサイズ (%)</p>
                  <div className="grid grid-cols-2 gap-3">
                    <NumberField label="左位置 X" value={selectedFacility.x} onChange={(x) => updateFacility({ x: Math.max(0, Math.min(100 - selectedFacility.w, x)) })} />
                    <NumberField label="上位置 Y" value={selectedFacility.y} onChange={(y) => updateFacility({ y: Math.max(0, Math.min(100 - selectedFacility.h, y)) })} />
                    <NumberField label="幅" value={selectedFacility.w} onChange={(w) => updateFacility({ w: Math.max(1, Math.min(100 - selectedFacility.x, w)) })} />
                    <NumberField label="高さ" value={selectedFacility.h} onChange={(h) => updateFacility({ h: Math.max(1, Math.min(100 - selectedFacility.y, h)) })} />
                  </div>
                </div>
              </div>
            ) : (
              <p className="p-4 text-sm text-ink-500">マップ上の展示または設備を選択してください。</p>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}