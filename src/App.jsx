import About from './components/About'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import NeuralBackground from './components/NeuralBackground'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Writing from './components/Writing'
import { useActiveSection } from './hooks/useActiveSection'
import { useTheme } from './hooks/useTheme'

const SECTION_IDS = [
  'home',
  'about',
  'experience',
  'skills',
  'projects',
  'certifications',
  'writing',
  'contact',
]

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <NeuralBackground />
      <Navbar activeId={activeId} theme={theme} onToggleTheme={toggleTheme} />

      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Writing />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
