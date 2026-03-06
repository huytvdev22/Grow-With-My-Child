import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Timeline } from './pages/Timeline';
import { Diary } from './pages/Diary';
import { Gallery } from './pages/Gallery';
import { GrowthTracker } from './pages/GrowthTracker';
import { Letters } from './pages/Letters';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="diary" element={<Diary />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="growth" element={<GrowthTracker />} />
          <Route path="letters" element={<Letters />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
