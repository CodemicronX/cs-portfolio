import { GitFork } from 'lucide-react'
import { profile } from '../../data/profile'

export function Contact() {
  return (
    <section className="contact section" id="contact" tabIndex={-1} aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-panel">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Let's Connect.</h2>
            <p>I’m open to conversations about software projects, academic opportunities, and collaboration.</p>
          </div>
          <a className="button button-primary" href={profile.github}><GitFork size={19} aria-hidden="true" /> {profile.handle} on GitHub</a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="brand"><span className="brand-mark" aria-hidden="true">KA</span><span>{profile.name}</span></div>
        <p>{profile.location}</p>
        <a href="#home" className="button button-quiet">Back to top</a>
      </div>
    </footer>
  )
}
