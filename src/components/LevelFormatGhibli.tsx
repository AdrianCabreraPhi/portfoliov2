import { FaLeaf } from "react-icons/fa";

function LevelFormatGhibli({ level }) {
  return (
    <>
      {level == "Advanced" && (
        <>
          <FaLeaf size={17} />
          <FaLeaf size={17} />
          <FaLeaf size={17} />
        </>
      )}
      {level == "Basic" && (
        <>
          <FaLeaf size={17} />
          <FaLeaf className="opacity-50" size={17} />
          <FaLeaf className="opacity-50" size={17} />
        </>
      )}
           {level == "Intermediate" && (
        <>
          <FaLeaf size={17} />
          <FaLeaf size={17} />
          <FaLeaf className="opacity-50" size={17} />
        </>
      )}
    </>
  );
}

export default LevelFormatGhibli;
