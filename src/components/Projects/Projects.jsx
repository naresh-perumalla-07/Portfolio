import Card from "../Card/Card";
import './Projects.css'
import mern from '../../assets/mern.png'
import dsa from '../../assets/dsa.png'
import java from '../../assets/java.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
gsap.registerPlugin(ScrollTrigger)

const Projects=()=>{
  useGSAP(()=>{
        gsap.from("#projects",{
            x:-100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:"#projects",
                scroll:"body",
                scrub:2,
                
                start:"top 60%",
                end:"top 30%"
            }
        })
      })
    return(
        <div id="projects">
            <h2 id="proj-heading">MY PROJECTS</h2>
            <div className="slider">
  <div className="slider-track">
    <Card title="Mern Stack" image={mern}/>
    <Card title="Java" image={java}/>
    <Card title="DSA" image={dsa}/>
    <Card title="Java" image={java}/>
    <Card title="Java" image={java}/>

    {/* duplicate set for infinite loop */}
    <Card title="Mern Stack" image={mern}/>
    <Card title="Java" image={java}/>
    <Card title="DSA" image={dsa}/>
    <Card title="Java" image={java}/>
    <Card title="Java" image={java}/>
  </div>
</div>


        </div>
    )
}

export default Projects;