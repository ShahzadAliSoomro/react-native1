import React, { useState, useContext } from "react";
import Layout from "./layout";
import { login } from "../services/user";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { AuthContext } from "../context/context";
function Login() {
  const state = useContext(AuthContext);
  const toast = useToast();
  const history = useHistory();
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const mutate = useMutation((user) => login(user), {
    onSuccess: (user) => {
      if (user.data.data) {
        sessionStorage.setItem("token", user.data.access_token);
        toast({
          title: "Login Successful",
          description: "We redirect you to the create blog page",
          status: "success",
        });
        state.dispatch({
          type: "LOGIN",
          payload: {
            firstName: user.data.data.firstName,
            id: user.data.data._id,
            lastName: user.data.data.lastName,
            email: user.data.data.email,
            avatar: user.data.data.avatar,
            access_token: user.data.access_token,
          },
        });

        history.push("/create");
      }
    },
    onError: () => {
      toast({
        title: "Login failed",
        description: "Please try to enter correct details",
        status: "error",
      });
    },
  });
  const loginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = inputs;
    mutate.mutate({ email, password });
  };
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form onSubmit={loginSubmit}>
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={inputs.email}
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
              />
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
              <button className="form-control mt-3">Login</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
