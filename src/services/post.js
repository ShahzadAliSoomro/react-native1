import axios from "axios";
export const createPost = (post) => {
  //form data
  const formData = new FormData();
  formData.append("title", post.title);
  formData.append("content", post.content);
  formData.append("author", post.author);
  formData.append("image", post.image);
  formData.append("status", post.status);
  formData.append("category", post.category);
  //http request
  return axios({
    url: `${process.env.REACT_APP_API}/post`,
    method: "post",
    data: formData,
    headers: {
      "content-type": "multipart/form-data",
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
  });
};

export const getPosts = () => {
  return axios.get(`${process.env.REACT_APP_API}/post`);
};
export const getPost = (slug) => {
  return axios.get(`${process.env.REACT_APP_API}/post/${slug}`);
};
