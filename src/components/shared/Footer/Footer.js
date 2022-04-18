import React from 'react';
import './Footer.css';
import banner1 from '../../../images/banner1.webp';
import divorce from '../../../images/Divorce.webp';
import litigation from '../../../images/Litigation.webp';
import lawyer1 from '../../../images/lawyer1.webp';

const Footer = () => {
    return (
        <footer className='mt-5'>
            <div className='container'>
                <div className='row p-5'>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                        <div>
                            <h3 className='text-white fw-lighter mb-4'>Get in touch</h3>
                            <ul>
                                <li className='text-white'>
                                    <p>Phone: 0182-54-25524</p>
                                    <p>Fax: 0175-875-3695</p>
                                </li>
                                <li className='text-white'>
                                    <p>support@help.com</p>
                                    <p>legalcon@help.com</p>
                                </li>
                                <li className='text-white'>
                                    <p>Mirpur Road</p>
                                    <p>Dhaka, Dhanmondi</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                        <div>
                            <h3 className='text-white fw-lighter mb-4'>USEFUL LINK</h3>
                            <ul>
                                <li className='text-white'>
                                    <a className='text-white text-decoration-none' href=" ">About Us</a>
                                </li>
                                <li className='text-white'>
                                    <a className='text-white text-decoration-none' href=" ">Family $ Divorce law</a>
                                </li>
                                <li className='text-white'>
                                    <a className='text-white text-decoration-none' href=" ">Property Law</a>
                                </li>
                                <li className='text-white'>
                                    <a className='text-white text-decoration-none' href=" ">Finance $ Security Law</a>
                                </li>
                                <li className='text-white'>
                                    <a className='text-white text-decoration-none' href=" ">Criminal Defense Law</a>
                                </li>
                                <li className='text-white'>
                                    <a className='text-white text-decoration-none' href=" ">Serious Car Crash</a>
                                </li>
                                <li className='text-white'>
                                    <a className='text-white text-decoration-none' href=" ">njury Attorneys</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                        <div>
                            <h3 className='text-white fw-lighter mb-4'>RECENT POSTS</h3>
                            <div>
                                <div className='media'>
                                    <a className='text-white text-decoration-none' href=" ">Pellentesque velit mauris, cursus id eros sed thdgy.</a>
                                    <p className='text-white'>15-06-2021</p>
                                </div>
                                <div className='media'>
                                    <a className='text-white text-decoration-none' href=" ">Pellentesque velit mauris, cursus id eros sed thdgy.</a>
                                    <p className='text-white'>28-06-2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                        <div>
                            <h3 className='text-white text-center fw-lighter mb-4'>gallery</h3>
                            <ul className='corporate-photo'>
                                <img src={banner1} alt="" />
                                <img src={divorce} alt="" />
                                <img src={litigation} alt="" />
                                <img src={lawyer1} alt="" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center text-light'><small>Copyright &copy; {new Date().getFullYear()} Shawon Legal Consultant. All Rights Reserved. Designed By K M Mohiuddin Patwary</small></p>
        </footer>
    );
};

export default Footer;