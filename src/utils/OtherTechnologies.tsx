import { FaDocker } from "react-icons/fa";
import { SiKeycloak,SiMysql,SiPostgresql,SiMongodb } from "react-icons/si";
const OtherTecnhologies = [
    {
        "name":"Docker",
        "icon": <FaDocker className="transition-opacity duration-300 ease-in-out opacity-75 group-hover:opacity-100    text-[#2290E4]" size={90} />, 
        "level":"Advanced"
    },
    {
        "name":"Keycloak",
        "icon": <SiKeycloak className="transition-opacity duration-300 ease-in-out opacity-75 group-hover:opacity-100    text-[#4B4B4B]" size={90} />, 
        "level":"Intermediate"
    },
    {
        "name":"MySQL",
        "icon": <SiMysql className="transition-opacity duration-300 ease-in-out opacity-75 group-hover:opacity-100    text-[#F39112]" size={90} />, 
        "level":"Advanced"
    },
    {
        "name":"PostgreSQL ",
        "icon": <SiPostgresql className="transition-opacity duration-300 ease-in-out opacity-75 group-hover:opacity-100    text-[#396C95]" size={90} />, 
        "level":"Advanced"
    },
    {
        "name":"MongoDB ",
        "icon": <SiMongodb className="transition-opacity duration-300 ease-in-out opacity-75 group-hover:opacity-100    text-[#00684A]" size={90} />, 
        "level":"Advanced"
    }
]

export default OtherTecnhologies