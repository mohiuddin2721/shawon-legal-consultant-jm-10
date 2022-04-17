import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner4 from '../../../images/banner4.webp';
import banner5 from '../../../images/banner5.jpg';
import banner6 from '../../../images/banner6.jpg';

const Banner = () => {
    return (
        <Carousel className='banner-container'>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={banner4}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Professional Lawyer</h3>
                    <p>Provide honest, effective, timely and bonafide legal services to its clients.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={banner5}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className='second-banner-title'>Shawon Legal Consultant</h3>
                    <p className='second-banner-info'>I have adequate knowledge, consultants and logistics to undertake any legal, para legal or related service.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner6}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className='text-warning second-banner-title'>My Specialty</h3>
                    <p className='text-warning second-banner-info'>We always try to find out what is the desired outcome of the clients.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;