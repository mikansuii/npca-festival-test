import { useEffect, useState, type ReactNode } from 'react';
import { projects as initialProjects } from '@/lib/data';
import { FestivalDataContext, type FestivalData } from '@/lib/festivalDataContext';

export type ExhibitSpot = {
  id: string;
  projectId: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type FacilitySpot = {
  id: string;
  label: string;
  kind: 'reception' | 'exit' | 'board';
  x: number;
  y: number;
  w: number;
  h: number;
};

const initialExhibitSpots: ExhibitSpot[] = [
  { id: 'spot-1', projectId: '1', x: 8, y: 18, w: 28, h: 20 },
  { id: 'spot-2', projectId: '2', x: 42, y: 18, w: 28, h: 20 },
  { id: 'spot-3', projectId: '3', x: 8, y: 48, w: 28, h: 20 },
  { id: 'spot-4', projectId: '4', x: 42, y: 48, w: 28, h: 20 },
  { id: 'spot-5', projectId: '5', x: 8, y: 76, w: 28, h: 14 },
];

const initialFacilitySpots: FacilitySpot[] = [
  { id: 'reception', label: '受付', kind: 'reception', x: 84, y: 82, w: 12, h: 10 },
  { id: 'exit', label: '出口', kind: 'exit', x: 4, y: 82, w: 12, h: 10 },
  { id: 'board', label: '黒板', kind: 'board', x: 93, y: 10, w: 5, h: 80 },
];

const storageKey = 'npca-festival-content-v1';

function readSavedData() {
  try {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed.projects) && Array.isArray(parsed.exhibitSpots) && Array.isArray(parsed.facilitySpots)) {
        return parsed as Pick<FestivalData, 'projects' | 'exhibitSpots' | 'facilitySpots'>;
      }
    }
  } catch {
    window.localStorage.removeItem(storageKey);
  }
  return {
    projects: initialProjects,
    exhibitSpots: initialExhibitSpots,
    facilitySpots: initialFacilitySpots,
  };
}

export function FestivalDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState(readSavedData);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(data));
  }, [data]);

  const value: FestivalData = {
    ...data,
    setProjects: (projects) => setData((current) => ({ ...current, projects })),
    setExhibitSpots: (exhibitSpots) => setData((current) => ({ ...current, exhibitSpots })),
    setFacilitySpots: (facilitySpots) => setData((current) => ({ ...current, facilitySpots })),
    reset: () => {
      window.localStorage.removeItem(storageKey);
      setData({
        projects: initialProjects,
        exhibitSpots: initialExhibitSpots,
        facilitySpots: initialFacilitySpots,
      });
    },
  };

  return <FestivalDataContext.Provider value={value}>{children}</FestivalDataContext.Provider>;
}