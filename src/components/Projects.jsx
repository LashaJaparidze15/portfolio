import './Projects.css'

const projectsData = [
  {
    id: 1,
    title: 'DevConnect',
    description: 'Full-stack developer networking platform with real-time chat, user profiles, and direct messaging. Built with React, Node.js, MongoDB, and Socket.io for seamless real-time communication.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express'],
    link: 'https://github.com/LashaJaparidze15/devconnect',
    featured: true,
    color: '#667eea'
  },
  {
    id: 2,
    title: 'Buddy - Smart Daily Planner',
    description: 'Intelligent task management application with integrated weather, news, and stock market data. Features activity tracking and API integrations with a Python/FastAPI backend.',
    tags: ['React', 'Python', 'FastAPI', 'Task Management', 'API'],
    link: 'https://github.com/LashaJaparidze15/Buddy',
    featured: true,
    color: '#764ba2'
  },
  {
    id: 3,
    title: 'Car Rental Management',
    description: 'Comprehensive car rental system with customer management, inventory tracking, and booking system. Built with PHP, MySQL, and modern web technologies.',
    tags: ['PHP', 'MySQL', 'Database', 'Web Development'],
    link: 'https://github.com/LashaJaparidze15/car-rental-company',
    featured: false,
    color: '#f093fb'
  },
  {
    id: 4,
    title: 'Purchase Manager',
    description: 'Java-based order and inventory management system with vendor management. Features database integration and a user-friendly GUI built with Swing.',
    tags: ['Java', 'MySQL', 'Swing', 'Database'],
    link: 'https://github.com/LashaJaparidze15/purchase-manager',
    featured: false,
    color: '#4facfe'
  },
  {
    id: 5,
    title: 'Surviving the Jungle',
    description: 'Text-based adventure game written in 68000 Assembly language. Demonstrates low-level programming and game logic implementation.',
    tags: ['Assembly', 'Game Dev', '68000'],
    link: 'https://github.com/LashaJaparidze15/surviving-the-jungle',
    featured: false,
    color: '#43e97b'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Showcasing my best work in web development and software engineering</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-header" style={{ borderTopColor: project.color }}>
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag" style={{ borderColor: project.color }}>
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}