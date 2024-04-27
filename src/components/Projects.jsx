import React from "react";
import ProjectItem from "./ProjectItem";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1000px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis sem
        et sem efficitur congue. Proin et ligula eget dui facilisis fermentum.
        Morbi consectetur ac enim et ornare. t amet faucibus nunc, non maximus
        turpis. Duis a faucibus odio. Donec dignissim tincidunt nisl, eget
        tempus dui dapibus sed. Maecenas eget mauris non ipsum dignissim
        volutpat ac utcitudin dignissim felis. Ut mollis dui purus, ut facilisis
        risus porta quis.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={img1} title="App 1" />
        <ProjectItem img={img2} title="App 2" />
        <ProjectItem img={img3} title="App 3" />
        <ProjectItem img={img4} title="App 4" />
      </div>
    </div>
  );
};

export default Projects;
