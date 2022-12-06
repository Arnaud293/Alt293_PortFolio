import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// SRC
import ResumePreview from '../assets/img/resume.png'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ResumePdf from '../assets/CV_Arnaud_LeTallec_JSDeveloper.pdf';

export const ContactUs = () => {
    const form = useRef();
    
    const [isShown, setIsShown] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
      const formMess = document.querySelector('.form-message');
  
      emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form.current, 'PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
            form.current.reset();
            formMess.innerHTML = "<p class='sucess'> Message envoyé !</p>"
  
            setTimeout(() => {
              formMess.innerHTML = '';
            }, 2500)
        }, (error) => {
            console.log(error.text);
            formMess.innerHTML = "<p class='error'> Une erreur s'est produite. Merci de réessayer.</p>"
            setTimeout(() => {
              formMess.innerHTML = '';
            }, 2500)
        });
    };
  
    return (
      <div className="form-container">
            <div className="form-container-left" >
                <div className='form-container-left-text' onClick={()=>{navigator.clipboard.writeText("06 06 45 72 15"); alert('Numéro copié dans le presse-papier')}}>
                    <p>06 06 45 72 15</p>
                </div>
                <div className='form-container-left-text' onClick={()=>{navigator.clipboard.writeText("arnaudlt293@gmail.com"); alert('Email copié dans le presse-papier')}}>
                    <p>arnaudlt293@gmail.com</p>
                </div>
                <NavLink to={ResumePdf} target='_blank' rel='noopener noreferrer'>
                    <div className="form-container-left-resume" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                        <img src={ResumePreview} alt="resume-arnaud" />
                        {isShown && (
                            <i class="fa-solid fa-eye"></i>
                        )}
                    </div>
                </NavLink>
            </div>
            <div className="form-container-right">
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="name" required autoComplete='off'/>
                    <label>Email</label>
                    <input type="email" name="email" required autoComplete='off'/>
                    <label>Message</label>
                    <textarea name="message" required />
                    <input type="submit" value="Send" id='send-btn' />
                </form>
                <div className="form-message">
  
                </div>
            </div>
          
          
        </div>
  
    );
  };
  
  export default ContactUs;