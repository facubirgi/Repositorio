import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, Linkedin, X, Download, User, BarChart, Rocket, Send } from 'lucide-react';
import { portfolioData } from '../data';

// --- Home Screen: Botones de Esquina y Tu Foto Central ---
// --- Home Hero con Botones de Esquina y Tu Foto Central ---
export const Hero = ({ setActivePanel }) => (
  <section className="home-hero">
    {/* Contenedor central absoluto */}
    <div className="hero-center-group">
      <div className="profile-pic-container">
        <img src="/perfil.jpg" alt="Mi foto de perfil" className="profile-pic" />
      </div>
      <div className="hero-text-block">
        {/* Título avanzado y premium */}
        <h2>{portfolioData.title}</h2>
        <p>{portfolioData.name} - Conoce más acerca de mí</p>
      </div>
    </div>
    
    {/* Botones de Esquina con iconos avanzados y microinteracciones */}
    <button className="corner-btn top-left" onClick={() => setActivePanel('sobremi')}>
      <User size={20} /> SOBRE MI
    </button>
    <button className="corner-btn top-right" onClick={() => setActivePanel('proyectos')}>
      <Rocket size={20} /> PROYECTOS
    </button>
    <button className="corner-btn bottom-left" onClick={() => setActivePanel('skills')}>
      <BarChart size={20} /> SKILLS
    </button>
    <button className="corner-btn bottom-right" onClick={() => setActivePanel('contacto')}>
      <Send size={20} /> CONTACTO
    </button>
  </section>
);

// Plantilla base para todos los paneles de esquina
const CornerPanelBase = ({ title, children, setActivePanel, icon: Icon }) => (
  <div className="panel-overlay">
    <div className="panel-content fade-in">
      <header className="panel-header">
        <div className="panel-title-block">
          {Icon && <Icon size={24} style={{ color: '#8b5cf6' }} />}
          <h2>{title}</h2>
        </div>
        <button className="close-panel" onClick={() => setActivePanel(null)}>
          <X size={28} />
        </button>
      </header>
      <div className="panel-body">
        {children}
      </div>
    </div>
  </div>
);

export const SobreMiPanel = ({ setActivePanel }) => (
  <CornerPanelBase title="Sobre Mí" setActivePanel={setActivePanel} icon={User}>
    <div className="section-intro">
      <h3 className="section-heading">Conoce mi trayectoria</h3>
      <p className="about-text">
        {portfolioData.about}
      </p>
      <div className="about-actions">
        <a href={portfolioData.cv_link} target="_blank" rel="noreferrer" className="primary-btn">
          <Download size={20} /> Descargar CV
        </a>
      </div>
    </div>
  </CornerPanelBase>
);

// En Section.jsx
export const SkillsPanel = ({ setActivePanel }) => {
  const totalSkills = portfolioData.skills.length;
  // El radio define qué tan amplio es el círculo 3D
  const radius = 180; 

  return (
    <CornerPanelBase title="Habilidades" setActivePanel={setActivePanel} icon={BarChart}>
      <div className="section-intro">
        <h3 className="section-heading">Mi Stack Tecnológico</h3>
        <p className="section-subheading">
          Herramientas y lenguajes con los que construyo soluciones.
        </p>
      </div>

      <div className="scene-3d-container">
        <div className="carousel-3d">
          {portfolioData.skills.map((skill, index) => {
            // Calculamos el ángulo para formar un círculo perfecto
            const angle = (360 / totalSkills) * index;
            
            return (
              <div 
                key={index} 
                className="skill-3d-item"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`
                }}
                title={skill.name}
              >
                <img src={skill.iconUrl} alt={skill.name} />
              </div>
            );
          })}
        </div>
      </div>
    </CornerPanelBase>
  );
};

export const ProjectsPanel = ({ setActivePanel }) => {
  return (
    <CornerPanelBase title="Proyectos" setActivePanel={setActivePanel} icon={Rocket}>
      <div className="section-intro">
        <h3 className="section-heading">Mi trabajo reciente</h3>
        <p className="section-subheading">
          Una selección de proyectos donde aplico mis conocimientos para crear soluciones reales.
        </p>
      </div>

      <div className="projects-grid-panel">
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="project-card">
            
            <div className="project-info">
              <h4 className="project-title">{project.name}</h4>
              <p className="project-desc">{project.description}</p>
              
              {/* Etiquetas de tecnologías */}
              <div className="project-tech-tags">
                {project.techs.split(', ').map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-links">
              <a href={project.repo} target="_blank" rel="noreferrer" className="project-link">
                <Github size={18} /> Código
              </a>
              {project.link !== "#" && (
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                  <ExternalLink size={18} /> Demo
                </a>
              )}
            </div>
            
          </div>
        ))}
      </div>
    </CornerPanelBase>
  );
};

// En Section.jsx
// En Section.jsx
export const ContactPanel = ({ setActivePanel }) => (
  <CornerPanelBase title="Contacto" setActivePanel={setActivePanel} icon={Send}>
    <div className="contact-content-wrapper"> {/* Nuevo contenedor para agrupar textos */}
      <h3 className="contact-heading">Hablemos de tu próximo proyecto</h3> {/* Clase específica para el h3 */}
      <p className="contact-subheading">
        ¿Tienes una idea en mente, buscas un desarrollador Fullstack para tu equipo o simplemente quieres conectar? ¡Escríbeme!
      </p>
    </div>

    <div className="contact-links-grid">
      <a href={`mailto:${portfolioData.contact.email}`} className="contact-card mail">
        <div className="contact-icon-wrapper">
          <Mail size={24} />
        </div>
        <div className="contact-info">
          <span className="contact-label">Email</span>
          <span className="contact-value">Envíame un correo</span>
        </div>
      </a>

      <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="contact-card linkedin">
        <div className="contact-icon-wrapper">
          <Linkedin size={24} />
        </div>
        <div className="contact-info">
          <span className="contact-label">LinkedIn</span>
          <span className="contact-value">Conectemos</span>
        </div>
      </a>

      <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="contact-card github">
        <div className="contact-icon-wrapper">
          <Github size={24} />
        </div>
        <div className="contact-info">
          <span className="contact-label">GitHub</span>
          <span className="contact-value">Mira mi código</span>
        </div>
      </a>
    </div>
  </CornerPanelBase>
);