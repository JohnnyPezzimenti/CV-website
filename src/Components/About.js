import React from 'react'
import AboutBackgroundImage from '../Assets/books.svg';

const About = () => {
    return (
        <div className='about-section-container'>

            <div className='about-section-image-container'>
                <img src={AboutBackgroundImage} alt='' />
            </div>
            <div className='about-section-text-container'>
                <p className='primary-subheading'>About</p>
                <h1 className='primary-heading'>
                    Education
                </h1>
                <p className='primary-text'>
                    <u>Self-Taught Front-End Developer</u>
                    <br></br>
                    April 2022 - Present
                    <br></br>
                    <p className='primary-subheading'>
                        With the help of friends and mentors working in senior developer positions, and access to resources like Udemy and MDN Web Docs, I have been accumulating as much knowledge as I possibly can in order to understand coding principles, languages and best practices. My main focus has been Javascript, and more recently, I've been practicing with the React JS library and Typescript. Not only have I studied coding languages and 
                        libraries, but also important concepts like accessibility and responsive design. I understand that this field of work will always require constant, intentional learning. I'm a naturally-inquisitive person who's excited by opportunities to learn new things.
                    </p>
                </p>
                <p className='primary-text'>
                    <u>TEFL Worldwide - Prague, Czech Republic</u>
                    <br></br>
                    TEFL Certification, Accredited by latQuo | April 2021
                    <br></br>
                    <p className='primary-subheading'>
                        I completed an accredited online, 4 week,125-hour TEFL program that included 8-10 hours of actual hands-on experience teaching in virtual classrooms with actual ESL learners at levels including Elementary, Pre- intermediate, Intermediate and Upper-intermediate learners. The program focus consisted of teaching methodology and language awareness. I delivered a full grammar presentation and an individual learner case study.
                        Topics of the program coverage included: Vocabulary, Grammar, Phonology, Business English,
                        young learners English, Methodology, authentic materials and course books, EFL Testing and other EFL components.
                    </p>
                </p>
                <p className='primary-text'>
                    <u>Daytona State University</u>
                    <br></br>
                    Music Production Technology | September 2015
                    <br></br>
                    <p className='primary-subheading'>My time at Daytona State granted me proficiency in Pro Tools and a general familiarity with recording software and musical hardware. It deeply explored the science behind sound and provided real-world examples of how it can be manipulated to the listener’s advantage. There was extensive coverage of industry history and practices, music management, and sound engineering methodology.
                    </p>
                </p>

            </div>
        </div>
    );
};

export default About