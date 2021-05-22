import React, { useEffect, useState, useContext } from "react";
import { createPost } from "../services/post";
import { useMutation } from "react-query";
import { SimpleGrid, Box, useToast, Tag } from "@chakra-ui/react";
import { styles } from "../styles/styles";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/context";
function CreatePost() {
  //get current user data
  const state = useContext(AuthContext);

  //history to prevent from unauthorized
  const history = useHistory();
  //toast
  const toast = useToast();
  //
  //inputs fields
  const [image, setImage] = useState();
  const [previewImage, setPreviewImage] = useState(image);
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    status: "draft",
    category: "technology",
  });

  //check is login or not
  useEffect(() => {
    if (!state.state.isAuthenticate) {
      history.push("/login");
    } else {
      return;
    }
  }, [state.state.isAuthenticate, history]);
  //create blog mutation
  const mutate = useMutation((post) => createPost(post), {
    onSuccess: ({ data }) => {
      if (data.status) {
        setPreviewImage("");
        setImage("");
        setInputs({
          title: "",
          content: "",
          status: "draft",
          category: "technology",
        });
        console.log("Created ", data);
        toast({
          title: data.data.title,
          description: "We Save you blog in database",
          status: "success",
          isClosable: true,
        });
      } else {
        toast({
          title: "Post created failed",
          description: "Please check the internet connection",
          status: "error",
          isClosable: true,
        });
      }
    },
  });

  const createPostSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");

    mutate.mutate({
      title: inputs.title,
      content: inputs.content,
      author: state.state.id,
      status: inputs.status,
      image: image,
      category: inputs.category,
    });
  };
  return (
    <div className="form">
      <SimpleGrid columns={2} spacing={2}>
        <Box bg="whiteAlpha.600" height="100vh">
          <h1 style={styles.heading}>Create post</h1>
          <form onSubmit={createPostSubmit}>
            <div style={styles.form_div}>
              <label style={styles.label}>Title</label>
              <input
                type="text"
                style={styles.input}
                placeholder="Title"
                value={inputs.title}
                onChange={(e) =>
                  setInputs({ ...inputs, title: e.target.value })
                }
              />
              <br />
              <label style={styles.label}>Content</label>
              <textarea
                type="text"
                style={styles.input}
                placeholder="Content"
                value={inputs.content}
                onChange={(e) =>
                  setInputs({ ...inputs, content: e.target.value })
                }
              />
              <br />

              <label style={styles.label}>Image</label>
              <input
                style={styles.input}
                type="file"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  setPreviewImage(URL.createObjectURL(e.target.files[0]));
                }}
              />
              <br />
              <label style={styles.label}>
                Status <span style={styles.span}>Default is draft</span>
              </label>
              <select
                style={styles.input}
                defaultValue="draft"
                onChange={(e) =>
                  setInputs({ ...inputs, status: e.target.value })
                }
              >
                <option>Choose</option>
                <option value="draft">Draft</option>
                <option value="publish">Publish</option>
              </select>
              <br />

              <label style={styles.label}>
                Category{" "}
                <span style={styles.span}>Which category post belongs</span>
              </label>
              <select
                style={styles.input}
                defaultValue="technology"
                onChange={(e) =>
                  setInputs({ ...inputs, category: e.target.value })
                }
              >
                <option>Choose</option>
                <option value="technology">Technology</option>
                <option value="crypto">Crypto</option>
                <option value="programming">Programming</option>
              </select>
              <br />
              <button style={styles.input}>Save</button>
            </div>
          </form>
        </Box>
        <Box bg="whiteAlpha.600" height="100vh">
          <h1 style={styles.heading}>Preview</h1>
          <div style={styles.form_div}>
            <img
              style={{ width: "100%" }}
              src={previewImage && previewImage}
              alt={image}
            />

            <p style={styles.prevHeading}>{inputs.title}</p>
            <p style={styles.prevContent}>{inputs.content}</p>
            <Tag size="lg" variant="solid" colorScheme="twitter">
              {inputs.category.toUpperCase()}
            </Tag>

            <Tag size="lg" variant="solid" colorScheme="green">
              {inputs.status.toUpperCase()}
            </Tag>
          </div>
        </Box>
      </SimpleGrid>
    </div>
  );
}

export default CreatePost;
