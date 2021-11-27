// import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import "./About.css";

const About = () => {
    // const [teachers, setTeachers] = useState([])

    // useEffect(() => {
    //     fetch("./teacher.JSON")
    //         .then(res => res.json())
    //         .then(data => setTeachers(data))
    // }, [])
    return (
        <div className="about my-5">

            <Container>
                <div className="row">
                    <div className="col-lg-6">
                        <img src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <div classname="hello">
                            <div>
                                <h2>Welcome to Health Center</h2>
                                <Card.Text className="text-muted">
                                    For a small one-time investment, you can get the whole package of 75 lessons. Put it into your phone or MP3 Player and take your English learning ANYWHERE.

                                    You can learn English on the bus while going to work. You can learn English while exercising or walking. You can learn English while shopping. You can learn English while sitting at a coffee shop, etc.

                                    Remember, DEEP LEARNING is the No. 1 secret to English fluency. If you want to speak English fluently and automatically, you have to repeat the same lesson over and over again until you MASTER it.
                                </Card.Text>
                                <Button variant="warning">Learn More</Button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row py-5 text-center">
                    <h2>Professional </h2>
                    <p className=" px-5 text-muted">
                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                    </p>
                </div>
                <div className="row">
                    
                </div>
            </Container>
        </div>
    );
};

export default About;