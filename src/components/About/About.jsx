
import Card from '../Card/Card'
import './About.css'
import mern from '../../assets/mern.png'
import dsa from '../../assets/dsa.png'
import java from '../../assets/java.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
gsap.registerPlugin(ScrollTrigger)


const About=()=>{
    useGSAP(()=>{
        gsap.from(".circle",{
            x:-100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".circle",
                scroll:"body",
                scrub:2,
                
                start:"top 60%",
                end:"top 30%"
            }
        })
        gsap.from(".line",{
            x:-100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".line",
                scroll:"body",
                scrub:2,
            
                start:"top 60%",
                end:"top 30%"
            }
        })
        gsap.from(".about-details h1",{
            x:-100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".about-details h1",
                scroll:"body",
                scrub:2,
             
                start:"top 60%",
                end:"top 30%"
            }
        })
        gsap.from(".about-details ul",{
            y:100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".about-details ul",
                scroll:"body",
                scrub:2,
               
                start:"top 60%",
                end:"top 30%"
            }
        })
        gsap.from(".right-about",{
            x:100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".right-about",
                scroll:"body",
                scrub:2,
               
                start:"top 60%",
                end:"top 30%"
            }
        })
        
    })
    return(
        <div id="about">
            <div className="left-about">
                <div className="circle-line">

                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
                </div>
            <div className="about-details">
                <div className="personal-info">
                    <h1>Personal Info</h1>
                    <ul>
                        <li>Name:<span>Naresh Perumalla</span></li>
                        <li>Age:<span>22Yrs</span></li>
                        <li>Language Known:<span>Telugu,English</span></li>
                    </ul>
                </div>
                <div className="education-info">
                    <h1>Education Info</h1>
                    <ul>
                        <li>Degree:<span>B-Tech</span></li>
                        <li>Branch:<span>Electronics & Communication</span></li>
                        
                    </ul>
                </div>
                <div className="personal-info">
                    <h1>Skills</h1>
                    <ul>
                        <li>HTML,CSS,Js,React</li>
                        <li>Express,Nodejs,MongoDB</li>
                        <li>Java,Python</li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="right-about">
                <Card title="Mern Stack" image={mern}/>
                <Card title="Java" image={java}/>
                <Card title="DSA" image={dsa}/>


            </div>
        </div>
    )
}

export default About