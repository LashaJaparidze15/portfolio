import './Skills.css'

const skillsData = {
  frontend: ['React', 'JavaScript', 'HTML/CSS', 'Vue.js', 'Tailwind CSS'],
  backend: ['Node.js', 'Python', 'PHP', 'FastAPI', 'Express.js'],
  databases: ['MongoDB', 'MySQL', 'SQLite', 'SQL'],
  other: ['Git', 'Java', 'Assembly', 'Docker', 'Linux', 'C++']
}

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>Skills & Technologies</h2>
          <p>Technologies I work with and expertise I've developed</p>
        </div>

        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <div className="skills-list">
                {skills.map((skill) => (
                  <div key={skill} className="skill-item">
                    <span className="skill-dot"></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="languages">
          <h3>Languages</h3>
          <div className="language-list">
            <div className="language-item">
              <span className="language-name">Georgian</span>
              <span className="language-level">Native</span>
            </div>
            <div className="language-item">
              <span className="language-name">English</span>
              <span className="language-level">C2 - Fluent</span>
            </div>
            <div className="language-item">
              <span className="language-name">Russian</span>
              <span className="language-level">B2 - Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}