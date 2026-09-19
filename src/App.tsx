import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />

      <section className='flex h-24 w-full justify-center bg-[var(--color-accent)]'>
        <p className='font-bold'>
          Hello World !
        </p>
      </section>
    </>
  )
}

export default App
