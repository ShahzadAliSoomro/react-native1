import React, { useState } from "react";
import Layout from "./layout";
import { signUp } from "../services/user";
import { useMutation } from "react-query";
import { Navigate } from "react-router-dom";

function SignUp() {
  const navigate = Navigate();
  const [avatar, setAvatar] = useState();
  const [loading, setLoading] = useState("Sign Up");
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const mutate = useMutation((user) => signUp(user), {
    onSuccess: (user) => {
      setLoading("Loading...");
      if (user.data.status) {
        setLoading("Successful");
        navigate("/login");
      } else {
        setLoading("Sign Up");
      }
    },
    onError: () => {},
  });
  const signUpSubmit = (e) => {
    e.preventDefault();
    const { email, password, firstName, lastName } = inputs;
    mutate.mutate({ firstName, lastName, avatar, email, password });
  };
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form onSubmit={signUpSubmit}>
              <label>First Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="First Name"
                value={inputs.firstName}
                onChange={(e) =>
                  setInputs({ ...inputs, firstName: e.target.value })
                }
                required
              />
              <label>Last Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Last Name"
                value={inputs.lastName}
                onChange={(e) =>
                  setInputs({ ...inputs, lastName: e.target.value })
                }
                required
              />
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={inputs.email}
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
                required
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
                required
              />
              <label>Avatar</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setAvatar(e.target.files[0])}
                required
              />
              <button className="btn btn-success mt-3">{loading}</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SignUp;
