import React from 'react';
import Logo from '../Assets/johnny-pezzimenti-logo.svg';
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
                <img src={Logo} alt='' />
            </div>
            <div className='footer-icons'>
                <BsTwitter />
                <SiLinkedin />
                <BsYoutube />
                <FaFacebookF />
            </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>+1-772-307-2584</span>
                <span>pezzimentijohnny@gmail.com</span>
                <span>102 N Las Olas Drive</span>
            </div>
            <div className='footer-section-columns'>
                <span>Johnny Pezzimenti © 2023</span>
            </div>
        </div>
    </div>
  );
};

export default Footer