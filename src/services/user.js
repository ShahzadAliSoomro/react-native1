import axios from "axios";
export const login = (data) => {
  return axios({
    url: `${process.env.REACT_APP_API}/user/login`,
    method: "post",
    data: data,
  });
};
export const signUp = (user) => {
  const formDate = new FormData()
  formDate.append('firstName',user.firstName)
  formDate.append('lastName',user.firstName)
  formDate.append('email',user.email)
  formDate.append('avatar',user.avatar)
  formDate.append('password',user.password)
  return axios({
    url: `${process.env.REACT_APP_API}/user/`,
    method: "post",
    data: formDate,
    headers:{
      "content-type":"multipart/form-data"
    }
  });
};
