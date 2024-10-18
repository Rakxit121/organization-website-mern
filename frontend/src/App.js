import { Route, BrowserRouter as Router } from 'react-router-dom';
import AdminLoginPage from './admin/AdminLoginPage';
import AdminPage from './admin/AdminPage';
import SettingsPage from './admin/SettingsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';

function App() {
  return (
    <Router>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/services' element={<ServicesPage />} />
      <Route path='/projects' element={<ProjectsPage />} />
      <Route path='/testimonials' element={<TestimonialsPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/admin/login' element={<AdminLoginPage />} />
      <Route path='/admin/dashboard' element={<AdminPage />} />
      <Route path='/admin/settings' element={<SettingsPage />} />
    </Router>
  );
}

export default App;
