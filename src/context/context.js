import { createContext, useReducer } from "react";

export const AuthContext = createContext(null);

const initialState = {
  isAuthenticate: false,
  firstName: "",
  lastName: "",
  email: "",
  avatar: "",
  access_token:"",
  id:""
};

const reducer = (state = initialState, action) => {
  console.log("Action",action)
  console.log("State",state)
  switch (action.type) {
    case "LOGIN": {
      return {
        isAuthenticate: true,
        id:action.payload.id,
        firstName:action.payload.firstName,
        lastName:action.payload.lastName,
        email:action.payload.email,
        avatar:action.payload.avatar,
        access_token:action.payload.access_token,
      };
    }
    case "LOGOUT": {
      return {
        isAuthenticate: false,
        firstName:state.firstName="",
        lastName:state.lastName="",
        email:state.email="",
        avatar:state.avatar="",
        access_token:state.access_token="",
      };
    }
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export { AuthProvider };
