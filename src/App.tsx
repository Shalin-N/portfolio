import './App.css'
import Waves from './components/Waves'
import Skills from './components/Skills'

function App() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      <nav className="nav">
        <button onClick={() => scrollTo('top')} className="nav-brand">SN</button>
        <div className="nav-links">
          <button onClick={() => scrollTo('skills')}>Skills</button>
        </div>
      </nav>

      <section id="top" className="hero">
        <Waves />
        <div className="hero-content">
          <h1>Shalin Naidoo</h1>
        </div>
        <button className="hero-scroll" onClick={() => scrollTo('skills')} aria-label="Scroll down">
          <span />
        </button>
      </section>

      <section id="skills" className="section">
        <Skills />
      </section>

      <footer className="footer">
        <span>Shalin Naidoo · {new Date().getFullYear()}</span>
      </footer>
    </div>
  )
}

export default App
