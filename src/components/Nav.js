import React from 'react';
import ProfilPicture from '../assets/img/Arnaud.png';

const Nav = () => {
    return (
        <div className='nav'>
            <div className="nav-infos-left">
                <p>Arnaud Le Tallec</p>
                <div className="nav-infos-left-img">
                    <img src={ProfilPicture} alt="" />
                </div>
            </div>
            <div className="nav-infos-right">
                <ul>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;