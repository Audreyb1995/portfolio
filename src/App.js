import Loader from "./components/Loader/Loader.js";
import HomeSection from "./components/Home/Home.js";
import AboutMeSection from "./components/AboutMe/AboutMe.js";
import ProjectSection from "./components/Projects/Projects.js";
import Footer from "./components/Footer/Footer.js";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <HomeSection />
          <div>
            <AboutMeSection />
          </div>
          <ProjectSection />
          <Footer/>
        </div>
      )}

    </div> 
  );

}

export default App;
