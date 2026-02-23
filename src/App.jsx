import './App.css';
import { Routes, Route } from 'react-router';
import useReveal from './hooks/useReveal';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  useReveal();

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/a-propos" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
