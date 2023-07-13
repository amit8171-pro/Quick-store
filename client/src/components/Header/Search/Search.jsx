import {MdClose} from 'react-icons/md';
import useFetch from '../../../hooks/useFetch';
import "./Search.scss";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../../utils/api';

const Search = ({setShowSearch}) => {
    const [query, setQuery] = useState();
    const navigate = useNavigate();
    const onchange=(e)=>{
        setQuery(e.target.value);

    };
    let {data} = useFetch(`/api/products?populate=*&[filters][title][$contains]=${query}`);

   
    if (!query?.length){
        data=null;
    };
    return <div className='search-model'>
        <div className='form-filed'>
            <input type=' text' autoFocus placeholder='search for products' onChange={onchange} value={query}/>
            <MdClose onClick={()=>setShowSearch(false)} className='close'/>
        </div>
        <div className='search-result-content'>
            <div className='search-results'>
              {data?.data?.map((item)=>(
                <div className='search-result-items' key={item.id} onClick={()=>{
                    navigate("/product/" + item.id)
                    setShowSearch(false)
                }}>
              
              <div className='img-container'>
              <img src={BASE_URL + item?.attributes?.img?.data?.[0]?.attributes?.url} alt=""/>
              </div>
              <div className='product-details'>
              <div className='name'>{item?.attributes?.title}</div>
              <div className='desc'>{item?.attributes?.desc}</div>
              
         
              </div>
            </div>

           ))}
          
        </div>
        </div>
    </div>
};

export default Search;
