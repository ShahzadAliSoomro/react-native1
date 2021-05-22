import React from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../services/post";
import { useQuery } from "react-query";
import Layout from "./layout";
function Post() {
  const { slug } = useParams();
  const { isError, isLoading, error, data } = useQuery("post", () =>
    getPost(slug)
  );
  if (isError) {
    return <div>Error :{error}</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <Layout>
      <div className="container bg-white border">
        <div className="row">
          <div className="col-12">
            {data.data.data.map((post) => (
              <div>
                <h1 style={{ fontSize: "40px" }}>
                  {post.title}{"  "}
                  <span
                    style={{
                      fontSize: "18px",
                      backgroundColor: "#314E8A",
                      color: "white",
                      padding:"2px 10px",
                      borderRadius:"5px",
                      fontWeight:"bold"
                    }}
                  >
                    {post.category.toUpperCase()}
                  </span>
                </h1>
                <div>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      padding: "2px",
                    }}
                  >
                    Published -{" "}
                    <span style={{ fontWeight: "lighter" }}>
                      {post.createdAt.slice(0, 10)}
                    </span>
                  </p>
                </div>
                <img width="100%" src={post.image} alt={post.image} />
                <div
                  style={{
                    padding: "10px",
                    fontSize: "25px",
                    textAlign: "justify",
                  }}
                >
                  {post.content}
                </div>
                <div
                  style={{ display: "flex", padding: "20px" }}
                  className="border"
                >
                  <div>
                    <img
                      style={{ width: "100px", height: "80px" }}
                      src={post.author.avatar}
                      alt={post.author.avatar}
                    />
                  </div>

                  <p style={{ fontSize: "16px" }}>
                    Author{" "}
                    <span style={{ display: "block", fontSize: "20px" }}>
                      {post.author.firstName} {post.author.lastName}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Post;
