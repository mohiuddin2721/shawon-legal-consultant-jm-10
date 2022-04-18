import React from 'react';
import './AboutMe.css';
import profile from '../../../images/profile.jpeg'

const AboutMe = () => {
    return (
        <div className='container'>
            <div className='m-5'>
                <div className='mx-auto d-block'>
                    <img className='profile-photo' src={profile} alt="" />
                </div>
                <div>
                   <h3 className='my-3 my-name'>K M Mohiuddin Patwary</h3>
                   <p className='profile-info'>Learning new skills is part of a software developer's role due to the frequent changes and advancements in technology and frameworks. I personally know quite a few developers who are learning Rust right now. However, just learning programming skills isn't enough if you want to succeed and get ahead in your software developer's career.
                       <br />
                       So, I want to become an expert in web development technology, work on a system that has X scale or complexity, and get to a specific job title.
                       <br />
                       Want to work at a prestigious tech company and start a side hustle.
                   </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;