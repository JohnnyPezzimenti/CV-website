import React from 'react'
import Logo from '../Assets/johnny-pezzimenti-logo.svg';

const Navbar = () => {
    
    return (
        <nav>
            <div className='nav-logo-container'>
                <img src={Logo} alt="Johnny Pezzimenti" />
            </div>
            
                  
        </nav>
    );
};

export default Navbar