import './Projects.css'
import { projects } from '../../data/projects'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const Projects = () => {
  const sectionRef = useScrollReveal()

  return (
    <section id="projects" ref={sectionRef}>
      <div className="projects-inner">
        <div className="projects-header">
          <span className="section-label reveal">Work</span>
          <h2 className="projects-heading reveal">Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <article
              key={project.num}
              className="project-card reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="card-top">
                <span className="card-num">{project.num}</span>
                <div className="card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.description}</p>
              </div>

              <div className="card-footer">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  <span>View on GitHub</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects