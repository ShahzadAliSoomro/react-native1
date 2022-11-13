import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiFiverr } from "react-icons/si";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/context";

function Header() {
  const state = useContext(AuthContext);
  const navLinks = [
    { name: "Skills", href: "/skills" },
    { name: "Work", href: "/work" },
    { name: "Blog", href: "/blogs" },
    { name: "Hire me", href: "/hireme" },
  ];
  const proffession = [
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];
  return (
    <div
      style={{
        backgroundColor: "#143d59 ",
        color: "#f4b41a",
        height: "100vh",
        position: "relative",
      }}
    >
      <div className=" h-36 flex justify-center items-center border-b">
        <div className="text-center">
          <Link to="/" className="text-8xl block">
            M
          </Link>
          {proffession.map((item, index) => (
            <motion.span
              className="cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.2 }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
      <div className="px-4 text-lg">
        {navLinks.map((link, index) => (
          <motion.div
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.5 + index * 0.1,
              type: "spring",
              stiffness: 120,
            }}
            whileHover={{ scale: 1.2, originX: -1 }}
            className=" mt-2 mb-2"
          >
            <Link to={link.href}>{link.name}</Link>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4 absolute bottom-10 left-3">
        <motion.div
          whileHover={{
            scale: 1.1,
            padding: "0 -10px",
            transition: { duration: 0.5, type: "tween", stiffness: 320 },
          }}
        >
          <a
            href="https://github.com/mohsinalisoomro"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub size={32} />
          </a>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            padding: "0 -10px",
            transition: { duration: 0.5, type: "tween", stiffness: 320 },
          }}
        >
          <a
            href="https://www.linkedin.com/in/mohsin-ali-soomro/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin size={32} />
          </a>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            padding: "0 -10px",
            transition: { duration: 0.5, type: "tween", stiffness: 320 },
          }}
        >
          <a
            href="https://www.fiverr.com/dvlopermohsin"
            target="_blank"
            rel="noreferrer"
          >
            <SiFiverr size={32} />
          </a>
        </motion.div>
      </div>
      {/* {state.state.isAuthenticate ? (
        <div style={{ color: "black" }}>
          <Button ref={btnRef} colorScheme="facebook.400" onClick={onOpen}>
            Profile
          </Button>
          <Drawer
            size="md"
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Profile Details</DrawerHeader>

              <DrawerBody>
                <img
                  width="100%"
                  src={state.state.avatar}
                  alt={state.state.avatar}
                />
                <div>
                  <p>First Name</p>
                  <h1 className="form-control">{state.state.firstName}</h1>
                  <p>Last Name</p>
                  <h1 className="form-control">{state.state.lastName}</h1>
                  <p>Email</p>
                  <h1 className="form-control">{state.state.email}</h1>
                  <Link to="/create">Create Blog</Link>
                </div>
              </DrawerBody>

              <DrawerFooter>
                <Link
                  style={{
                    color: "#314E8A",
                    border: "1px solid #314E8A",
                    padding: "3px 10px",
                    borderRadius: "5px",
                  }}
                  to="/"
                  onClick={() => state.dispatch({ type: "LOGOUT" })}
                >
                  Logout
                </Link>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      ) : (
        <div>
          <Link to="/signup" style={{ marginRight: "10px" }}>
            SignUp
          </Link>
          <Link to="/login">Login</Link>
        </div>
      )} */}
    </div>
  );
}

export default Header;
