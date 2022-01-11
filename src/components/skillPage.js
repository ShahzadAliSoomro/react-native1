import { Layout } from "antd";
import React from "react";
import Skill from "./skill";
import { motion } from "framer-motion";
import {
  pageStyle,
  pageTransition,
  pageVariants,
} from "../constants/animationConstant.js";
function SkillPage() {
  return (
    <Layout>
      <motion.div
        style={pageStyle}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <h1 className="text-center text-4xl mt-8">Skills</h1>
        <div className="flex justify-center flex-wrap items-center mt-8">
          <Skills percentage={0.7} title={"Javascript"} />
          <Skills percentage={0.6} title={"Node"} />
          <Skills percentage={0.8} title={"React"} />
          <Skills percentage={0.7} title={"Next"} />
          <Skills percentage={0.6} title={"Gatsby"} />
          <Skills percentage={0.65} title={"Firebase"} />
          <Skills percentage={0.75} title={"Express"} />
          <Skills percentage={0.85} title={"Redux"} />
          <Skills percentage={0.8} title={"CMS"} />
          <Skills percentage={0.6} title={"DynamoDB"} />
          <Skills percentage={0.7} title={"MongoDB"} />
          <Skills percentage={0.5} title={"Sql"} />
          <Skills percentage={0.5} title={"Sql lite"} />
          <Skills percentage={0.6} title={"Netlify"} />
          <Skills percentage={0.8} title={"Github"} />
          <Skills percentage={0.6} title={"Varcel"} />
          <Skills percentage={0.6} title={"AWS Lambda"} />
          <Skills percentage={0.5} title={"AWS SES"} />
          <Skills percentage={0.8} title={"Contentful"} />
          <Skills percentage={0.8} title={"Rest API"} />
        </div>
      </motion.div>
    </Layout>
  );
}

export default SkillPage;

const Skills = ({ percentage, title }) => {
  return (
    <div className="w-full md:w-4/12 lg:w-2/12">
      <div className="border-b shadow-md flex p-4 m-2">
        <Skill percentage={percentage} />
        <p className="text-2xl ml-4 ">{title}</p>
      </div>
    </div>
  );
};
