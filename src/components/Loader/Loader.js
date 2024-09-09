import Video from "../../assets/videos/loader.mp4";
import styled from "styled-components";

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const LoadingVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: fadeOut 3s ease-in-out forwards;
  animation-delay: calc(100% - 3s);

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <LoadingVideo autoPlay muted loop className="loading-video">
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </LoadingVideo>
    </LoaderContainer>
  );
};

export default Loader;
