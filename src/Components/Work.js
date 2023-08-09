import React from 'react';

const Work = () => {
    const workInfoData = [
        {
            id: 1,
            title: 'Online English Teacher, Independent on Preply.com: May 2021 - Present',
            text: 'I conduct both individual and group lessons for international English learners. I focus largely on practical application, but pride myself in my enthusiasm to tailor each lesson around the specific needs of my students. I am responsible for preparing all of my lesson plans, gathering teaching resources, researching various linguistic functions and managing my own schedule. The majority of my students are young professionals, but I have experience with many different demographics and am open to any level.',
        },
        {
            id: 2,
            title: 'Recording Engineer, Independent and Remote: 2013 - Present',
            text: 'I regularly undertake various musical projects, such as writing, recording, mixing and mastering. I studied Music Production Technology at Daytona State College, but was unable to complete my degree due to professional sacrifices. However, I took the knowledge that I obtained from my studies and was able to expand my technical capabilities. This has led me to career opportunities like composing video game scores, writing musical pieces for choreographed dance productions and producing full length albums.',
        },
        {
            id: 3,
            title: 'General Manager, Neighbors Taqueria in DeLand, Florida: Aug 2017 - Aug 2019',
            text: 'I oversaw the complete operation of this small restaurant. I was the main handler of payroll, scheduling, hiring and training of the staff. Outside of normal business hours, my tasks were placing, receiving, and organizing wholesale orders and inventory. I have many years of culinary experience, and I was able to use my acquired knowledge, and the knowledge of those around me, to build unique recipes enjoyed by many.',
        },
    ]
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            
            <h2 className='primary-heading'>Employment History</h2>
            
        </div>
        <div className='work-section-bottom'>
            {workInfoData.map((data) => (
                <div className='work-section-info' key={data.id}>
                    
                        <h3>{data.title}</h3>
                        <p>{data.text}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Work