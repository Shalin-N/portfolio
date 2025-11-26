import { useState } from 'react'
import './App.css'
import Pitch from './components/Pitch'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import Role from './components/Role'
import Questions from './components/Questions'
import ParticlesBackground from './components/ParticlesBackground'

function App() {
  const [currentPage, setCurrentPage] = useState(0)

  const pages = [
    { name: 'Pitch', component: <Pitch /> },
    { name: 'Experience', component: <Timeline /> },
    { name: 'Skills', component: <Skills /> },
    { name: 'Role', component: <Role /> },
    { name: 'Questions', component: <Questions /> }
  ]

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex)
  }

  return (
    <div className="App">
      <ParticlesBackground />
      
      <nav className="navigation">
        <div className="nav-items">
          {pages.map((page, index) => (
            <button
              key={index}
              className={`nav-button ${currentPage === index ? 'active' : ''}`}
              onClick={() => goToPage(index)}
            >
              <span className="nav-label">{page.name}</span>
            </button>
          ))}
        </div>
      </nav>

      <main className="page-container">
        <div className={`page active`}>
          {pages[currentPage].component}
        </div>
      </main>
    </div>
  )
}

export default App
