import React, { useState } from 'react';
import Nav from '../components/Nav';
import DynamicText from '../components/DynamicText';
import Footer from '../components/Footer';

// SRC
import ProfilPic from '../assets/img/me.webp';
import CallPic from '../assets/img/call.jpg';
import KanapPreview from '../assets/img/Kanap.png';

const Home = () => {

    const [whoIsShown, setWhoIsShown] = useState(false);
    const [inTouchIsShown, setInTouchIsShown] = useState(false);
    const [workIsShown, setWorkIsShown] = useState(false);

    return (
        <>
        <Nav />
        <div className='home'>
            <DynamicText />
            <div className="home-cards-container">
                <div className="home-cards-top" onMouseEnter={() => setWhoIsShown(true)} onMouseLeave={() => setWhoIsShown(false)}>
                    {whoIsShown ?  (
                        <div className='home-cards-top-about-reverse'>
                            <p>LEARN MORE ABOUT ME</p>
                            <img src={ProfilPic} alt='profil-picture-arnaud' className='home-cards-top-profil-picture' />
                        </div>
                    ) : (
                        <p>Who am I ? 😎</p>
                    )}
                    
                </div>
                <div className="home-cards-top" onMouseEnter={() => setInTouchIsShown(true)} onMouseLeave={() => setInTouchIsShown(false)}>
                    {inTouchIsShown ? (
                        <div className='home-cards-top-contact-reverse'>
                            <p>LET'S GET IN TOUCH 🤳</p>
                            <img src={CallPic} alt='woman-call-picture' className='home-cards-top-contact-picture' />
                        </div>
                    ) : (
                        <p>Get in touch ✔️</p>
                    )}
                    
                </div>
                <div className="home-cards-bottom" onMouseEnter={() => setWorkIsShown(true)} onMouseLeave={() => setWorkIsShown(false)}>
                    {workIsShown ? (
                        <div className='home-cards-top-work-reverse'>
                            <p>TAKE A LOOK 👀</p>
                            <img src={KanapPreview} alt='project-preview' className='home-cards-top-work-picture' />
                        </div>
                    ):(
                        <p>View my work 👀</p>
                    )}
                    
                </div>
            </div>
            <Footer />
        </div>
        
        </>
    );
};

export default Home;