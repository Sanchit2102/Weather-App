import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY
const API_URL= process.env.REACT_APP_API_URL

export const getWeather = async(city,country)=>{
    try {
      let response= await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
      return response.data
    } catch (error) {
        console.log("Error while calling the api",error.message);
        return error.responde
    }
}