import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './HomeService.css';

const HomeService = (props) => {
    // console.log(props);
    const { titleName, price, picture, description } = props.service;

    return (
            <CardGroup className='col-md-4 col-12 shadow-sm rounded my-3'>
                <Card  border="warning">
                    <Card.Img variant="top" className='w-100 rounded' src={picture} />
                    <Card.Body>
                        <Card.Title className='text-center'>{titleName}</Card.Title>
                        <Card.Text className='p-0  m-0'>
                            <small>Cost:</small> <span className='fw-bold'>{price}</span> Taka
                        </Card.Text>
                        <Card.Text className='p-0 m-1'>
                            {description}
                        </Card.Text>
                        <button className='button d-flex mx-auto'>Check out</button>
                    </Card.Body>
                </Card>
            </CardGroup>
    );
};

export default HomeService;