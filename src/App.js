import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Experience from './Components/Experience';
import PageNotFound from './Components/PageNotFound';
import Projects from './Components/Projects';
import Services from './Components/Services';
import Skills from './Components/Skills';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Portfolio
        </a>
      </header>
      <nav className='nav'>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path='about' element={<About />} />
              <Route path="experience" element={<Experience />} />
              <Route path="services" element={<Services />} />
              <Route path="skills" element={<Skills />} />
              <Route path="projects" element={<Projects />} />
              <Route path="education" element={<Education />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </Router>


      </nav>
    </div>


  );
}

export default App;
