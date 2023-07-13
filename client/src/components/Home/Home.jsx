import React, { useEffect, useContext } from 'react';
import './Home.scss'
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Products from '../Products/Products';
import {fethDataFromApi} from '../../utils/api';
import { Context } from '../../utils/context';



export default function Home() {
  const {categories, setCategories, products, setProducts} = useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);
  

  const getCategories = ()=>{
    fethDataFromApi("/api/categories?populate=*").then((res)=>{
      console.log(res)
      setCategories(res)
    });

    
  };
  const getProducts = ()=>{
    fethDataFromApi("/api/products?populate=*").then((res)=>{
      console.log(res)
      setProducts(res)
    });

    
  };
  return (
    <div>
     <Banner/>
     <div className='main-content'>
      <div className='layout'>
      <Category categories ={categories}/>
      <Products heading="Popular Products" products={products}/>
      </div>
     </div>
     
      
    </div>
  )
}
