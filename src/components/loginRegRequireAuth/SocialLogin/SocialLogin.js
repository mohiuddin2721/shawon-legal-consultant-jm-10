import React from 'react';
import './SocialLogin.css';
import facebook from '../../../images/facebook.png';
import google from '../../../images/google.png';
import gitPic from '../../../images/github.png';

const SocialLogin = () => {
    return (
        <div>
            <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div className=''>
                <button
                    className='btn btn-info w-50 d-block mx-auto mx-2 my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button
                    className='btn btn-info w-50 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={gitPic} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
        </div>
    );
};

export default SocialLogin;