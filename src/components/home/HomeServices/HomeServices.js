import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeService from '../HomeService/HomeService';

const HomeServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const sixServices = services.slice(0, 6);
    return (
        <div>
            <h1 style={{ 'color': '#cc8809' }} className='text-center m-3'>service of law</h1>
            <div className='row container mx-auto'>
                {
                    sixServices.map(service => <HomeService
                        key={service.id}
                        service={service}
                    ></HomeService>)
                }
            </div>
            <Link to={'/service'}>
                <button type="button" class="btn btn-light text-warning fs-3 mx-auto d-flex">See more services </button>
            </Link>
        </div>
    );
};

export default HomeServices;