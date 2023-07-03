import React from 'react'

const Contact = () => {
  return (
    <div className='contact-page-wrapper'>
        <h2 className='primary-heading'>Reach out!</h2>
        <div className='contact-form-container'>
            <input type='text' placeholder='Email address goes here' />
            <button className='secondary-button'>Submit</button>
        </div>
    </div>
  );
};

export default Contact