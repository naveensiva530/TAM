import React, { useEffect, useState } from "react";
import "./NotFound.css";
import { Helmet } from "react-helmet";
import notfound from '../../assets/404.jpg'
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {

    const [countdown, setCountdown] = useState(3); // Start countdown from 5 seconds
    const navigate = useNavigate();

    useEffect(() => {
        if (countdown === 0) {
            navigate("/", { replace: true }); // Redirect when countdown reaches 0
        }

        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer); // Cleanup on unmount
    }, [countdown, navigate]);


    return (
        <div className="NotFound" style={{ textAlign: "center", marginTop: "100px" }}>
            <Helmet>
                <title>404 - Page Not Found</title>
                <meta name="description" content="The page you are looking for does not exist." />
                <meta name="robots" content="noindex" />
            </Helmet>

            <img src={notfound} alt="" />
 
            <p>Redirecting to homepage in</p>
            <p><strong>{countdown}</strong> seconds...</p>
            <a href="/">Click here if you are not redirected</a>


        </div>
    );
};

export default NotFound;
