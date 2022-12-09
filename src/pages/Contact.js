import React from 'react';
import ContactForm from '../components/ContactForm';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div className='contact'>
            <Nav />
            <h1 className='contact-title'>Just get in touch ! 👋</h1>
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Contact;