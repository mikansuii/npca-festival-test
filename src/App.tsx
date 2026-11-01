import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PageTransition } from '@/components/PageTransition';
import { CursorGlow } from '@/components/CursorGlow';
import { Home } from '@/pages/Home';
import { Exhibits } from '@/pages/Exhibits';
import { Event } from '@/pages/Event';
import { Navigation } from '@/pages/Navigation';
import { Bushi } from '@/pages/Bushi';
import { ProjectDetail } from '@/pages/ProjectDetail';
import { Admin } from '@/pages/Admin';
import { FestivalDataProvider } from '@/lib/festivalData';

function App() {
  return (
    <BrowserRouter>
      <FestivalDataProvider>
        <div className="relative min-h-screen bg-white">
          <CursorGlow />
          <div className="relative z-10">
            <Header />
            <Breadcrumb />
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exhibits" element={<Exhibits />} />
                <Route path="/exhibits/:slug" element={<ProjectDetail />} />
                <Route path="/event" element={<Event />} />
                <Route path="/navigation" element={<Navigation />} />
                <Route path="/bushi" element={<Bushi />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </PageTransition>
            <Footer />
          </div>
        </div>
      </FestivalDataProvider>
    </BrowserRouter>
  );
}

export default App;
