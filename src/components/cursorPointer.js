import React from "react";
import { motion } from "framer-motion";
const MousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });

  React.useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return (
    <motion.div
      whileTap={{ scale: 0.5, transition: { duration: 0.2, type: "tween" } }}
      style={{
        position: "absolute",
        top: mousePosition.y - 10,
        left: mousePosition.x - 10,
        width: "20px",
        height: "20px",
        border: "2px solid #143d59",
        borderRadius: "50%",
      }}
    ></motion.div>
  );
};
export default MousePosition;
