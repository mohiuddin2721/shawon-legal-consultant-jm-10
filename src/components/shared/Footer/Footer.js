import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <p className='text-center'><small>Copyright &copy; {new Date().getFullYear()} Shawon Legal Consultant. All Rights Reserved. Designed By K M Mohiuddin Patwary</small></p>
        </div>
    );
};

export default Footer;