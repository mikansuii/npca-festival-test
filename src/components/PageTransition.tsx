import { useEffect, useState, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

export function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState<'fadeIn' | 'idle'>('idle');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('fadeIn');
      setDisplayLocation(location);
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage === 'fadeIn') {
      const timer = setTimeout(() => setTransitionStage('idle'), 400);
      return () => clearTimeout(timer);
    }
  }, [transitionStage]);

  return (
    <div
      key={displayLocation.pathname}
      className="page-transition"
    >
      {children}
    </div>
  );
}
