import React, { useEffect, useState } from "react";
import "./Player.css";

import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate()


  const [apiData, setApiData] = useState([
    {
      key:'',
      name:'',
      published_at:'',
      type:'',
    }
  ]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGFjMDBhY2E0OWJhMjYxYjBkZWFhYWMxNTE0MDc0NyIsIm5iZiI6MTc0NDM0OTAzNC41NjYwMDAyLCJzdWIiOiI2N2Y4YTc2YWQ4MTc0OGNjZmY5OTg3MmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Z3RkAde64wAdwOwNSmjEo3pYKQkxqbI_r3U_JfUxbcI'
    }
  };
  


  useEffect(()=> {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={()=> navigate('/')} />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="Trailer"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at?.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
