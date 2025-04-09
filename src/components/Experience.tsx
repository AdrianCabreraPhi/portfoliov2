import team_upf from "../assets/team_upf.webp";
import upf_logo from "../assets/upf_logo.png";

function Experience() {
  return (
    <div id="experience" className="w-dvh h-full">
      <div className="p-20">
        <div className="flex group flex-row justify-between min-h-40 border-2 border-[#665A41] rounded-xl p-4 shadow-md hover:shadow-xl transiton-all duration-300 ease-in-out">
          <img
            src={team_upf}
            width={500}
            className="opacity-70  transition-all duration-300 ease-in-out group-hover:opacity-100 rounded-md shadow-xl"
            alt=""
          />
          <div className="flex flex-col justify-self-center">
            <span className="text-7xl  transsition-all duration-300 ease-in-out opacity-50 group-hover:opacity-100 text-[#665A41]">
              2021-2025
            </span>

            <div className="information-experience text-[#665A41]">
              <strong className="text-lg">Role:</strong>{" "}
              <span className="text-md">Full Stack Developer</span>
              <br />
              <div className="flex flex-row gap-2 items-center">
                <strong className="text-lg">Company:</strong>{" "}
                <span className="text-md">Universitat Pompeu Fabra </span>{" "}
                <img src={upf_logo} width={25} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
