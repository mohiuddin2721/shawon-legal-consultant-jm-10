import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='container'>
                <h1 className='text-center pt-5'>CONTACT WITH US</h1>
                <div className='pt-2'>
                    <p className='text-center fs-4 p-0 m-0'>Office: Dhanmondi, jikatola</p>
                    <p className='text-center fs-4 p-0 m-0'>Road: 512, House: 34</p>
                    <p className='text-center fs-5 p-0 m-0'>Only office time</p>
                    <p className='text-center fs-6 p-0 m-0'>Phone: 0154-24326351</p>
                    <p className='text-center fs-6 p-0 m-0'>Fax: 5242-24006351</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;