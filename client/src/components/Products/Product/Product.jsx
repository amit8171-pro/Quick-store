import "./Product.scss";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../utils/api";
const Product = ({id, data}) => {
    const navigate = useNavigate();
    return <div className="product-card" onClick={()=>{navigate(`/product/${id}`)}}>
    <div className="thumbnail">
       <img src={BASE_URL + data?.img?.data?.[0]?.attributes?.url} alt=""/>

        
    </div>
    <div className="product-detailes">
        <span className="name">{data?.title}</span>
        <span className="price">&#8377;{data?.price}</span>
    </div>

    </div>
};

export default Product;
