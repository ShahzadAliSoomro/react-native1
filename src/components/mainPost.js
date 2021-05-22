import { Text, Stack, Box, Circle } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
function MainPost({ post }) {
  return (
    <Stack w="100%" direction={["column", "row"]} bg="white">
      <Box w="60%" pl="10" pt="10">
        <Link to={`/post/${post.slug}`}>
          <img
            width="100%"
            style={{ height: "430px", borderRadius: "5px" }}
            src={post.image}
            alt={post.image}
          />
        </Link>
      </Box>
      <Box w="40%" pr="10" pt="10" pl="10">
        <Text fontWeight="bold" fontSize="12">
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
        </Text>
        <Text fontWeight="bold" fontSize="35">
          <Link to={`/post/${post.slug}`}>{post.title}</Link>
        </Text>
        <Text fontSize="18" color="gray.600">
          {post.content.slice(0, 300)}
        </Text>
        <Box pt="5" display="flex">
          <Circle size="70px">
            <img
              style={{ borderRadius: "50%", width: "100%", height: "100%" }}
              src={post.author.avatar}
              alt={post.author.avatar}
            />
          </Circle>
          <Box ml="4" mt="2">
          <Text color="gray.600">Author</Text>
            <Text fontWeight="bold">
              {post.author.firstName} {post.author.lastName}{" "}
            </Text>
           
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}

export default MainPost;
