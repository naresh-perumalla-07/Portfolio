import './Footer.css'
import { siteConfig } from '../../data/config'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer id="footer">
      <div className="footer-inner">
        <span className="footer-copy">
          © {year} {siteConfig.name}
        </span>
        <span className="footer-heart">
          Made with <span className="heart">♥</span> and lots of coffee
        </span>
        <div className="footer-links">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a href={`mailto:${siteConfig.email}`} className="footer-link">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
