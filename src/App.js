import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/20-React-Portfolio' element={<About />} />
        <Route path="/20-React-Portfolio/about" element={<About />} />
        <Route path="/20-React-Portfolio/portfolio" element={<Portfolio />} />
        <Route path="/20-React-Portfolio/contact" element={<Contact />} />
        <Route path="/20-React-Portfolio/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
