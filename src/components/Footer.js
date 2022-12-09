import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <a href='https://github.com/Arnaud293' target='_blank'>
                <i class="fa-brands fa-github"></i>
            </a>
            <a href='https://www.linkedin.com/in/arnaud-le-tallec-106b571a7/' target='_blank'>
                <i class="fa-brands fa-linkedin"></i>
            </a>
        </div>
    );
};

export default Footer;