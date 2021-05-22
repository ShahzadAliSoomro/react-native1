import { Box, SimpleGrid, Text, Circle } from "@chakra-ui/layout";
import React from "react";
import Layout from "./layout";
import MainPost from "./mainPost";
import {useQuery} from 'react-query'
import {getPosts} from '../services/post'
import PostList from "./postList";
function Posts() {
  const {error,isLoading,data,isError} =useQuery('posts',getPosts)
  if(isError){
    return<div>Error :{error}</div>
  }
  if(isLoading){
    return<div>Loading...</div>
  }
  
  return (
    <Layout>
      <MainPost post={data.data.data[0]} />
      <PostList />
      <SimpleGrid columns="3" mt="5">
        <Box w="100%" m="10" p="5" boxShadow="xs" backgroundColor="white">
          <img
            width="100%"
            style={{ height: "280px", borderRadius: "5px" }}
            src="https://images.unsplash.com/photo-1601933470096-0e34634ffcde?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="logo"
          />
          <Text fontWeight="bold" fontSize="12" pt="2">
            Published -{" "}
            <span style={{ fontWeight: "lighter" }}>12/12/2020</span>
          </Text>
          <Text fontWeight="bold" fontSize="25">
            Interview -- What it's like to work remotely big-sized product
            development
          </Text>
          <Text fontSize="16" color="gray.600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </Text>
          <Box pt="5" display="flex">
            <Circle size="70px">
              <img
                style={{ borderRadius: "50%", width: "100%", height: "100%" }}
                src="https://images.unsplash.com/photo-1601933470096-0e34634ffcde?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="logo"
              />
            </Circle>
            <Box ml="4" mt="2">
              <Text fontWeight="bold">Name of Author</Text>
              <Text color="gray.600">Designation</Text>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </Layout>
  );
}

export default Posts;
