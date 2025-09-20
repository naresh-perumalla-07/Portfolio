import React, { useRef } from 'react'
import './Nav.css'
import {Link} from 'react-scroll'
import {useGSAP} from '@gsap/react'

import gsap from 'gsap'

const Nav = () => {

    const menu=useRef()

    const mobile=useRef()

    useGSAP(()=>{
        let t1=gsap.timeline()
        t1.from("nav h2",{
            y:-100,
            duration:1,
            opacity:0
        })
        t1.from("nav ul li",{
            y:-100,
            duration:1,
            opacity:0
        })
    })
     
  return (
    <nav>
        <h2>PORTFOLIO</h2>
        <ul className='desktop'>
            <li><Link to='home' activeClass='active' spy={true} smooth={true} duration={400}>HOME</Link></li>
            <li><Link to='about'activeClass='active' spy={true} smooth={true} duration={400}>ABOUT</Link></li>
            <li><Link to='projects'activeClass='active' spy={true} smooth={true} duration={400}>PROJECTS</Link></li>
            <li><Link to='contact'activeClass='active' spy={true} smooth={true} >CONTACT</Link></li>
        </ul>
        <div className='hambur' ref={menu} onClick={()=>{
            mobile.current.classList.toggle("activemobile")
            menu.current.classList.toggle("activeham")
        }}>
            <div className="ham"></div>
            <div className="ham"></div>
            <div className="ham"></div>
        </div>
        <ul className='mobile' ref={mobile}>
            <li><Link to='home' activeClass='active' spy={true} smooth={true} duration={400}>HOME</Link></li>
            <li><Link to='about'activeClass='active' spy={true} smooth={true} duration={400}>ABOUT</Link></li>
            <li><Link to='card'activeClass='active' spy={true} smooth={true} duration={400}>PROJECTS</Link></li>
            <li><Link to='contact'activeClass='active' spy={true} smooth={true} duration={400}>CONTACT</Link></li>
        </ul>

      
    </nav>
  )
}

export default Nav
