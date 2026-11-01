import { createContext } from 'react';
import type { Project } from '@/lib/data';
import type { ExhibitSpot, FacilitySpot } from '@/lib/festivalData';

export type FestivalData = {
  projects: Project[];
  exhibitSpots: ExhibitSpot[];
  facilitySpots: FacilitySpot[];
  setProjects: (projects: Project[]) => void;
  setExhibitSpots: (spots: ExhibitSpot[]) => void;
  setFacilitySpots: (spots: FacilitySpot[]) => void;
  reset: () => void;
};

export const FestivalDataContext = createContext<FestivalData | null>(null);