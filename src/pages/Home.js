import React from 'react';
import Nav from '../components/Nav';
import DynamicText from '../components/DynamicText';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
        <Nav />
        <div className='home'>
            <DynamicText />
            <div className="home-cards-container">
                <div className="home-cards-top">
                    <p>Who am I ? 😎</p>
                </div>
                <div className="home-cards-top">
                    <p>Get in touch ✔️</p>
                </div>
                <div className="home-cards-bottom">
                    <p>View my work 👀</p>
                </div>
            </div>
            <Footer />
        </div>
        
        </>
    );
};

export default Home;