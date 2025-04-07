import { Fade } from "react-awesome-reveal";
import LevelFormatGhibli from "./LevelFormatGhibli";

function CardSkill({ skill,fadeDelay }) {
  return (
    <div
      className="group card-technology  h-fit flex flex-col items-center   border p-2 border-dashed rounded-md shadow-md border-neutral-500 transition-all duration-300 ease-in-out hover:border-black"
    >
      <Fade delay={fadeDelay}>
        <span></span>
        {skill.icon}
        <span className="text-xl text-[#665A41]">{skill.name}</span>
        <div className="flex flex-col items-center mt-1">
          <div className="flex flex-row text-[#665A41]  gap-2">
            <LevelFormatGhibli level={skill.level} />
          </div>
          <span className="text-sm text-stone-600">{skill.level}</span>
        </div>
      </Fade>
    </div>
  );
}

export default CardSkill;
