import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Discovery from './pages/Discovery';
import SystemDetail from './pages/SystemDetail';
import Systems from './pages/Systems';
import DiscoverySuccess from './pages/DiscoverySuccess';
import Process from './components/Process';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="systems" element={<Systems />} />
        <Route path="systems/:slug" element={<SystemDetail />} />

        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="discovery" element={<Discovery />} />
        <Route path="discovery/success" element={<DiscoverySuccess />} />
        <Route element={<Process />} path="/process" />
      </Route>
    </Routes>
  );
}