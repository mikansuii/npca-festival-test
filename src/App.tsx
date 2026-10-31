import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Members } from '@/components/Members';
import { Schedule } from '@/components/Schedule';
import { Access } from '@/components/Access';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy-950">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Members />
        <Schedule />
        <Access />
      </main>
      <Footer />
    </div>
  );
}

export default App;
