import styled from "styled-components";
import ProfilImage from "../../assets/images/profil-img.png";
import Background from '../../assets/images/background.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content = styled.div`
  display: flex;
  opacity: 0;
  animation: fadeIn 300ms ease-in-out forwards;
  animation-delay: 300ms;
  background-image: url(${Background});

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .image-box {
    height: 100vh;
  }
`;
const StyledImage = styled.img`
  position: relative;
  height: 100vh;
  width: 400px;
  object-fit: cover;
`;

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  h1 {
    font-family: var(--font-title);
    color: var(--primary-color);
    letter-spacing: 5px;
    text-align: center;
    font-weight: bold;
    font-size: 80px;

    span {
      display: inline-block;
      animation: float 3s ease-in-out infinite;
      animation-delay: calc(0.2s * var(--i));

      @keyframes float {
        0% {
          transform: translateX(0px) translateY(0px);
        }
        50% {
          transform: translateX(10px) translateY(-15px);
        }
        100% {
          transform: translateX(0px) translateY(0px);
        }
      }
    }
  }

  h2 {
    font-family: var(--font-subtitle);
    font-size: 45px;
    margin: 35px;
  }

  p {
    color: var(--secondary-color);
    font-family: var(--font-subtitle);
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    line-height: 40px;
    margin-bottom: 45px;

    span {
      padding: 5px;
      background-color: var(--primary-color);
      white-space: pre-wrap;
    }
  }

  img {
    width: 130px;
    position: absolute;
    bottom: 25px;
    right: 10px;
  }

  .social-icons {
    display: flex;
    gap: 20px;
    margin-top: 20px;

    svg {
      font-size: 28px;
      transition: transform 1s ease;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

const HomeSection = () => {
  return (
    <Content className="presentation-content">
      <div className="image-box">
        <StyledImage src={ProfilImage} alt="profil-image" />
      </div>
      <StyledHome>
        <h1>
          {[..."WELCOME !"].map((letter, index) => (
            <span key={index} style={{ "--i": index }}>
              {letter}
            </span>
          ))}
        </h1>
        <h2>AUDREY BAUFAYS</h2>
        <p>
          <span>
            DÉVELOPPEUSE WEB
          </span>
        </p>
        <div>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/audrey-baufays-821123221/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </a>
            <a
              href="https://github.com/Audreyb1995"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
          </div>
        </div>
      </StyledHome>
    </Content>
  );
};

export default HomeSection;
