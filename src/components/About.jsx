import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I'm a third-year Software Development student at SETU Carlow with a passion for and hands-on experience in both front-end and back-end technologies, I love solving complex problems and creating elegant solutions.
            </p>
            <p>
              Beyond coding, I've earned recognition for academic excellence including being a national essay writing competition winner 
              and a national intellectual games champion. I'm also an active member of the Jiu-Jitsu club at my university.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <h4>Education</h4>
                <p>SETU Carlow - B.Sc Software Development (2023-Present)</p>
                <p className="small">First Class Honours - 72.83%</p>
              </div>
              <div className="highlight-item">
                <h4>Experience</h4>
                <ul>
                  <li>Freelance Translator - Translation.ie (Jan 2025-Present)</li>
                  <li>Warehouse Worker - Team Obair Dublin (Jun 2024-Present)</li>
                  <li>Waiter - Mimosa Bar de Tapas (Mar-May 2024)</li>
                </ul>
              </div>
            </div>

            <div className="achievements">
              <h3>Key Achievements</h3>
              <ul>
                <li> National essay writing competition winner</li>
                <li> National intellectual games "Battle of Brains" winner</li>
                <li> National golden medal for academic excellence</li>
              </ul>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-box">
              <h3>5+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-box">
              <h3>6</h3>
              <p>Programming Languages</p>
            </div>
            <div className="stat-box">
              <h3>3</h3>
              <p>Languages Spoken</p>
            </div>
            <div className="stat-box">
              <h3>2+</h3>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
