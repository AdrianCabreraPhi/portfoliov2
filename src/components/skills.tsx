import { useState } from "react";
import CardSkill from "./CardSkill";
import MainStack from "../utils/MainStack";
import MainStackCSS from "../utils/MainStackStyles";
import { Fade } from "react-awesome-reveal";
import OtherLanguages from "../utils/OtherLanguages";
import OtherTecnhologies from "../utils/OtherTechnologies";
import TechnologiesLearning from "../utils/TechnologiesLearning";
import { GiSpellBook } from "react-icons/gi";
import { MdOutlineDraw } from "react-icons/md";
import { GoStack } from "react-icons/go";
function Skills() {
  const [section, setSection] = useState("main-stack");
  const baseClass =
    "transition-all duration-300 ease-in-out hover:opacity-100  rounded shadow-md cursor-pointer bg-[#989B57] opacity-65  p-2 border-2 border-b-3 border-[#767835] text-stone-700 ";
  const changeSection = (value: string) => {
    setSection(value);
  };
  return (
    <>
      <div
        className="w-dvh h-[100vh]  flex flex-col items-center pt-20 gap-15"
        id="skills"
      >
        <div className="container-tabs-skills">
          <ul className="flex flex-row gap-20">
            <li
              className={`${baseClass} ${
                section === "other-tecnologies" ? " opacity-100" : ""
              }`}
              onClick={() => changeSection("other-tecnologies")}
            >
              Other tecnologies
            </li>
            <li
              className={`${baseClass} ${
                section === "main-stack" ? "opacity-100" : ""
              }`}
              onClick={() => changeSection("main-stack")}
            >
              Main Stack
            </li>
            <li
              className={`${baseClass} ${
                section === "other-languages" ? "opacity-100" : ""
              }`}
              onClick={() => changeSection("other-languages")}
            >
              Other languages
            </li>
          </ul>
        </div>

        {section == "main-stack" && (
          <>
          <Fade>
          <span className="text-[#665A41] opacity-70 text-sm flex flex-row gap-1">
         <GoStack size={15}/>     Front End | Back End
            </span>
          </Fade>
          <Fade>
            <div className="w-auto flex-wrap  flex flex-row justify-center-safe  gap-15">
              {MainStack.map((skill, index) => (
                <CardSkill
                  fadeDelay={index * 100}
                  skill={skill}
             
                />
              ))}
            </div>
            </Fade>
            <Fade>
            <span className="text-[#665A41] opacity-70 text-sm flex flex-row gap-1"><MdOutlineDraw size={15}/>  Styles</span>

            </Fade>
            <Fade>

            <div className="w-auto flex flex-wrap  flex-row justify-center-safe  gap-15">
              {MainStackCSS.map((skill, index) => (
                <CardSkill
                  fadeDelay={index * 100}
                  skill={skill}
                />
              ))}
            </div>
            </Fade>
            <Fade>
            <span className="text-[#665A41] opacity-70 text-sm flex flex-row gap-1"> <GiSpellBook size={15}/>  Learning</span>

            </Fade>
            <Fade>

            <div className="w-auto flex flex-wrap  flex-row justify-center-safe  gap-15">
              {TechnologiesLearning.map((skill, index) => (
                <CardSkill
                  fadeDelay={index * 100}
                  skill={skill}
                />
              ))}
            </div>
            </Fade>

            

            
          </>
        )}

        {section == "other-languages" && (
              <Fade>
            <span className="text-[#665A41] opacity-70 text-sm">Other Languages</span>

              <div className="w-auto flex flex-wrap  flex-row justify-center-safe  gap-15">
                {OtherLanguages.map((skill, index) => (
                  <CardSkill
                    fadeDelay={index * 100}
                    skill={skill}
               
                  />
                ))}
              </div>
              </Fade>

        )}

{section == "other-tecnologies" && (
              <Fade>
            <span className="text-[#665A41] opacity-70 text-sm">DevOps | DB | Security</span>

              <div className="w-auto flex flex-row  flex-wrap  justify-center-safe  gap-15">
                {OtherTecnhologies.map((skill, index) => (
                  <CardSkill
                    fadeDelay={index * 100}
                    skill={skill}
               
                  />
                ))}
              </div>
              </Fade>

        )}

      </div>
    </>
  );
}

export default Skills;
