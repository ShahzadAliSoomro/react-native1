import React, { useContext, useRef } from "react";
import {
  HStack,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
  DrawerContent,
  DrawerHeader,
  Button,

} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/context";

function Header() {
  const state = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <HStack
      bgColor="facebook.600"
      p={5}
      justifyContent="space-between"
      color="white"
    >
      <Text>
        <Link to="/" style={{fontWeight:"bolder",fontSize:"20px"}}>Mohsin Ali Soomro</Link>
      </Text>
      <HStack fontWeight="bold">
        <Text><Link to="/post">Post</Link></Text>
        <Text>Work</Text>
      </HStack>

      {state.state.isAuthenticate ? (
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
                
                <Link style={{color:"#314E8A",border:"1px solid #314E8A",padding:"3px 10px",borderRadius:"5px"}} to="/" onClick={() => state.dispatch({ type: "LOGOUT" })}>
                  Logout
                </Link>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </HStack>
  );
}

export default Header;
