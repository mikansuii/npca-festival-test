import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { Exhibits } from '@/pages/Exhibits';
import { Event } from '@/pages/Event';
import { Navigation } from '@/pages/Navigation';
import { Bushi } from '@/pages/Bushi';
import { ProjectDetail } from '@/pages/ProjectDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exhibits" element={<Exhibits />} />
          <Route path="/exhibits/:slug" element={<ProjectDetail />} />
          <Route path="/event" element={<Event />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/bushi" element={<Bushi />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
