import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";

function ProjectItem({ number, title, videoSrc, companyLogo, technologies,urlWebsite }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;
    const videoWidth = 500; // Ancho del video en píxeles
    x.set(posX - videoWidth); // Mueve el video a la izquierda del cursor
    y.set(posY);
  };

  return (
    <a
    href={urlWebsite}
    target="_blank"
      className="flex group flex-wrap cursor-pointer flex-row justify-between  min-h-20  md:min-h-40 relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="index text-3xl md:text-7xl group-hover:pl-2 transition-all duration-300 ease-in-out opacity-50 group-hover:opacity-100 text-[#665A41]">
        {number}
      </span>
      <div className="flex flex-col h-auto justify-between items-center">
        <span className="text-2xl  md:text-5xl z-10 transition-all self-center duration-300 ease-in-out opacity-50 group-hover:opacity-100 text-[#665A41]">
          {title}
        </span>
        
        <div className="flex flex-row gap-4  md:gap-10">
          {technologies.map((technology, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-2 duration-300 transition-all ease-in-out opacity-50 group-hover:opacity-100 text-[#665A41]"
            >
              {technology.logo} {technology.name}
            </div>
          ))}
        </div>
      </div>
     {companyLogo && (
        <img
          id="upf_logo"
          className="self-start w-[25px]  md:w-[50px] sepia transition-all duration-300 ease-in-out group-hover:sepia-0 rounded"
          src={companyLogo}
        
          alt="Logo"
        />
      )}
 

      {/* Video que sigue el cursor */}
      <motion.video
        src={videoSrc}
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
    
          left: -300,
          bottom: 50,
          x: x,
          y: y,
          pointerEvents: "none",
          zIndex: 20,
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="w-[500px] rounded-md"
      />
    </a>
  );
}

export default ProjectItem;
