import React, { useState } from "react";
import Layout from "./layout";
import ParticleEffectButton from "react-particle-effect-button";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  pageStyle,
  pageTransition,
  pageVariants,
} from "../constants/animationConstant";
function Portfolio() {
  const [hidden, setHidden] = useState(false);
  return (
    <Layout >
     
      <motion.div
        style={pageStyle}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="container_portfolio "
      >
        
        <div className="vertical_center " >
          <h1 className="text-8xl font-bold">Hi,</h1>
          <h1 className="text-8xl font-bold">I'm Mohsin,</h1>
          <h1 className="text-8xl font-bold">Web Developer</h1>
          <div>
            <h1 className="text-bold">
              Mern Stack Developer / Full stack Developer
            </h1>
            <ParticleEffectButton color="#143d59" hidden={hidden}>
              <button className="contact_me" onClick={() => setHidden(!hidden)}>
                Contact me!
              </button>
            </ParticleEffectButton>

            {/* <p>
              <span style={{ fontWeight: "bold" }}>MERN Stack</span> web
              developer with 1+ years of experience coding websites that convert
              in e-commerce. Proficient with{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                HTML, CSS, React.js, Node.js, MongoDB,Express.js, and Next.js.
              </span>
              I works on web application development and Freelance at Fiverr.
            </p> */}
            {/* <h1 className="h3 mt-4">Education</h1> */}
            {/* <div style={{ display: "flex" }}>
              <div>
                <FaGraduationCap size={48} />
              </div>
              <div style={{ marginLeft: "10px" }}>
                <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                  BS in Computer Science 2020
                </p>
                <p style={{ fontWeight: "lighter", fontSize: "16px" }}>
                  The Shaikh Ayaz University
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}

export default Portfolio;
