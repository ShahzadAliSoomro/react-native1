import React from "react";
import { Link } from "react-router-dom";
function MainPost({ post }) {
  return (
    <div>
      <div>
        <Link to={`/post/${post.slug}`}>
          <img
            width="100%"
            style={{ height: "430px", borderRadius: "5px" }}
            src={post.image}
            alt={post.image}
          />
        </Link>
      </div>
      <div>
        <p fontWeight="bold" fontSize="12">
          Published -{" "}
          <span style={{ fontWeight: "lighter" }}>
            {post.createdAt.slice(0, 10)}
          </span>
          <span
            style={{
              fontSize: "12px",
              backgroundColor: "#314E8A",
              color: "white",
              padding: "2px 10px",
              marginLeft: "3px",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            Latest{" "}
          </span>
          <span
            style={{
              fontSize: "12px",
              backgroundColor: "#314E8A",
              color: "white",
              padding: "2px 10px",
              marginLeft: "3px",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            {post.category.toUpperCase()}
          </span>
        </p>
        <p fontWeight="bold" fontSize="35">
          <Link to={`/post/${post.slug}`}>{post.title}</Link>
        </p>
        <p fontSize="18" color="gray.600">
          {post.content.slice(0, 300)}
        </p>
        <div pt="5" display="flex">
          <div size="70px">
            <img
              style={{ borderRadius: "50%", width: "100%", height: "100%" }}
              src={post.author.avatar}
              alt={post.author.avatar}
            />
          </div>
          <div ml="4" mt="2">
            <p color="gray.600">Author</p>
            <p fontWeight="bold">
              {post.author.firstName} {post.author.lastName}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPost;
