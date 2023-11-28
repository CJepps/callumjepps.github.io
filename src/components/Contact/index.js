import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_8qhbcwt', 
                'template_ggqkyge', 
                 refForm.current, 
                'user_AxQxBi8bzmPqGuwGLG75k'
            )
            .then (
              () => {
                alert('Message successfully sent!')
                window.location.reload(false)
              },
              () => {
                alert('Failed to send the message, please try again')
              }
            )    
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={"Contact me".split("")}
                            idx={15}
                        />
                    </h1>
                    <p>Please dont hesitate to contact me on the below form.
                       I am keen to help with any project to increase my skills
                       and would love to hear from you! 
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required />
                                </li>
                                <li >
                                    <input type="text" name="subject" placeholder='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Your message here...' name='message' required />
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact