import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Members } from '@/components/Members';
import { Schedule } from '@/components/Schedule';
import { Access } from '@/components/Access';
import { Footer } from '@/components/Footer';
import { ProjectDetail } from '@/components/ProjectDetail';

function HomePage() {
  return (
    <main>
      <Hero />
      <Projects />
      <Members />
      <Schedule />
      <Access />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-navy-950">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
