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
                <img src={Logo} alt='Johnny Pezzimenti' />
            </div>
            <div className='footer-icons'>
                <BsTwitter alt='Twitter icon'/>
                <SiLinkedin alt='Linkedin icon'/>
                <BsYoutube alt='Youtube icon'/>
                <FaFacebookF alt='Facebook icon'/>
            </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>+1-772-307-2584</span>
                <span>pezzimentijohnny@gmail.com</span>
                <span>Jensen Beach, FL</span>
            </div>
            <div className='footer-section-columns'>
                <span>Johnny Pezzimenti © 2023</span>
            </div>
        </div>
    </div>
  );
};

export default Footer