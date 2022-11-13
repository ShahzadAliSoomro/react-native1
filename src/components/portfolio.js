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
import { ctFul } from "../services/contentful";
import useSiteCopy from "../hook/useSiteCopy";
function Portfolio() {
  const [hidden, setHidden] = useState(false);
  const siteCopy = useSiteCopy("home");
  console.log({ siteCopy });
  return (
    <Layout>
      <div className="container mx-auto flex justify-center items-center h-screen">
        <div className="">
          {siteCopy &&
            siteCopy?.metadata?.name?.map((item, index) => (
              <motion.h1
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-8xl font-bold"
              >
                {item}
              </motion.h1>
            ))}
          <div>
            <motion.h1
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-bold"
            >
              Mern Stack Developer / Full stack Developer
            </motion.h1>
            <ParticleEffectButton color="#143d59" hidden={hidden}>
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="contact_me"
                onClick={() => setHidden(!hidden)}
              >
                Contact me!
              </motion.button>
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
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            fill="currentColor"
            class="bi bi-code"
            viewBox="0 0 16 16"
          >
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{ duration: 1, type: "tween", delay: 1.3 }}
              d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"
            />{" "}
          </svg>
        </div>
      </div>
    </Layout>
  );
}

export default Portfolio;
