import "./App.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import flag_spain from "./assets/flag_spain.png";
import face from "./assets/face.png";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

import Skills from "./components/skills";
import Projects from "./components/projects";
import Experience from "./components/Experience";
function App() {
  const [section, setSection] = useState("skills");
  const [firstTime, setFirstTime] = useState(0);

  const selectedSection = (value: string) => {
    //know in which section are actually. Default Section skills
    setSection(value);
    setFirstTime(1);
    console.log(value);
  };

  //default class elements li
  const liBaseClasses =
    "text-2xl text-stone-600 transition-all duration-300 ease-in-out hover:text-stone-900 p-2";
  const liBaseClassesMobile = "cursor-pointer";
  return (
    <>
      <Fade direction="left" delay={500}>
        <div className="fixed shadow-md flex flex-wrap flex-row items-center gap-2 left-0 top-50 p-2 mt-30 rounded-r-2xl  border-r border-b border-t border-stone-500 border-dashed">
          <span className="text-2xl text-stone-600">Location</span>{" "}
          <img id="location_img" src={flag_spain} width={50} alt="" />
        </div>
      </Fade>
      <div className=" md:h-[100vh]  w-full flex flex-col md:flex-row  bg-[#F2DBB6] ">
        <div className="flex flex-col justify-between items-center md:min-w-3xl pt-20 md:border-r border-dashed border-stone-500">
          <div className="flex items-center flex-col justify-center  ">
            <Fade delay={100}>
              <span className="text-center text-shadow-md text-shadow-stone-500 text-stone-900   text-5xl md:text-7xl">
                Adrian Cabrera
              </span>
            </Fade>
            <Fade delay={300}>
              <span className="text-2xl  text-stone-600">
                Full Stack Developer
              </span>
            </Fade>
            <Fade delay={400}>
              <div className="flex shadow-md mb-[30vh] flex-row p-2 gap-4 border  border-stone-500  border-dashed rounded-xl">
                <a href="https://github.com/AdrianCabreraPhi" target="_blank">
                  <FaGithub
                    className="text-stone-600 transition-colors duration-300 ease-in-out hover:text-stone-900 cursor-pointer"
                    size={30}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/adrian-cabrera-9148b217b/"
                  target="_blank"
                >
                  <FaLinkedin
                    className="rounded-xl transition-all duration-300 text-stone-600 ease-in-out hover:text-stone-900 cursor-pointer"
                    size={30}
                  />
                </a>
              </div>
            </Fade>
          </div>

          <Fade delay={400}>
            <img
              className="mask-r-from-5% transition-all duration-300 ease-in-out hover:mask-r-from-20% object-contain"
              src={face}
              alt="face of me in ghibli style"
              width={600}
            />

            {/* <img
              className="mask-r-from-5% transition-all duration-300 ease-in-out hover:mask-r-from-20%"
              src={face}
              alt="face of me in ghibli style"
              width={300}
            /> */}
          </Fade>
        </div>

        {/* navbar mobile */}
        <nav className="fixed visible md:hidden bottom-3 left-1/2 transform   -translate-x-1/2 z-50">
          <ul className="flex cursor-pointer flex-row gap-4  rounded-2xl bg-[#F2DBB680]  border border-[#958162] border-dashed  p-2">
            <li className={`section == "skills" ? "" : "" `}>
              <a       onClick={() => selectedSection("skills")} href="#skills">Skills</a>
            </li>
            <li>
            <a       onClick={() => selectedSection("experience")}  href="#experience">Experience</a>
            </li>
            <li>
<a  onClick={() => selectedSection("projects")} href="#projects">Projects</a>

            </li>
          </ul>
        </nav>
        {/* tabs skills experience projects */}
        <div className="ml-10 hidden md:visible md:flex flex-row  items-center border-r border-dashed border-stone-500 pr-5">
          <Fade delay={1500}>
            <div className="tabs pt-20 flex flex-col gap-20">
              <ul className="flex flex-row md:flex-col gap-2 md:gap-20">
                <li className="">
                  <a
                    onClick={() => selectedSection("skills")}
                    className={`${liBaseClasses} ${
                      section === "skills" ? "text-stone-900" : ""
                    }`}
                    href="#skills"
                  >
                    Skills
                  </a>
                </li>

                <li>
                  <a
                    onClick={() => selectedSection("experience")}
                    className={`${liBaseClasses} ${
                      section === "experience" ? "text-stone-900" : ""
                    }`}
                    href="#experience"
                  >
                    Experience
                  </a>
                </li>

                <li>
                  <a
                    onClick={() => selectedSection("projects")}
                    className={`${liBaseClasses} ${
                      section === "projects" ? "text-stone-900" : ""
                    }`}
                    href="#projects"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </Fade>
        </div>

        {/* sections */}
        {section === "skills" && (
          <Fade delay={firstTime == 0 ? 2000 : 0}>
            <Skills />
          </Fade>
        )}
        {section === "experience" && (
          <Fade>
            <Experience />
          </Fade>
        )}
        {section === "projects" && (
          <Fade>
            <Projects />
          </Fade>
        )}
      </div>
    </>
  );
}

export default App;
