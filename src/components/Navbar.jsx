import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <a href="#home" onClick={() => scrollToSection('home')}>
            <span className="logo-icon">{'<'}</span>
            LJ
            <span className="logo-icon">{'/'}</span>
            <span className="logo-icon">{'>'}</span>
          </a>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>

        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}