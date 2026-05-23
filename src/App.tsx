import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Industries from './pages/Industries';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Partners from './pages/Partners';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Security from './pages/Security';
import Status from './pages/Status';
import Safety from './pages/Safety';
import Sla from './pages/Sla';
import FoundationalModels from './pages/FoundationalModels';
import PredictiveAnalytics from './pages/PredictiveAnalytics';
import NlpAutomation from './pages/NlpAutomation';
import ComputerVision from './pages/ComputerVision';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="foundational-models" element={<FoundationalModels />} />
            <Route path="predictive-analytics" element={<PredictiveAnalytics />} />
            <Route path="nlp-automation" element={<NlpAutomation />} />
            <Route path="computer-vision" element={<ComputerVision />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:id" element={<ServiceDetail />} />
            <Route path="industries" element={<Industries />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="careers" element={<Careers />} />
            <Route path="partners" element={<Partners />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="security" element={<Security />} />
            <Route path="safety" element={<Safety />} />
            <Route path="sla" element={<Sla />} />
            <Route path="status" element={<Status />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
