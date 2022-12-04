import React, { useState } from 'react';
import Nav from '../components/Nav';
import DynamicText from '../components/DynamicText';
import Footer from '../components/Footer';

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
                        <p>Hover style here</p>
                    ) : (
                        <p>Who am I ? 😎</p>
                    )}
                    
                </div>
                <div className="home-cards-top" onMouseEnter={() => setInTouchIsShown(true)} onMouseLeave={() => setInTouchIsShown(false)}>
                    {inTouchIsShown ? (
                        <p>Hover style here</p>
                    ) : (
                        <p>Get in touch ✔️</p>
                    )}
                    
                </div>
                <div className="home-cards-bottom" onMouseEnter={() => setWorkIsShown(true)} onMouseLeave={() => setWorkIsShown(false)}>
                    {workIsShown ? (
                        <p>Hover style here</p>
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