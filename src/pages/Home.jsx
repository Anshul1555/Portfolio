import React from "react";
import Projects from "./Projects";
import "../css/Body.css";


const Home = () => {
  return (
    <section className="home-section text-center">
      <h1>Welcome to My Portfolio</h1>
      <p>
        I'm Anshul Sharma, a passionate full-stack developer. Explore my projects and
        skills, and feel free to reach out!
      </p>
      

      <div id="portfolio">
        <Projects />
      </div>

    </section>
  );
};

export default Home;