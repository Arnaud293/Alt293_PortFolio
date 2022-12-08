import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import ProfilPicture from '../assets/img/Arnaud.png';

const Nav = () => {
    const [toggleResponsiveNav, setToggleResponsiveNav] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);

    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth)

            if(window.innerWidth > 650){
                setToggleResponsiveNav(false);
            }
        }

        window.addEventListener('resize', changeWidth);

        // cleanup
        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    },[])

    return (
        <div className='nav'>
            <i class="fa-solid fa-bars" onClick={() => setToggleResponsiveNav(!toggleResponsiveNav)}></i>
            {(toggleResponsiveNav || window.innerWidth > 650)  && (
            <>
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
            </>
            )}
            
        </div>
    );
};

export default Nav;