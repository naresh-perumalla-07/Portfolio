import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Nav from './components/Navbar/Nav'
import Projects from './components/Projects/Projects'
import { useEffect, useRef } from 'react'

function App() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    let mouseX = 0, mouseY = 0
    let cursorX = 0, cursorY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15
      cursorY += (mouseY - cursorY) * 0.15
      cursor.style.transform = `translate(${cursorX - 4}px, ${cursorY - 4}px)`
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove)
    animate()

    // hide on touch devices
    if ('ontouchstart' in window) {
      cursor.style.display = 'none'
    }

    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor-dot" />
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
