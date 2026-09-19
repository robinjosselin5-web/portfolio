import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Skills />
      </main>
    </>
  )
}

export default App
