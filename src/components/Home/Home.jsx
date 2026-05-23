import './Home.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { siteConfig } from '../../data/config'
import { marqueeItems } from '../../data/siteData'

const Home = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.3 })
    tl.from('.hero-label', { y: 16, opacity: 0, duration: 0.7, ease: 'power3.out' })
      .from('.hero-first', { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.3')
      .from('.hero-last', { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.7')
      .from('.hero-sub', { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
      .from('.cta-primary', { y: 16, opacity: 0, duration: 0.5, ease: 'power3.out' }, '-=0.3')
      .from('.cta-ghost', { y: 16, opacity: 0, duration: 0.5, ease: 'power3.out' }, '-=0.35')
      .from('.hero-scroll', { opacity: 0, duration: 0.6 }, '-=0.15')
      .from('.marquee-section', { opacity: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3')
  })

  const [firstName, ...lastParts] = siteConfig.name.split(' ')
  const lastName = lastParts.join(' ')

  const marqueeContent = marqueeItems.map((item, i) => (
    <span key={i} className="marquee-item">
      {item} <span className="marquee-dot">·</span>
    </span>
  ))

  return (
    <section id="home">
      <div className="hero-glow"></div>

      <div className="hero-inner">
        <p className="hero-label">
          <span className="hero-label-line"></span>
          {siteConfig.role}
        </p>
        <h1 className="hero-name">
          <span className="hero-first">{firstName}</span>
          <span className="hero-last">{lastName}</span>
        </h1>
        <p className="hero-sub">
          I design and build intelligent, user-first products — from
          React interfaces to Python-driven AI pipelines and RAG systems.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="cta-primary">
            <span>View Projects</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L7 13M7 13L2 8M7 13L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="cta-ghost">
            GitHub ↗
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="scroll-label">scroll</span>
        <div className="scroll-line"></div>
      </div>

      <div className="marquee-section">
        <div className="marquee-track">
          <div className="marquee-content">{marqueeContent}{marqueeContent}</div>
        </div>
      </div>
    </section>
  )
}

export default Home