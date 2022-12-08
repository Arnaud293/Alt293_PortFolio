import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import ProfilPicture from '../assets/img/Arnaud.png';

const Nav = () => {
    return (
        <div className='nav'>
            
            <div className="nav-infos-left">
                <NavLink to='/'>
                    <p>Arnaud Le Tallec</p>
                </NavLink>
                <div className="nav-infos-left-img">
                    <img src={ProfilPicture} alt="" />
                </div>
                
            </div>
            
            <div className="nav-infos-right">
                <ul>
                    <NavLink to='/about'>
                        <li>About</li>
                    </NavLink>
                    <NavLink to='/projects'>
                        <li>Projects</li>
                    </NavLink>
                    <NavLink to='/contact'>
                        <li>Contact</li>
                    </NavLink>
                </ul>
                
            </div>
            <i class="fa-solid fa-bars"></i>
        </div>
    );
};

export default Nav;