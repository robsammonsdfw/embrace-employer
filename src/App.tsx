import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import EmployerHeader from './components/EmployerHeader';
import EmployerHero from './components/EmployerHero';
import AudienceSelector from './components/AudienceSelector';
import ProgramTracks from './components/ProgramTracks';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function EmployerPortal() {
  return (
    <div className="min-h-screen flex flex-col">
      <EmployerHeader />
      <main className="flex-grow">
        <EmployerHero />
        <AudienceSelector />
        <ProgramTracks />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<EmployerPortal />} />
      </Routes>
    </BrowserRouter>
  );
}
