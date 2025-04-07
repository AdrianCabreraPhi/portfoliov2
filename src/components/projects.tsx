import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import upf_logo from "../assets/upf_logo.png";

const ProjectItem = ({ number, title, videoSrc }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;
    x.set(posX);
    y.set(posY);
  };

  return (
    <div
      className="flex group cursor-pointer flex-row justify-between min-h-40 relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="index text-7xl group-hover:pl-2 transition-all duration-300 ease-in-out opacity-50 group-hover:opacity-100 text-[#665A41]">
        {number}
      </span>
      <span className="text-5xl z-10 transition-all self-center duration-300 ease-in-out opacity-50 group-hover:opacity-100 text-[#665A41]">
        {title}
      </span>
      <img
        id="upf_logo"
        className="self-start sepia transition-all duration-300 ease-in-out group-hover:sepia-0"
        src={upf_logo}
        width={50}
        alt="Logo"
      />

      {/* Video que sigue el cursor */}
      <motion.video
        src={videoSrc}
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          x: x,
          y: y,
          pointerEvents: "none",
          zIndex: 20
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="w-[500px] rounded-md"
      />
    </div>
  );
};

function Projects() {
  return (
    <div id="projects" className="w-dvh h-full">
      <div className="p-20">
        <ProjectItem
          number="01"
          title="Namastox"
          videoSrc="/namastox_video.mp4"
        />
        <hr className="border-dashed text-stone-500 pb-5" />
        <ProjectItem
          number="02"
          title="Permanens"
          videoSrc="/permanens.mp4"
        />
        <hr className="border-dashed text-stone-500 pb-5" />

        <ProjectItem
          number="03"
          title="RA Investment"
          videoSrc="/rainvestmentwebversion.mp4"
        />
        <hr className="border-dashed text-stone-500" />
      </div>
    </div>
  );
}

export default Projects;
