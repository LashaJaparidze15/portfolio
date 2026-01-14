import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // You can integrate with EmailJS, Formspree, or your own backend here
    console.log('Form data:', formData)
    setSubmitted(true)
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Let's talk about your next project</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>Email</h3>
              <a href="mailto:lashajapara68@gmail.com">lashajapara68@gmail.com</a>
            </div>
            <div className="info-item">
              <h3>Location</h3>
              <p>Carlow, Ireland</p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>+353 (0) 83 294 7924</p>
            </div>
            <div className="info-item">
              <h3>Connect</h3>
              <div className="contact-links">
                <a href="https://github.com/LashaJaparidze15" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}