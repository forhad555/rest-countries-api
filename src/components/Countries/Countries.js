import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect( () => {

        fetch('https://restcountries.com/v3.1/all')
       .then(res => res.json())
       .then(data => setCountries(data))


    }, [])

    return (
        <div>
            <Container>
                <Row className='my-5'>
                    {
                        countries.map(country => 
                        <Col xl={3} md={4}> 
                        <Country name={country.name.common} image={country.flags.png} map={country.maps.googleMaps}
                        population={country.population} region={country.region} capital={country.capital}>

                        </Country>
                        </Col>
                            )
                     }
                </Row>
            </Container>
        </div>
    );
};

export default Countries;