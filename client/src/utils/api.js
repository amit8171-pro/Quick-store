import axios from 'axios';

export const BASE_URL = "http://localhost:1337";

const params = {
    headers:{
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
    },
};

export const fethDataFromApi = async(url)=>{
    try {
        const {data} = await axios.get(BASE_URL + url, params);
        
       
        return data;

        
    } catch (error) {
        console.log(error);
        return error;
        
    }
}