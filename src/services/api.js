import axios from 'axios';

const URL = 'http://localhost:3500';

export const addRide = async (data) => {
    try{
       return await axios.post(`${URL}/add`, data);
    } catch (error) {
       console.log("Error while calling add rides API!", error)
    }
}