import React, { useContext, useState } from "react";
import "./SingleProduct.scss";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaPinterest,
    FaCartPlus,
    
} from 'react-icons/fa';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/api";
import Product from "../Products/Product/Product";
import { Context } from "../../utils/context";

const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const {handleAddToCart} = useContext(Context)
    const increment = () =>{
        setQuantity((prevState)=> prevState + 1);

    };
    const decrement = () =>{
        setQuantity((prevState)=> {
            if(prevState === 1) return 1
            return prevState -1

        });

    };
    const {id} = useParams();
    const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
    if (!data) return;
   
    const product = data?.data[0]?.attributes
    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={BASE_URL + product?.img?.data[0]?.attributes?.url} alt=""/>
                </div>
                <div className="right">
                    <span className="name">{product?.title}</span>
                    <span className="price">&#8377;{product?.price}</span>
                    <span className="desc">{product?.desc}</span>
                    <div className="cart-btns">
                        <div className="quantity-bbtn">
                            <span onClick={decrement}>-</span>
                            <span>{quantity}</span>
                            <span onClick={increment}>+</span>
                        </div>
                        <button className="add-to-cart-bttn" onClick={()=>{
                            handleAddToCart(data?.data[0], quantity)
                            setQuantity(1);
                        }}>
                        <FaCartPlus size={20}/>
                            Add to Cart
                        </button>
                    </div>
                    <span className="divider"/>
                    <div className="info-item">
                        <span className="bold-text">
                            Category:{" "}
                            <span>{product?.categories?.data[0]?.attributes?.title}</span>
                        </span>
                        <span className="bold-text">
                            Share:
                            <span className="social-icons">
                                <FaFacebook size={16}/>
                                <FaTwitter size={16}/>
                                <FaInstagram size={16}/>
                                <FaLinkedin size={16}/>
                                <FaPinterest size={16}/>
                            </span>
                        </span>
                       
                    </div>
                </div>
            </div>
            <RelatedProducts productId={id} categoryId={product?.categories?.data[0]?.id}/>
            
           
        </div>
    </div>
};

export default SingleProduct;

