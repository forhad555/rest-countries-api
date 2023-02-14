import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import myCardBg from './Country.css'

const Country = (props) => {



    return (
        <div>
         <Card className='mb-4 myCardBg'>
            <Card.Img variant="top" src={props.image} style={{width: '100%', height:'170px'}} />
                <Card.Body>
                 <Card.Title className='text-white'>{props.name}</Card.Title>
                 <ListGroup className='mt-4 mb-4'>
                    <ListGroup.Item className='listGroupBg'> Population: {props.population}</ListGroup.Item>
                    <ListGroup.Item className='listGroupBg'> Region: {props.region}</ListGroup.Item>
                    <ListGroup.Item className='listGroupBg'> Capital: {props.capital}</ListGroup.Item>
                </ListGroup>
                  <a href={props.map} target="blank">
                  <Button variant="outline-secondary" className='d-flex justify-content-center align-items-center mx-auto mapBtn'>
                  <i class='bx bx-map me-1'></i>Google Map</Button>
                  </a>
                 </Card.Body>
            </Card>  
        </div>
    );
};

export default Country;