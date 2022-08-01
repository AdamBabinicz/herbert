import React, { useRef, useState } from "react";
import "./About.css";
import images from "../../constants/images";
import { about_stats } from "../../constants/data";
import video from "../../assets/videos/video.mp4";
import { FaPlay } from "react-icons/fa";

const About = () => {
  const vidRef = useRef(null);
  const [toggleVideo, setToggleVideo] = useState(false);
  const playVideo = () => {
    setToggleVideo(!toggleVideo);

    if (toggleVideo) vidRef.current.play();
    else vidRef.current.pause();
  };

  return (
    <div className="about section-p" id="poeta">
      <div className="container">
        <div className="about-content">
          <div className="about-grid grid">
            <img
              src={images.About_Alex}
              alt="..."
              className="about-img mx-auto al"
            />
            <div className="section-title">
              <h3 className="text-brown">
                przykazania
                <span className="text-dark"> pana Cogito</span>
              </h3>
              <br />
              <div className="par">
                <p className="text mx-auto">Pan Bóg kiedy budował świat</p>
                <p className="text mx-auto">marszczył czoło</p>
                <p className="text mx-auto">obliczał obliczał obliczał</p>
                <p className="text mx-auto">dlatego świat jest doskonały</p>
                <p className="text mx-auto">i nie można w nim mieszkać</p>
                <p className="text mx-auto">
                  ("W pracowni" w: "Studium przedmiotu", 1961)
                </p>
              </div>
            </div>
            <br />
            <h4 className="text-brown fs-20">
              HERBERT <span className="text-dark">i&nbsp;liczby</span>
            </h4>
          </div>
          <div className="about-grid grid">
            {about_stats.map((about_stat, index) => {
              return (
                <div className="about-item text-center flex" key={index}>
                  <div className="about-item-icon">
                    <img src={about_stat.image} alt="..." />
                  </div>
                  <div className="about-item-text text-left">
                    <h3 className="fs-24 ls-2">{about_stat.value}</h3>
                    <p className="text">{about_stat.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="about-grid grid">
            <div className="section-title">
              <h3 className="text-brown">
                myśleć i&nbsp;mówić
                <span className="text-dark"> prawdę</span>
              </h3>
              <p className="text mx-auto l">
                Kluczami do zrozumienia poezji Herberta są kategorie
                wydziedziczenia, ironii i wierności. Wiersze poety stanowią
                próbę odnowienia tradycji jako aksjologicznego fundamentu życia
                jednostki. W lirycznych przypowieściach dokonuje się
                przeciwstawienie obrazu moralnej jałowości i zagubienia
                współczesnego człowieka etycznemu kodeksowi bohaterów kultury
                śródziemnomorskiej, "obrońców królestwa bez kresu i miasta
                popiołów".
              </p>
              <br />
              <p>
                <em>culture.pl/pl/tworca/zbigniew-herbert</em>
              </p>
            </div>
            <div className="about-video">
              <video className="about-video" autoPlay loop ref={vidRef}>
                <source src={video} type="video/mp4" />
              </video>
              <button
                type="button"
                className="vidPlayBtn flex flex-c"
                onClick={playVideo}
              >
                <FaPlay className="text-brown" size={28} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
