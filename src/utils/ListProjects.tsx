
import upf_logo from "../assets/upf_logo.png";
import ra_studio_logo from "../assets/logo_ra_studio.png"
import { FaAngular,FaBootstrap,FaReact,FaNodeJs } from "react-icons/fa";
import { SiTailwindcss,SiMongodb } from "react-icons/si";
const ListProjects = [
    {
        "number":"01",
        "title": "Namastox",
        "videoSrc":"/namastox_video.mp4",
        "companyLogo": upf_logo,
        "technologies": [{"name":"Angular","logo":<FaAngular className="transition-opacity duration-300 ease-in-out opacity-75 group-hover:opacity-100 text-[#665A41]" size={40} />},{"name":"Bootstrap 5","logo":<FaBootstrap className="transition-opacity duration-300 ease-in-out opacity-75 group-hover:opacity-100 text-[#665A41]" size={40} />}]
    
    },
    {
        "number":"02",
        "title": "Permanens",
        "videoSrc":"/permanens.mp4",
        "companyLogo": upf_logo,
        "technologies": [{"name":"React","logo":<FaReact className="wtransition-opacity duration-300 ease-in-out opacity-75 group-hover:opacity-100 text-[#665A41]" size={40} />},{"name":"Tailwind CSS","logo":<SiTailwindcss className="transition-opacity duration-300 ease-in-out opacity-75 group-hover:opacity-100 text-[#665A41]" size={40} />}]
    },
    {
        "number":"03",
        "title": "Flame v3",
        "videoSrc": false,
        "companyLogo": upf_logo,
        "technologies": [{"name":"Angular","logo":<FaAngular className="transition-opacity duration-300 ease-in-out opacity-75 group-hover:opacity-100 text-[#665A41]" size={40} />},{"name":"Bootstrap 5","logo":<FaBootstrap className="transition-opacity duration-300 ease-in-out opacity-75 group-hover:opacity-100 text-[#665A41]" size={40} />}]
    },
    {
        "number":"04",
        "title": "RA Investment",
        "videoSrc": "/rainvestmentwebversion.mp4",
        "companyLogo": ra_studio_logo,
        "technologies": [
        {"name":"React","logo":<FaReact className="transition-opacity duration-300 ease-in-out opacity-75 group-hover:opacity-100 text-[#665A41]" size={40} />},
        {"name":"Tailwind CSS","logo":<SiTailwindcss className="transition-opacity duration-300 ease-in-out opacity-75 group-hover:opacity-100 text-[#665A41]" size={40} />},
        {"name":"NodeJS","logo":<FaNodeJs className="transition-opacity duration-300 ease-in-out opacity-75 group-hover:opacity-100 text-[#665A41]" size={40} />},
        {"name":"MongoDB","logo":<SiMongodb className="transition-opacity duration-300 ease-in-out opacity-75 group-hover:opacity-100 text-[#665A41]" size={40} />},]
    },



]

export default ListProjects