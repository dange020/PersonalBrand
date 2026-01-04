import Terminal from './components/Terminal';
import ProfileImg from './assets/profile.png';
import { Briefcase, Cpu, Users } from 'lucide-react';
import './App.css'

function App() {
  return (
    <div className="app-container">
      <main className="container">

        <div className="hero-section">
          <div className="profile-container">
            <img src={ProfileImg} alt="Pablo Carrasco" className="profile-img" />
          </div>

          <div className="hero-content">
            <h1>Pablo Carrasco González</h1>
            <h2>Project Manager <span className="highlight">·</span> Digital Transformation</h2>
            <p className="hero-bio">
              Analizo datos y optimizo procesos para transformar la incertidumbre en resultados medibles.
            </p>

            <div className="hero-highlights">
              <div className="highlight-item">
                <span className="icon"><Briefcase size={18} /></span>
                <span>Implantación ERP Multi-compañía</span>
              </div>
              <div className="highlight-item">
                <span className="icon"><Cpu size={18} /></span>
                <span>Automatización de Procesos</span>
              </div>
              <div className="highlight-item">
                <span className="icon"><Users size={18} /></span>
                <span>Liderazgo & Gestión del Cambio</span>
              </div>
            </div>
          </div>
        </div>

        <Terminal />

      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Pablo Carrasco. Built with React & Coffee.</p>
      </footer>
    </div>
  )
}

export default App
