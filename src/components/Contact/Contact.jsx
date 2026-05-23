import { useState } from 'react'
import './Contact.css'
import Footer from './Footer'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { siteConfig } from '../../data/config'

const Contact = () => {
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)
  const sectionRef = useScrollReveal(0.1)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus('')

    const formData = new FormData(e.target)
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID

    if (!formspreeId) {
      const name = formData.get('Name')
      const email = formData.get('Email')
      const text = formData.get('text')
      window.location.href = `mailto:${siteConfig.email}?subject=Portfolio contact from ${name}&body=${encodeURIComponent(`From: ${email}\n\n${text}`)}`
      setSending(false)
      return
    }

    try {
      const res = await fetch(formspreeId, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <section id="contact" ref={sectionRef}>
        <div className="contact-inner">
          <div className="contact-header">
            <span className="section-label reveal">Contact</span>
            <h2 className="contact-heading reveal">Get in touch</h2>
            <p className="contact-sub reveal">{siteConfig.contactSubtext}</p>
          </div>

          <form
            className="contact-form reveal"
            onSubmit={handleSubmit}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="Name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="Email"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-msg">Message</label>
              <textarea
                id="contact-msg"
                name="text"
                placeholder="Tell me what you're working on..."
                rows={5}
                required
              />
            </div>

            <div className="form-footer">
              <button type="submit" className="send-btn" disabled={sending}>
                {sending ? 'Sending…' : 'Send message'}
                {!sending && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H6M11 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>

              {status === 'sent' && (
                <p className="form-status success">Message sent — I'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="form-status error">Something went wrong. Try emailing me directly.</p>
              )}
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact