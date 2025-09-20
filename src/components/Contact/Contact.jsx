import './Contact.css'
import contact from '../../assets/contact.png'
import './Contact.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import Footer from './Footer'
gsap.registerPlugin(ScrollTrigger)

// import { useState } from "react";

// const Contact = () => {
//   const [message, setMessage] = useState("");
//   const [status, setStatus] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // prevent page reload

//     const formData = new FormData(e.target);

//     try {
//       const res = await fetch("https://formspree.io/f/your_form_id", {
//         method: "POST",
//         body: formData,
//         headers: { Accept: "application/json" },
//       });

//       if (res.ok) {
//         setStatus("Thanks! Your message has been sent.");
//         e.target.reset();
//       } else {
//         setStatus("Oops! There was a problem.");
//       }
//     } catch (err) {
//       setStatus("Oops! There was a problem.");
//     }
//   };



const Contact=()=>{
      useGSAP(()=>{
        gsap.from(".left-contact img",{
            x:-100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".left-contact img",
                scroll:"body",
                scrub:2,
              
                start:"top 60%",
                end:"top 30%"
            }
        })
        gsap.from("form",{
            x:100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:"form",
                scroll:"body",
                scrub:2,
               
                start:"top 60%",
                end:"top 30%"
            }
        })
      })
    return(
        <>
        <div id="contact">
            <div className="left-contact">
                <img src={contact} alt="" />
            </div>
            <div className="right-contact">
                <form action={import.meta.env.VITE_FORMSPREE_ID} method='POST'>
                    {/* <label htmlFor="Name">Name:</label> */}
                    <input type="text" name='Name' id='Name' placeholder='Name' />
                    {/* <label htmlFor="email">Email:</label> */}
                    <input type="email" name='Email' id='email' placeholder='Email' />
                    {/* <label htmlFor="msg">Msg:</label> */}
                    <textarea name="text" id="msg" placeholder="Let's Connect" ></textarea>
                    <button type='submit' id='formbtn'>Send</button>
                </form>

            </div>
            
        </div>
        <Footer/>
        </>

    )
}

export default Contact