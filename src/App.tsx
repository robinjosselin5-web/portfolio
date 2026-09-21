import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Skills from './components/Skills'
import SocialSection from './components/SocialSection'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Skills />
        <Journey />
        <SocialSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
