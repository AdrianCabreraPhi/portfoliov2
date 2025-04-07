import { FaPhp } from "react-icons/fa";
import { SiRstudioide } from "react-icons/si";
import { FaJava } from "react-icons/fa";
const OtherLanguages = [
    {
        "name": "PHP",
        "icon": <FaPhp className="transition-opacity duration-300 ease-in-out opacity-75 group-hover:opacity-100    text-[#787BB3]" size={90} />, 
        "level":"Intermediate"
    },
    {
        "name": "Java",
        "icon": <FaJava className="transition-opacity duration-300 ease-in-out opacity-75 group-hover:opacity-100    text-[#5283A3]" size={90} />, 
        "level":"Advanced"
    },

    {
        "name": "R",
        "icon": <SiRstudioide className="transition-opacity duration-300 ease-in-out opacity-75 group-hover:opacity-100    text-[#76A9DC]" size={90} />, 
        "level":"Intermediate"
    },

]

export default OtherLanguages