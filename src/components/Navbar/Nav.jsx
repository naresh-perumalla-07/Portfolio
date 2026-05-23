import React, { useEffect, useState } from 'react'
import './Nav.css'
import { Link } from 'react-scroll'
import { navItems } from '../../data/siteData'
import { siteConfig } from '../../data/config'

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    const timer = setTimeout(() => setMounted(true), 600)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const closeMenu = () => setMobileOpen(false)

  return (
    <>
      <nav className={scrolled ? 'nav-scrolled' : ''}>
        <div className={`nav-logo ${mounted ? 'nav-in' : ''}`}>
          <Link to="home" smooth={true} duration={400} onClick={closeMenu}>
            {siteConfig.initials}
          </Link>
        </div>
        <ul className="nav-links desktop">
          {navItems.map((item, i) => (
            <li
              key={item.id}
              className={mounted ? 'nav-in' : ''}
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              <Link to={item.id} activeClass="nav-active" spy={true} smooth={true} duration={400}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className={`nav-toggle ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'mobile-open' : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <Link to={item.id} smooth={true} duration={400} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Nav
