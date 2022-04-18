import React from 'react';
import Banner from '../Banner/Banner';
import ClientWords from '../ClientWords/ClientWords';
import HomeServices from '../HomeServices/HomeServices';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <ClientWords></ClientWords>
        </div>
    );
};

export default Home;