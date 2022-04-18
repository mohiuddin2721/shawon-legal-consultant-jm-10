import React from 'react';
import './ClientWords.css';

const ClientWords = () => {
    return (
        <div className='clientWords-container'>
            <div className='container mt-5'>
                <h1 className='text-center text-warning m-3 p-4'>CLIENTS' WORDS</h1>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 pe-5'>
                        <div>
                            <p className='mb-0'>Very professional and caring towards its client. Very best of luck and I wish its succes.</p>
                            <p className='text-end m-0'><small>- Lodi Ikbal</small></p>
                        </div>
                        <div>
                            <p className='mb-0'>Very dedicated & straight advice always. Really helpful in dealing with all the situation relating to the case.# professional # honest# trustworthy. Alhumdulillah, happy for being your client. Highly recommended.</p>
                            <p className='text-end m-0'><small>- Q Lana</small></p>
                        </div>
                        <div>
                            <p className='mb-0'>Well recognised lawyer & satisfied with your services😊😊</p>
                            <p className='text-end m-0'><small>- Sumaiya Haider</small></p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 ps-5'>
                        <div>
                            <p className='mb-0'>One of the Best Lawyer. You are a outstanding lawyer and very knowledgeable person. A Reliable Lawyer. Highly Recommended.</p>
                            <p className='text-end m-0'><small>- Badhan Roy</small></p>
                        </div>
                        <div>
                            <p className='mb-0'>Most Supportive and fast Working lawyer. Adv. Shawon is really smart with his own working ways so that you will get a solution as soon as possible.</p>
                            <p className='text-end m-0'><small>-Fahad Bin Mostofa</small></p>
                        </div>
                        <div>
                            <p className='mb-0'>If you are looking for a professional lawyer in dhaka then contact Barrister Shawon. I had to wait a little while to meet him but he was very friendly and cordial.</p>
                            <p className='text-end m-0'><small>- Afroja Morshed</small></p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='text-center text-warning m-3'>Business Hours</h2>
                    <div className='pb-4'>
                        <h6 className='text-center'>Sunday-Thursday : 10:00 AM to 8:00 PM</h6>
                        <h6 className='text-center'>Saturday: 11:00 AM to 5:00 PM</h6>
                        <h6 className='text-center'>Friday: Closed (Open on request)</h6>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ClientWords;