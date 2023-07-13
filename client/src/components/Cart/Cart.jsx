import "./Cart.scss";
import {MdClose} from 'react-icons/md';
import {BsCartX} from 'react-icons/bs';
import CartItem from './CartItem/CartItem';
import { useContext } from "react";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";

const Cart = ({setShowCart}) => {
    const {cartSubTotal, cartItems} = useContext(Context);
    const navigate = useNavigate();
    return <div className="cart-panel">
        <div className="opc-layer"></div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Shoping Cart</span>
                <span className="close-btn" onClick={()=>setShowCart(false)}>
                <MdClose/>
                <span className="text">close</span>
                </span>
            </div>
            
            {!cartItems?.length &&  <div className="empty-cart">
                <BsCartX/>
                <span>No products in the cart.</span>
                <button className="return-cta" onClick={()=>{navigate(`/`)
                setShowCart(false)}}>Return to Shop</button>
            </div>}
           
            {!!cartItems?.length && <>
            <CartItem/>
            <div className="cart-footer">
                <div className="subtotal">SubTotal:
                <span className="price">&#8377;{cartSubTotal}</span>
            </div>
            
            <div className="button">
                <button className="checkout-btn">Checkout</button>
            </div>
            </div>

            </>}
        </div>
    </div>
};

export default Cart;
