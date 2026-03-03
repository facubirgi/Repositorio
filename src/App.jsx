// En App.jsx
import { useState, useEffect } from 'react'
// ¡Asegurate de importar estos íconos extra para el menú móvil!
import { Sun, Moon, Menu, X, User, Rocket, BarChart, Send } from 'lucide-react'
import { Hero, SobreMiPanel, SkillsPanel, ProjectsPanel, ContactPanel } from './components/Sections'
import { CustomCursor } from './components/CustomCursor'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activePanel, setActivePanel] = useState(null);
  
  // Nuevo estado para controlar el menú hamburguesa en móviles
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Función para navegar desde el menú móvil y cerrarlo automáticamente
  const handleMobileNav = (panel) => {
    setActivePanel(panel);
    setIsMenuOpen(false);
  };

  return (
    <>
      <CustomCursor />
      <div 
        className="app-container crt-effect"
        style={{ boxShadow: `inset 0 0 50px -10px rgba(${isDarkMode ? '139, 92, 246' : '59, 130, 246'}, 0.2)` }}
      >
        <header>
          <h1>Facundo Birgi</h1>
          
          {/* Contenedor para alinear los botones del navbar */}
          <div className="header-actions">
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Cambiar Tema">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Botón Hamburguesa (solo visible en móviles por CSS) */}
            <button 
              className="hamburger-btn" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir Menú"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </header>

        {/* Menú Móvil Overlay */}
        <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-links">
            <button className="mobile-nav-btn" onClick={() => handleMobileNav('sobremi')}>
              <User size={22} /> SOBRE MÍ
            </button>
            <button className="mobile-nav-btn" onClick={() => handleMobileNav('proyectos')}>
              <Rocket size={22} /> PROYECTOS
            </button>
            <button className="mobile-nav-btn" onClick={() => handleMobileNav('skills')}>
              <BarChart size={22} /> SKILLS
            </button>
            <button className="mobile-nav-btn" onClick={() => handleMobileNav('contacto')}>
              <Send size={22} /> CONTACTO
            </button>
          </div>
        </div>

        <main>
          {/* Si el menú móvil está abierto, ocultamos la home para que no interfiera */}
          {!activePanel && !isMenuOpen && <Hero setActivePanel={setActivePanel} />}
          {activePanel === 'sobremi' && <SobreMiPanel setActivePanel={setActivePanel} />}
          {activePanel === 'skills' && <SkillsPanel setActivePanel={setActivePanel} />}
          {activePanel === 'proyectos' && <ProjectsPanel setActivePanel={setActivePanel} />}
          {activePanel === 'contacto' && <ContactPanel setActivePanel={setActivePanel} />}
        </main>
      </div>
    </>
  )
}

export default App