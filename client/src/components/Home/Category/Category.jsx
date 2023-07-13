import "./Category.scss";
import {useNavigate} from 'react-router-dom';
import {BASE_URL} from '../../../utils/api';
const Category = ({categories}) => {
    const navigate = useNavigate()
    return <div className="shop-category">
        <div className="categories">
            {categories?.data?.map((item)=>(
                <div className="category" key={item.id} onClick={()=>navigate(`/category/${item.id}`)}>
                <img src={BASE_URL + item?.attributes?.img?.data?.attributes?.url} alt=""/>
            </div>

            ))}
         
            

       
          
            
        </div>
    </div>;
};

export default Category;
