
import { FaAngular, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiDjango, SiFlask } from "react-icons/si";


const MainStack = [
    {
        "name": "Javascript",
        "icon":<IoLogoJavascript className="transition-opacity duration-300 ease-in-out opacity-75 group-hover:opacity-100   text-[#a79521]" size={90} />
        ,
        "level": "Advanced"
    },
    {
        "name": "Angular",
        "icon": <FaAngular className="transition-opacity duration-300 ease-in-out opacity-75 group-hover:opacity-100   text-red-700" size={90} />,
        "level": "Advanced"

    },
    {
        "name": "React",
        "icon":    <FaReact className="transition-opacity duration-300 ease-in-out opacity-75 group-hover:opacity-100    text-[#177c9d]" size={90} />,
        "level": "Intermediate"

    },
    {
        "name": "Python",
        "icon":   <FaPython className="transition-opacity duration-300 ease-in-out opacity-75 group-hover:opacity-100    text-[#177c9d]" size={90} />,
        "level":  "Advanced"
    },
    {
        "name": "Flask",
        "icon": <SiFlask className="transition-opacity duration-300 ease-in-out opacity-75 group-hover:opacity-100 " size={90} />,
        "level": "Advanced"
    },
    {
        "name":"Django",
        "icon":<SiDjango className="transition-opacity duration-300 ease-in-out opacity-75 group-hover:opacity-100  text-[#0C4B33]" size={90} />,
        "level":"Intermediate"
    },
    {
    "name":"NodeJS",
    "icon":<FaNodeJs className="transition-opacity duration-300 ease-in-out opacity-75 group-hover:opacity-100  text-[#417E38]" size={90} />,
    "level":"Intermediate"
}
]

export default MainStack