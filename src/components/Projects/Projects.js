import { ProjectList } from "../../data/ProjectsData.js";
import ProjectItem from "./ProjectItem.js";
import ScratchPaper from "../../assets/images/scratch-paper-1.png";
import styled from "styled-components";

const ContentProject = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 30px;

  .scotch-img {
    position: absolute;
    top: -70px;
    right: 75px;
    width: 200px;
  }

  .separation-bar {
    box-shadow: -1px 1px 5px var(--primary-color);
    width: 950px;
    height: 2px;
    margin: 40px 0;
  }
`;
const ProjectTitle = styled.div`
    position: relative;
    display: flex;
    justify-content: center;


      img {
       width: 400px;
      }

      h1 {
        position: absolute;
        font-family: var(--font-subtitle);
        color: black;
        font-size: 40px;
        top: 60px;
      }
      }
`;

function Projects() {
  return (
    <div>
      <ContentProject>
        <div className="separation-bar"></div>
        <ProjectTitle>
          <img src={ScratchPaper} alt="scratch-paper" />
          <h1>MES PROJETS</h1>
        </ProjectTitle>

        {ProjectList.map((project, index) => (
          <div key={index}>
            <ProjectItem
              className="project"
              title={project.title}
              period={project.period}
              description={project.description}
              stack={project.stack}
              skills={project.skills}
              image={project.image}
              link={project.link}
            />
          </div>
        ))}
      </ContentProject>
    </div>
  );
}

export default Projects;
