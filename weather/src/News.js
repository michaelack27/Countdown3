import {useEffect, useState} from "react";
import axios from "axios"


import {useRef} from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Thetext from './Thetext.js'


const News = () =>{

  //const [weather, setWeather] = useState("");
  
  const [thenews, setTheNews] = useState("");

  const [firstTitle, setFirstTitle] = useState("");
  const [firstLink, setFirstLink] = useState("");
  const [firstAuthor, setFirstAuthor] = useState("");

  const [secondTitle, setSecondTitle] = useState("");
  const [secondLink, setSecondLink] = useState("");
  const [secondAuthor, setSecondAuthor] = useState("");

  const [thirdTitle, setThirdTitle] = useState("");
  const [thirdLink, setThirdLink] = useState("");
  const [thirdAuthor, setThirdAuthor] = useState("");

  const [fourthTitle, setFourthTitle] = useState("");
  const [fourthLink, setFourthLink] = useState("");
  const [fourthAuthor, setFourthAuthor] = useState("");

  const [fifthTitle, setFifthTitle] = useState("");
  const [fifthLink, setFifthLink] = useState("");
  const [fifthAuthor, setFifthAuthor] = useState("");

  const fetchNews = async () => {
    try {
      const res = await axios.get(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=eLmL7kDhDURdkKTxLxJ6wygB8jvATtXP`
      );
      //setWeather(res.data.weather[0].main);
    
      setFirstTitle(res.data.results[0].title);
      setFirstLink(res.data.results[0].url);
      setFirstAuthor(res.data.results[0].byline);

      setSecondTitle(res.data.results[1].title);
      setSecondLink(res.data.results[1].url);
      setSecondAuthor(res.data.results[1].byline);

      setThirdTitle(res.data.results[2].title);
      setThirdLink(res.data.results[2].url);
      setThirdAuthor(res.data.results[2].byline);

      setFourthTitle(res.data.results[3].title);
      setFourthLink(res.data.results[3].url);
      setFourthAuthor(res.data.results[3].byline);

      setFifthTitle(res.data.results[4].title);
      setFifthLink(res.data.results[4].url);
      setFifthAuthor(res.data.results[4].byline);

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);


    return(
        <div>
            <h1 style={{color:"White"}}>Top News Stories:</h1>
        <h2>1: {firstTitle}</h2>
        <h5>{firstAuthor}</h5>
        <h4>Link: {firstLink}</h4>


        <h2>2: {secondTitle}</h2>
        <h5>{secondAuthor}</h5>
        <h4>Link: {secondLink}</h4>

        <h2>3: {thirdTitle}</h2>
        <h5>{thirdAuthor}</h5>
        <h4>Link: {thirdLink}</h4>

        <h2>4: {fourthTitle}</h2>
        <h5>{fourthAuthor}</h5>
        <h4>Link: {fourthLink}</h4>

        <h2>5: {fifthTitle}</h2>
        <h5>{fifthAuthor}</h5>
        <h4>Link: {fifthLink}</h4>
        </div>
    )
    
}

export default News