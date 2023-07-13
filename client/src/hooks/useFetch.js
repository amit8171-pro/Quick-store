import {useState, useEffect} from 'react';
import {fethDataFromApi} from '../utils/api';


const useFetch = (endpoints)=>{

    const [data, setData] = useState();

    useEffect(()=>{
        makeApiCall();
    },[endpoints])

    const makeApiCall = async() =>{
           const res = await fethDataFromApi(endpoints)
           setData(res);

    }
    return {data};

}
export default useFetch;