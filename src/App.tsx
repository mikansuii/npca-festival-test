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

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
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
            </Routes>
          </PageTransition>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
