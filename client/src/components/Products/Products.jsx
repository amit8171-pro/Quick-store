import Product from "./Product/Product";
import "./Products.scss";
const Products = ({innerpage, heading, products}) => {
    return <div className="product-container">
   {!innerpage &&  <div className="sec-headeing">{heading}</div>}
    <div className="products">
    {products?.data?.map((item)=>(
        <Product key={item.id} id={item.id} data={item?.attributes}/>
    ))}
        
       
    </div>
    </div>
};

export default Products;
