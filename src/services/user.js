import axios from "axios";
export const login = (data) => {
  return axios({
    url: `${process.env.REACT_APP_API}/user/login`,
    method: "post",
    data: data,
  });
};
