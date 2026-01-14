import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Lasha Japaridze</span>
            </h1>
            <p className="hero-subtitle">
              Full-Stack Developer | Software Development Student
            </p>
            <p className="hero-description">
              Building scalable web applications with modern technologies. 
              Experienced in React, Node.js, Python, and Java. 
              Currently a 3rd year student at SETU Carlow.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="cta-button primary">
                View My Work
              </a>
              <a href="#contact" className="cta-button secondary">
                Get In Touch
              </a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/LashaJaparidze15" target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
              <a href="mailto:lashajapara68@gmail.com" className="social-link">
                Email
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="avatar-placeholder">
              <span>LJ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}