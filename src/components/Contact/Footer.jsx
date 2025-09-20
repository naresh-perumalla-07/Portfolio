import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Naresh Perumalla | All Rights Reserved</p>
        <div className="social-links">
          <a href="#" target="#" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="#" target="#" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:your-email@gmail.com">
            X
          </a>
          <a href="mailto:your-email@gmail.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
