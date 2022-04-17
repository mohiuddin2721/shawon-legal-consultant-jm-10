import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css';

const Notfound = () => {
    return (
        <div className='w-100 d-flex justify-content-center align-items-center'>
            <div className='mt-5'>
                <p>We are sorry, page not found.</p>
                <h1 className='text-danger'>Error 404</h1>
                <Link to='/home'>
                    <button className='back-to-home-button'>BACK TO HOME</button>
                </Link>
            </div>
        </div>
    );
};

export default Notfound;