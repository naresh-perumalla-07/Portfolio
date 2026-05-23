import './About.css'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { siteConfig } from '../../data/config'
import { skillGroups } from '../../data/siteData'

const About = () => {
  const sectionRef = useScrollReveal()

  return (
    <section id="about" ref={sectionRef}>
      <div className="about-inner">
        {/* Left col — heading + bio */}
        <div className="about-left">
          <span className="section-label reveal">About</span>
          <h2 className="about-heading reveal">
            {siteConfig.aboutHeading.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h2>
          <p className="about-bio reveal">{siteConfig.bio}</p>
        </div>

        {/* Right col — skills */}
        <div className="about-right">
          <span className="section-label reveal">Stack</span>
          <div className="skill-groups">
            {skillGroups.map((group, gi) => (
              <div key={gi} className="skill-group reveal" style={{ transitionDelay: `${gi * 80}ms` }}>
                <span className="skill-group-label">{group.label}</span>
                <div className="skill-chips">
                  {group.items.map((item) => (
                    <span key={item} className="skill-chip">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About