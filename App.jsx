import { Toaster } from '@/components/ui/toaster';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import HowItWorksPage from '@/pages/HowItWorksPage';
import WhyPeruPage from '@/pages/WhyPeruPage';
import Contact from '@/pages/Contact';
import Industries from '@/pages/Industries';
import IndustryDetail from '@/pages/IndustryDetail';
import SeoLanding from '@/pages/SeoLanding';
import Legal from '@/pages/Legal';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ForgotPassword from '@/pages/ForgotPassword';
import ResetPassword from '@/pages/ResetPassword';
import PageNotFound from '@/lib/PageNotFound';

const landingRoutes = [
  ['nearshore-staffing', 'nearshore-staffing'], ['peruvian-talent', 'peruvian-talent'],
  ['outsourcing-peru', 'outsourcing-peru'], ['remote-staffing', 'remote-staffing'],
  ['staff-augmentation', 'staff-augmentation'],
  ['us/nearshore-staffing-miami', 'nearshore-staffing-miami'], ['us/peruvian-talent', 'peruvian-talent'],
  ['us/remote-staffing-miami', 'remote-staffing-miami'], ['us/staff-augmentation-miami', 'staff-augmentation-miami'],
  ['us/bilingual-talent-miami', 'bilingual-talent-miami'],
  ['es/talento-peruano', 'talento-peruano'], ['es/outsourcing-peru', 'outsourcing-peru'],
  ['es/staffing-internacional', 'staffing-internacional'], ['es/contratacion-remota', 'contratacion-remota'],
];

export default function App() {
  return <BrowserRouter><ScrollToTop /><Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      {landingRoutes.map(([path, slug]) => <Route key={path} path={`/${path}`} element={<SeoLanding slug={slug} />} />)}
      <Route path="/how-it-works" element={<HowItWorksPage />} />
      <Route path="/why-peru" element={<WhyPeruPage />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/industries/:slug" element={<IndustryDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Legal mode="privacy" />} />
      <Route path="/terms" element={<Legal mode="terms" />} />
      <Route path="/us" element={<Home />} />
      <Route path="/us/how-it-works" element={<HowItWorksPage />} />
      <Route path="/us/why-peru" element={<WhyPeruPage />} />
      <Route path="/us/industries" element={<Industries />} />
      <Route path="/us/industries/:slug" element={<IndustryDetail />} />
      <Route path="/us/contact" element={<Contact />} />
      <Route path="/es" element={<Home />} />
      <Route path="/es/como-funciona" element={<HowItWorksPage />} />
      <Route path="/es/por-que-peru" element={<WhyPeruPage />} />
      <Route path="/es/industrias" element={<Industries />} />
      <Route path="/es/industrias/:slug" element={<IndustryDetail />} />
      <Route path="/es/contacto" element={<Contact />} />
      <Route path="/nearshore-staffing-miami" element={<Navigate to="/us/nearshore-staffing-miami" replace />} />
      <Route path="/remote-staffing-miami" element={<Navigate to="/us/remote-staffing-miami" replace />} />
      <Route path="/staff-augmentation-miami" element={<Navigate to="/us/staff-augmentation-miami" replace />} />
      <Route path="/bilingual-talent-miami" element={<Navigate to="/us/bilingual-talent-miami" replace />} />
    </Route>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/reset-password" element={<ResetPassword />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes><Toaster /></BrowserRouter>;
}
