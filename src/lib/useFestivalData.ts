import { useContext } from 'react';
import { FestivalDataContext } from '@/lib/festivalDataContext';

export function useFestivalData() {
  const data = useContext(FestivalDataContext);
  if (!data) throw new Error('useFestivalData must be used within FestivalDataProvider');
  return data;
}