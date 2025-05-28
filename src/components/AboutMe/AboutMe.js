import styled from "styled-components";
import ScratchPaper from "../../assets/images/scratch-paper-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledAboutMe = styled.div`
  background-color: white;

  .about-me-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 30px;
    width: 100%;
  
    
    .about-me-title {
      position: relative;
      margin-top: 25px;

      img {
        width: 350px;
      }

      h1 {
        position: absolute;
        font-family: var(--font-subtitle);
        color: black;
        font-size: 40px;
        top: 45px;
        left: 60px;
      }
    }

    .about-me-description {
    display: flex;
    flex-direction: column;

      .text-description {
      font-family: var(--font-subtitle);
      font-size: 16px;
      text-align: justify;
      width: 700px;
      margin-bottom: 30px;
      line-height: 22px;

      span {
      color: var(--primary-color);
      font-weight:bold ;
      }
      }

      .email-block {
      display: flex;
      justify-content: center;
      align-items:center;
      gap: 20px;

      svg {
      font-size: 30px;
      color: var(--primary-color);
      }

      p {
      font-family: var(--font-subtitle);
      }
      }
    }
  }
`;

const AboutMeSection = () => {
  return (
    <StyledAboutMe>
      <div className="about-me-content">
        <div className="about-me-title">
          <img src={ScratchPaper} alt="scratch-paper" />
          <h1>ABOUT ME</h1>
        </div>
        <div className="about-me-description">
          <p className="text-description">
            Après plusieurs années dans le travail social, j’ai choisi de me réorienter vers le développement web afin de continuer à concevoir des solutions utiles et accessibles. 
            Cette transition m’a menée à suivre une formation en <span>développement web</span>, puis à réaliser un stage de six mois chez Dowino, une entreprise engagée.
            <br></br>Lors de ce stage, j’ai développé en autonomie une application web en Vue.js 3 liée à un casque de réalité augmentée, et j’ai participé à la création d’interfaces de visualisation de données dans un projet à destination du monde agricole. Ces expériences ont renforcé ma maîtrise des technologies front-end et mon intérêt pour l’expérience utilisateur.
            <br></br>Formée à <span>Vue.js, HTML/CSS, JavaScript, SCSS, Git</span>, j’approfondis aujourd’hui mes compétences back-end avec <span>Node.js et les bases de données</span> et front-end avec <span>React</span>.
            <br></br><span>Mon objectif</span> : créer des interfaces claires, accessibles et engageantes, au service de projets à impact.
          </p>
          <div className="email-block">
          <FontAwesomeIcon icon="fa-solid fa-envelope" />
          <p>audrey.baufays@gmail.com</p>
          </div>
        </div>
      </div>
    </StyledAboutMe>
  );
};

export default AboutMeSection;
