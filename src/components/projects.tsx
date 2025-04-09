import ProjectItem from "./ProjectItem";
import ListProjects from "../utils/ListProjects";
function Projects() {
  return (
    <div id="projects" className="w-dvh  bg-white px-3 shadow-2xl rounded ml-3 mt-3  ">
      <div className="p-20">
        {ListProjects.map((project,index) => (
    
          <div className="py-7 border-b  border-gray-100 ">
            
            <ProjectItem
          key={index}
            number={project.number}
            title={project.title}
            videoSrc={project.videoSrc}
            companyLogo={project.companyLogo}
            technologies = {project.technologies}
          /> </div>
       
        ))}
        {/* <hr className="border-dashed text-stone-500 pb-5" />
        <ProjectItem
          number="02"
          title="Permanens"
          videoSrc="/permanens.mp4"
        />
        <hr className="border-dashed text-stone-500 pb-5" />

        <ProjectItem
          number="03"
          title="Flame v3"
          videoSrc="/comingsoon.mp4"
        />
        <hr className="border-dashed text-stone-500" /> */}
      </div>
    </div>
  );
}

export default Projects;
