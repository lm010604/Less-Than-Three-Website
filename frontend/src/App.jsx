import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Auditions from './pages/Auditions';
import Contact from './pages/Contact';
import Members from './pages/Members';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auditions" element={<Auditions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/members" element={<Members />} />
      </Routes>
      <Footer />
    </>
  );
}
