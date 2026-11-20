import { LazyMotion, domAnimation, MotionConfig } from 'motion/react'
import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Achievements } from './components/sections/Achievements'
import { Projects, SpaceApps } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { CertificateGallery } from './components/certificates/CertificateGallery'
import { Contact, Footer } from './components/sections/Contact'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <Header />
        <main id="main" tabIndex={-1}>
          <Hero />
          <About />
          <Achievements />
          <SpaceApps />
          <Projects />
          <Skills />
          <CertificateGallery />
          <Contact />
        </main>
        <Footer />
      </LazyMotion>
    </MotionConfig>
  )
}
