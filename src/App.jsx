import { Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import Experience from './pages/Experience/Experience'
import Education from './pages/Education/Education'
import Skills from './pages/Skills/Skills'

function App() {

  return (
   <>
    <NavBar/>
    <div className='mainContent'>
    <Routes>
      <Route path="/" element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/experience" element={<Experience/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/skills" element={<Skills/>}/>
    </Routes>
    </div>
   </>
  )
}

export default App