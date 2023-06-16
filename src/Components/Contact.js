import React from 'react'

const Contact = () => {
  return (
    <div className='contact-page-wrapper'>
        <h1 className='primary-heading'>Reach out!</h1>
        <div className='contact-form-container'>
            <input type='text' placeholder='Email address goes here' />
            <button className='secondary-button'>Submit</button>
        </div>
    </div>
  );
};

export default Contact