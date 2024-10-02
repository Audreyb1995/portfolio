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
            Après avoir obtenu mon diplôme d'Assistante de service social et
            acquis une expérience en clinique privée, j'ai ressenti le besoin de
            donner une nouvelle orientation à ma carrière. Attirée par le monde
            du Web, j'ai entrepris une formation en{" "}
            <span>développement web et web mobile</span> au Reacteur. Désireuse
            de continuer à progresser et d'approfondir mes compétences, je
            recherche une entreprise pouvant m'accueillir en stage ou en
            alternance. Intégrer une entreprise me permettrait de développer
            davantage mes compétences et concrétiser ce nouveau projet
            professionnel.
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
