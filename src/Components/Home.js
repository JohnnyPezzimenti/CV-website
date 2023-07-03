import React from 'react'
import Navbar from './Navbar';
import BannerImage from '../Assets/laptop-front.svg';

const Home = () => {
    return (
        <div className='home-container'>
            <Navbar />
            <h1 id='invisible'>Johnny Pezzimenti CV</h1>
            <div className='home-banner-container' >
                
                <div className='home-text-section' >
                    <h2 className='primary-heading' >
                        Introduction
                    </h2>
                    <p className='primary-text-color' >
                    I am a creative, hardworking individual who loves collaborating with others to solve complex problems. Adaptability and attention to detail are crucial components of my work ethic, and the driving forces behind everything I do.

                    </p>
                    
                </div>
                <div className='home-image-container'>
                    <img src={BannerImage} alt='Image of an open laptop' />

                </div>
            </div>
        </div>
    );
};

export default Home