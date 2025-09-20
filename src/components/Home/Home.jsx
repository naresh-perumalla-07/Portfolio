
import './Home.css'
import man from '../../assets/man.png'
import Typewriter from './TypeWriter'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Home=()=>{
    useGSAP(()=>{
        let tl1=gsap.timeline()
        tl1.from(".line1",{
            y:80,
            duration:1,
            opacity:0
        })
        tl1.from(".line2",{
            y:80,
            duration:1,
            opacity:0
        })
        tl1.from(".line3",{
            y:80,
            duration:1,
            opacity:0
        })
        tl1.from(".right-home",{
            x:100,
            duration:1,
            opacity:0
        })
    })
    return(
        <div id='home'>
            
            <div className="left-home">
                <div className="home-details">
                    <div className="line1">I'm</div>
                    <div className="line2">Naresh Perumalla</div>
                    <div className="line3">
                        <span  className="typewriter-text">
                        <Typewriter words={[
                            "WEB DEVELOPER",
                            "FRONTENED",
                            "BACKEND",
                            "EDITOR",
                            "MACHINE LEARNING"
                        ]}
                       
                        cursor
                        pause={1000}
                        cursorStyle="|"
                        typeSpeed={180}                        
                        deleteSpeed={100
                        
                        }   
                        /></span>
                    </div>
                    <button id='btn'>HIRE ME</button>
                </div>
            </div>
            <div className="right-home">
                <img src={man} alt="" />

            </div>

        </div>
    )
}

export default Home