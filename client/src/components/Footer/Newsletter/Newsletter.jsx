import React from "react";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,

} from "react-icons/fa"
import "./Newsletter.scss";
const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="newsletter-content">
        <span className="small-title">
            Newsletter
        </span>
        <span className="title">
            Sign up for latest updates and offers!
        </span>
        <div className="form">
            <input type="email" placeholder="email address"/>
            <button>Subscribe</button>
        </div>
        <span className="text">will be used in accordance with our Privacy Policy</span>
        <div className="social-icons">
        <div className="icon"> <FaFacebook size={14}/></div>
        <div className="icon"> <FaTwitter size={14}/></div>
        <div className="icon"> <FaInstagram size={14}/></div>
        <div className="icon"> <FaLinkedin size={14}/></div>

        </div>


        </div>
    </div>
};

export default Newsletter;
