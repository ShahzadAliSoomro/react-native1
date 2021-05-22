import React from "react";
import Layout from "./layout";
import user from "../images/download.jpeg";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiFiverr } from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa";
function Portfolio() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-md-4 text-center">
            <div className="mt-5">
              <img
                style={{ borderRadius: "50%", width: "450px", height: "450px" }}
                className="circle"
                src={user}
                alt={user}
              />
              <div className="mt-4">
                <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
                  Mohsin Ali Soomro
                </h1>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "gray",
                  }}
                >
                  <p>
                    <AiOutlineMail size="28" />
                  </p>
                  <p style={{ fontSize: "22px" }}>
                    mohsinalisoomro23@gmail.com{" "}
                  </p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <a
                    href="https://github.com/mohsinalisoomro"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub size={32} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mohsin-ali-soomro/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin size={32} />
                  </a>
                  <a
                    href="https://www.fiverr.com/dvlopermohsin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiFiverr size={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-8 col-md-8 mt-5">
            <h1 style={{ fontSize: "40px" }}>Mern Stack Developer</h1>
            <p style={{ fontSize: "25px",justifyContent:"center" }}>
              <span style={{ fontWeight: "bold"}}>MERN Stack</span> web
              developer with 1+ years of experience coding websites that convert
              in e-commerce. Proficient with{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                HTML, CSS, React.js, Node.js, MongoDB,Express.js, and Next.js.
              </span>
              I works on web application development and Freelance at Fiverr.
            </p>
            <h1 className="h3 mt-4">Education</h1>
            <div style={{ display: "flex" }}>
              <div>
                <FaGraduationCap size={48} />
              </div>
              <div style={{marginLeft:"10px"}}>
                <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                  BS in Computer Science 2020
                </p>
                <p style={{ fontWeight: "lighter", fontSize: "16px" }}>
                  The Shaikh Ayaz University
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Portfolio;
