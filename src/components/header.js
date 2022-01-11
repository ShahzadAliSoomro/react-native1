import React, { useContext } from "react";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiFiverr } from "react-icons/si";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/context";

function Header() {
  const state = useContext(AuthContext);

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
          <Link to="/" className="text-8xl">
            M
          </Link>
          <p>Web Developer</p>
        </div>
      </div>
      <div className="text-center text-lg">
        <div className="border-b mt-2 mb-2">
          <Link to="/post">Post</Link>
        </div>
        <div className="border-b mt-2 mb-2">
          <Link to="/skills">Skills</Link>
        </div>
        <div className="border-b mt-2 mb-2">
          <p>Work</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 absolute bottom-10 left-3">
        <div>
          <a
            href="https://github.com/mohsinalisoomro"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub size={32} />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/mohsin-ali-soomro/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin size={32} />
          </a>
        </div>
        <div>
          <a
            href="https://www.fiverr.com/dvlopermohsin"
            target="_blank"
            rel="noreferrer"
          >
            <SiFiverr size={32} />
          </a>
        </div>
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
