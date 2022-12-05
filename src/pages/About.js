import React from 'react';
import Nav from '../components/Nav';

// SRC
import ProfilPic from '../assets/img/me.webp'
// ICONS
import Typescript from '../assets/img/typescript.png';
import ReactIc from '../assets/img/react.png';
import ReduxIc from '../assets/img/redux.png';
import SassIc from '../assets/img/sass.png';
import FirebaseIc from '../assets/img/firebase.png';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className='about'>
            <Nav />
            <div className="about-container">
                <div className="about-container-left">
                    <img src={ProfilPic} alt="arnaud-profil-picture" />
                </div>
                <div className="about-container-right">
                    <h1>Hey ! I'm Arnaud ✌️</h1>
                    <p>Before being a developer, I am a <span>curious</span> and <span>enthusiastic</span> personality.
                       Driven by the need for accomplishment, I am counting on you to give me new challenges to take up!
                    </p>
                    <div className="stack-card">
                        <h2>Favorite Stack</h2>
                        <ul>
                            <li><img src={Typescript} alt="typescript-icon" /></li>
                            <li><img src={ReduxIc} alt="redux-icon" /></li>
                            <li><img src={ReactIc} alt="react-icon" /></li>
                            <li><img src={SassIc} alt="sass-icon" /></li>
                            <li><img src={FirebaseIc} alt="firebase-icon"/></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;