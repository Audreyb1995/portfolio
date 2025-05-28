import styled from "styled-components";
import ScratchPaper from "../../assets/images/scratch-paper-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledExperiences = styled.div`
  background-color: white;

  .experience-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 30px;
    width: 100%;

    .separation-bar {
    box-shadow: -1px 1px 5px var(--primary-color);
    width: 950px;
    height: 2px;
    margin: 40px 0;
  }
  
    
    .experience-title {
      position: relative;
      margin-top: 25px;

      img {
        width: 390px;
      }

      h1 {
        position: absolute;
        font-family: var(--font-subtitle);
        color: black;
        font-size: 40px;
        top: 45px;
        left: 60px;
        padding-top: 10px;
      }
    }

    .experience-description {
    display: flex;
    flex-direction: column;

    h4 {
        font-family: var(--font-subtitle);
        text-align: center;
    }

    span {
        text-align: center;
    }

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
    }
  }
`;


const ExperiencesSection = () => {
    return (
        <StyledExperiences>
        <div className="experience-content">
        <div className="separation-bar"></div>
          <div className="experience-title">
            <img src={ScratchPaper} alt="scratch-paper" />
            <h1>EXPERIENCES</h1>
          </div>
          <div className="experience-description">
          <h4>Dowino - Novembre 2024 à Avril 2025</h4>
          <span>Stage Développeuse Web</span>
            <p className="text-description">
            
            </p>
          </div>
        </div>
        </StyledExperiences>
    );
  };
  
  export default ExperiencesSection;
  