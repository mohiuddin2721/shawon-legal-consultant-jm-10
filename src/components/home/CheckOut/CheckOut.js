import React from 'react';
import './CheckOut.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {

    const handleSubmit = event => {
        event.preventDefault();
        toast('Thank you for booking');
        alert('Thank you for your booking!!');
        event.target.reset()
    }
    return (
        <div className='checkout-form m-5'>
            <h2 style={{ textAlign: 'center' }} className='text-warning m-5'>Please fill checkout Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="number" name="number" id="" placeholder='Phone Number' required />

                <input type="text" name="address" id="" placeholder='Your Address' />

                <input
                    className='w-25 mx-auto btn btn-warning mt-2 submit-button'
                    type="submit"
                    value="Submit" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default CheckOut;