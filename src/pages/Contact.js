import React from 'react';
import ContactForm from '../components/ContactForm';
import Nav from '../components/Nav';

const Contact = () => {
    return (
        <div className='contact'>
            <Nav />
            <h1 className='contact-title'>Just get in touch ! 👋</h1>
            <ContactForm />
        </div>
    );
};

export default Contact;