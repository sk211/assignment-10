import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
// import useAuth from '../hooks/useAuth';

const Home = () => {
    // const {user} = useAuth()
    const [doctors, setDoctor] = useState([])

    useEffect(() => {
        fetch("./doctor.json")
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [])
    return (
        <div>
            <Banner />
            <Services />

            <div className="row py-5 text-center">
                <h2>MEET OUR DOCTORS </h2>
                <p className=" px-5 text-muted">
                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                </p>
            </div>
            <Container className="my-5">
                <Row xs={1} md={4} className="g-4">
                
                   {
                       doctors.map(doctor=> <Col> <Card>
                        <Card.Img variant="top" src={doctor.img} />
                        <Card.Body>
                            <Card.Title>{doctor.name}</Card.Title>
                            <Card.Text>
                            {doctor.desc}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                        
                    </Col>
                        )
                   }
                        
                       
                   
                </Row>
            </Container>
        </div>
    );
};

export default Home;