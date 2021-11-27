import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container text-center py-5">
            <img src="https://themepure.net/template/educal/educal/assets/img/error/error.png" alt="" className="img-fluid" />
            <h2 className="desplay-4 tex-center my-5 display-4 fw-bold">Page Not Found! </h2>
            <p>Please try searching for some other page.</p>   
            <button className="btn btn-primary ">

            <Link to="/" style={{textDecoration: "none", color:"#fff"}}>Back Home</Link>
            </button>
        </div>
    );
};

export default NotFound;