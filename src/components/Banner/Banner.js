import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css";

const Banner = () => {
    return (
        <div className="slider-image">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"  
                        src="https://demo.zozothemes.com/medicalhealth/wp-content/uploads/sites/4/revslider/rev_slider_1/slider-new2.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Medical Services</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src="https://demo.zozothemes.com/medicalhealth/wp-content/uploads/sites/4/2015/07/blog1-1170x500.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>We care 
                            <br />
                            about your health
                        </h3>
                        <p>“Every mountain top is within reach if you just keep climbing.”</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://demo.zozothemes.com/medicalhealth/wp-content/uploads/sites/4/revslider/rev_slider_1/slider-new3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Planning my first trip</h3>
                        <p>Working from home meant we could vary snack and coffee breaks, change our desks or view, goof off</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;