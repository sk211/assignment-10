import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Servicess.css"

const Services = () => {
    const [sevices, setSevices] = useState([])

    useEffect(() => {
        fetch("./coursesInfo.json")
            .then(res => res.json())
            .then(data => setSevices(data))
    }, [])
    return (
        <Container>

        <div className="row my-5">
            <h3> All Services</h3>
            
        </div>


        <Row xs={1} sm={1} md={4} className="g-4 my-5">

            {
                sevices.map(service =><Col>  <Card key="service.id" >
                    <Card.Img variant="top" src={service.img}  className="imageSize"/>
                    <Card.Body>
                        <Card.Title>{service.name}</Card.Title>
                        <Card.Text>
                            {service.desc.slice(0, 100)}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="">
                        <Link to={`/service/${service.id}`}></Link>
                        <button className="btn btn-primary btn-sm ">Detiles</button>
                    </Card.Footer>
                </Card>
                </Col>)
            }



        </Row>
    </Container>
    );
};

export default Services;