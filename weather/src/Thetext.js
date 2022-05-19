import axios from "axios";
import {useEffect, useState} from "react";
import {useRef} from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import News from './News.js'
//import WeatherData from "./News.js"
import { getAvatarGroupUtilityClass } from "@mui/material";



const Thetext = () =>{

    /*
    const takeinput = null;
    const textFieldRef = useRef();

    const [inputtext, setInputText] = useState(null)
    const [long, setLong] = useState(null)
    const [lat, setLat] = useState(null)
    const [data, setData] = useState(null);
    const [middleMan, setMiddleMan] = useState(null);
    
    const API_KEY = process.env.REACT_APP_api_key

    const url = new URL('https://api.openweathermap.org/data/2.5/onecall')

    url.searchParams.append("lat", 38.03)
    url.searchParams.append("lon", -78.05)
    url.searchParams.append("appid", API_KEY)
    url.searchParams.append("units", "imperial")
    if(middleMan == null){
        url.searchParams.append("lat", 38.03)
    }else{
        url.searchParams.append("lat", {middleMan})
    }

    useEffect(() =>{
        const thelat = (inputtext)
        //url.searchParams.append("lat", {middleMan})
        fetch(url)
        .then(response => response.json())
        .then(setData);
        console.log("working");
        console.log(data);
    },);
    
    
    if(middleMan===null){
        return(
            <div>
                <TextField size="small" id="myTextField" label="Longitude/Lattitude" variant="outlined" inputRef={textFieldRef} />
                <Button size="large" variant="contained" onClick={() => {(setInputText(textFieldRef.current.value));setMiddleMan(inputtext);}}>Press 2x</Button>
            </div>
        )

    }else{
        
        

        

        return(
        <>
            <div>
                
                <h2>
                   {middleMan}
                </h2>
                
            </div>

            <div className = "WeatherData">
            <h2>hello</h2>
            </div>
            </>
        )
    
    }
    */

   //const API_KEY = process.env.REACT_APP_api_key






   /*
   const [data, setData] = useState(null);

   const [latitude, setLatitude] = useState(0);
   const [longitude, setLongitude] = useState(0);
   const [temp, setTemp] =useState(0);
   const [location, setLocation] = useState('');

   const savePositionToState = (position) => {
       setLatitude(position.coords.latitude);
       setLongitude(position.coords.longitude);
   }

   const fetchWeather = async () => {
       try{
        await window.navigator.geolocation.getCurrentPosition(savePositionToState);

        const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=60d505bb48f9c02e8d1f29a621cd125f&units=metric`

            );
        console.log(res.data);
        setTemp(res.data.temp);
        console.log(res.data.name);
        console.log(res.data.temp);
       }catch (err){
           console.error(err);
       }
   }

   useEffect(() => {
       fetchWeather();
   }, [latitude, longitude]);

   return(
       <div>
           

           <h2>Temperature: {temp}</h2>
       </div>
   )

   */

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weather, setWeather] = useState("");
  const [theWeather, setTheWeather] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [cityName, setCityName] = useState("");
  const [icon, setIcon] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [windSpeed, setWindSpeed] = useState("");

  const makeImageWork = (icon) => {
    setImageLink(`http://openweathermap.org/img/wn/${icon}@2x.png`)
  };

  const savePositionToState = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const fetchWeather = async () => {
    try {
      await window.navigator.geolocation.getCurrentPosition(
        savePositionToState
      );
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=60d505bb48f9c02e8d1f29a621cd125f&units=imperial`
      );
      console.log(res.data);
      setTemperature(res.data.main.temp);
      setCityName(res.data.name);
      setWeather(res.data.weather[0].main);
      setIcon(res.data.weather[0].icon);
      makeImageWork(res.data.weather[0].icon);
      setTheWeather(res.data.weather[0].main);
      setWindSpeed(res.data.wind.speed);
      //console.log(res.data);
      console.log(res.data.weather[0].icon);

    } catch (err) {
      console.error(err);
    }
  };

  const fetchForecast = async () => {
    try {
      await window.navigator.geolocation.getCurrentPosition(
        savePositionToState
      );
      const restwo = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast/hourly?lat=${latitude}&lon=${longitude}&appid=556c8714a204a6927f6ed5d1cc72e279`
      );
      console.log(restwo.data);
      

    } catch (err) {
      console.error(err);
    }
  };



  useEffect(() => {
    fetchWeather();
    fetchForecast();
  }, [latitude, longitude]);

  return (
    <div className="app">
      <div className="app__container">
        <h1 style={{color:"White"}}>Showing Weather In {cityName} (your location)</h1>
        <h2>{theWeather}</h2>
        <img src={imageLink} />
        <h2>Temperature: {temperature}ºF</h2>
        <h2>Wind Speed: {windSpeed}m/h</h2>
        
        
        <h3>{News()}</h3>
      </div>
    </div>
  );
}

export default Thetext