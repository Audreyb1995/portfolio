import styled from "styled-components";
import Scotch from "../../assets/images/scotch.png";
import { useState } from "react";

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 40px;
  width: 1000px;
  padding: 50px 30px;
  box-shadow: 0 2px 5px grey;
  border-radius: 15px;
  position: relative;
  padding-bottom: 40px;
  margin-bottom: 80px;

  .scotch-img {
    position: absolute;
    top: -75px;
    right: 75px;

    img {
      width: 450px;
    }
  }

  h3 {
    font-family: var(--font-subtitle);
    font-size: 20px;
    text-transform: uppercase;
    color: white;
    background-color: var(--primary-color);
    padding: 10px 20px;
    border-radius: 5px;
  }

  .description-project {
    display: flex;
    width: 100%;

    .img-project {
      width: 560px;
      border-radius: 5px;
      border: 1px solid grey;
    }
    .hoverable {
      &:hover {
      }
    }

    .project-text {
      padding: 40px;

      p {
        font-family: var(--font-subtitle);
        font-size: 15px;
      }

      .period {
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
      }
      .stack {
        color: grey;
      }
    }

    .skills-container {
      display: flex;
      gap: 20px;
      padding: 10px 0;
      justify-content: center;
      img {
        width: 30px;
        object-fit: cover;
      }
    }
  }
  a {
    button {
      background-color: var(--primary-color);
      border: none;
      padding: 10px;
      border-radius: 5px;
      font-family: var(--font-subtitle);
      color: white;
      font-weight: bold;
      cursor: pointer;
      font-size: 16px;
      transition:
        background-color 0.5s ease,
        transform 0.5s ease;

      &:hover {
        background-color: #688279;
        transform: scale(1.1);
      }
    }
  }
`;

const ProjectItem = ({
  title,
  period,
  description,
  stack,
  skills,
  image,
  link,
}) => {
  const hasLink = Boolean(link);
  return (
    <StyledProject>
      <div className="scotch-img">
        <img src={Scotch} alt="scotch-img" />
      </div>
      <h3>{title}</h3>
      <div className="description-project">
        <img
          className={`img-project ${hasLink ? "hoverable" : ""}`}
          src={image}
          alt={title}
        />

        <div className="project-text">
          <p className="period">{period}</p>
          <p>{description}</p>
          <p className="stack">{stack || ""}</p>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <img
                key={index}
                src={skill}
                alt={`Skill ${index}`}
                className="skill-image"
              />
            ))}
          </div>
        </div>
      </div>
      {hasLink ? (
        <a href={link} target="_blank" rel="noreferrer">
          {" "}
          <button>Découvrir ici</button>{" "}
        </a>
      ) : null}
    </StyledProject>
  );
};

export default ProjectItem;
