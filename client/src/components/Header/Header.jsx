import React, { useContext, useEffect, useState } from 'react';
import './Header.scss';
import {BsSearch} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';
import {CgShoppingCart} from 'react-icons/cg';
import Cart from '../Cart/Cart';
import Search from './Search/Search';
import { Context } from '../../utils/context';
import { useNavigate } from 'react-router-dom';



export default function Header() {
  const [showCart, setShowCart] =useState(false);
  const [showSearch, setShowSearch] =useState(false);
  const [scrolled, setScrolled] = useState(false);
  const {cartCount} = useContext(Context);
  const navigate = useNavigate();
  const handleScroll = ()=>{
    const offset = window.scrollY;
    console.log(offset)
   
    if(offset > 200){
        setScrolled(true);
    }else{
       setScrolled(false);
    }

  };

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
  },[])
  

  
  return (
    <>
        <section>
        <header className={`headers ${scrolled ? "stickyset" : ''}`}>
             <div className={`header`}>
                <div className='header-left'>
                    <ul>
                        <li onClick={()=>navigate("/")}>Home</li>
                        <li>About</li>
                        <li>Categories</li>
                    </ul>
                </div>
                <div className='header-center'>
                   <span className='heading' onClick={()=>navigate("/")}>QuickStore</span>
                </div>
                <div className='header-icons'>
                <div className='shearch-icon' onClick={()=>setShowSearch(true)}><BsSearch/></div>
                <AiOutlineHeart/>
               <div className='cart-icons' onClick={()=>setShowCart(true)}>
               <CgShoppingCart/>
               {!!cartCount && <div className='count'>{cartCount}</div>
               }
                

               </div>
                </div>
             </div>
        </header>

        

        </section>
        {showCart && <Cart setShowCart={setShowCart}/>}
        {showSearch && <Search setShowSearch={setShowSearch}/>}
    </>
  )
}
