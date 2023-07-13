import React from "react";
import {
    FaLocationArrow,
    FaMobileAlt,
    FaEnvelope,
} from 'react-icons/fa';
import payments from "../../assets/payments.png";
import "./Footer.scss";
const Footer = () => {
    return <footer>
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Voluptatem accordance deloremques laundatsjn, totam rem 
                 apersim, equesa ispa qued ab linj inveitrhhi vertiex ewt quesi arection beates
                 sunt expilorion equesa ispa quea ab illo.
                </div>
            </div>
            <div className="col">
               <div className="title">Contact</div>
               <div className="c-item">
               
               <div className="text"><FaLocationArrow/>GBSA Chok, BabaSwami road, Malangwa Sarlahi, Nepal 4500</div>
               
               <div className="text"><FaMobileAlt/>Phone: 046-211-098</div>
               
               <div className="text"><FaEnvelope/>Email: support@gmail.com</div>

               </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <div className="text">Headphones</div>
                <div className="text">Smart Watches</div>
                <div className="text">Bluetooth Speakers</div>
                <div className="text">Wireless Earbuds</div>
                <div className="text">Home Theatre</div>
                <div className="text">Projectors</div>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <div className="text">Home</div>
                <div className="text">About</div>
                <div className="text">Privacy Policy</div>
                <div className="text">Returns</div>
                <div className="text">Terms & Conditions</div>
                <div className="text">Contact Us</div>
               
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                Quick Store e-commerce site created by Amit
            </div>
            <div className="bottom-bar-img">
             <img src={payments} alt="payments"/>
            </div>
            
        </div>
    </footer>
};

export default Footer;

