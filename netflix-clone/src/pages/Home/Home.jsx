import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TtitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    const [apiData, setApiData] = useState({});

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGFjMDBhY2E0OWJhMjYxYjBkZWFhYWMxNTE0MDc0NyIsIm5iZiI6MTc0NDM0OTAzNC41NjYwMDAyLCJzdWIiOiI2N2Y4YTc2YWQ4MTc0OGNjZmY5OTg3MmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Z3RkAde64wAdwOwNSmjEo3pYKQkxqbI_r3U_JfUxbcI",
      },
    };

    useEffect(() => {
      fetch(
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        options
      )
        .then((res) => res.json())
        .then((res) => setApiData(res.results[0]))
        .catch((err) => console.error(err));
    }, []);


  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        {/* <img src={`https://image.tmdb.org/t/p/w500${apiData?.backdrop_path}`} alt="" className="banner-img" /> */}
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
              {apiData.overview}
          </p>
          <div className="hero-btns">
            <button className="btn"><img src={play_icon} alt="" />Play</button>
            <button className="btn dark-btn"><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards/>
        </div>    
      </div>
      <div className="more-cards">
        <TitleCards title='Blockbuster Movies' category={'now_playing'} />
        <TitleCards title='Only on Netflix' />
        <TitleCards title='Upcoming Movies' category={'upcoming'}/>
        <TitleCards title='Top Pics for you' />
      </div>
      <Footer/>
    </div>
    
  );
};

export default Home;
