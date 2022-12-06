import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// SRC
import ResumePreview from '../assets/img/resume.png'

export const ContactUs = () => {
    const form = useRef();
  
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
            <div className="form-container-left">
                <p>06 06 45 72 15</p>
                <p>arnaudlt293@gmail.com</p>
                <div className="form-container-left-resume">
                    <img src={ResumePreview} alt="resume-arnaud" />
                </div>
            </div>
            <div className="form-container-right">
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="name" required autoComplete='off'/>
                    <label>Email</label>
                    <input type="email" name="email" required autoComplete='off'/>
                    <label>Message</label>
                    <textarea name="message" required />
                    <input type="submit" value="Envoyer" />
                </form>
                <div className="form-message">
  
                </div>
            </div>
          
          
        </div>
  
    );
  };
  
  export default ContactUs;