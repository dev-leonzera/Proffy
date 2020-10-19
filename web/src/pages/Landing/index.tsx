import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import logo from "../../assets/img/logo.svg";
import landing from "../../assets/img/landing.svg";

import studyIcon from "../../assets/img/icons/study.svg";
import teachIcon from "../../assets/img/icons/give-classes.svg";

import purpleHeartIcon from "../../assets/img/icons/purple-heart.svg";
import api from "../../services/api";

function Landing() {

  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('/connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    })
  }, [])


  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logo} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img src={landing} alt="Plataforma de estudos" className="hero-image" />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/give-classes" className="teach">
            <img src={teachIcon} alt="Ensinar" />
            Ensinar
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração Roxo" />
        </span>
      </div>
    </div>
  );
};

export default Landing;