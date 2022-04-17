import React, { useEffect, useState } from 'react';
import HomeService from '../HomeService/HomeService';

const HomeServices = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    
    const sixServices = services.slice(0, 6);
    return (
        <div>
            <h1 style={{'color' : '#cc8809'}} className='text-center m-3'>service of law</h1>
            <div className='row container mx-auto'>
                {
                    sixServices.map(service => <HomeService
                    key={service.id}
                    service={service}
                    ></HomeService>)
                }
            </div>
        </div>
    );
};

export default HomeServices;