import React from "react";
import Layout from "./layout";
import MainPost from "./mainPost";
import { useQuery } from "react-query";
import { getPosts } from "../services/post";
import { motion } from "framer-motion";

import PostList from "./postList";
import {
  pageStyle,
  pageTransition,
  pageVariants,
} from "../constants/animationConstant.js";
function Posts() {
  const { error, isLoading, data, isError } = useQuery("posts", getPosts);
  console.log({ data });
  if (isError) {
    return <div>Error :{error}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // category: "programming"
  // content: "The react app is integrated with wp rest API and crud operation on the posts\ncode https://github.com/MohsinAliSoomro/wp-rest-api-integration-in-react"
  // createdAt: "2021-05-24T10:45:53.287Z"
  // image: "https://res.cloudinary.com/ddb5bpbie/image/upload/v1621853152/n3pnftobd2daw8hpt1rn.png"
  // public_id: "n3pnftobd2daw8hpt1rn"
  // slug: "wordpress-cms-api-integration-in-reactjs-app"
  // status: "publish"
  // title: "WordPress CMS Api integration in reactjs app"
  // updatedAt: "2021-05-24T10:45:53.287Z"
  return (
    <Layout>
      {/* <MainPost post={data.data.data[0]} /> */}
      {/* <PostList /> */}
      <motion.div
        style={pageStyle}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="card_container_plus"
      >
        {data &&
          data.data &&
          data.data.data.map((post) => {
            return (
              <div className="w-12/12">
                <div class="container mt-32 mx-auto p-4 md:p-0">
                  <div class="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
                    <div class="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative">
                      <img src={post?.image} alt={post?.image} height="100%" />
                      <div class="absolute text-xl">
                        <i class="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
                      </div>
                    </div>

                    <div class="bg-white w-full md:w-2/3">
                      <div class="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                        <div class="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                          <div class="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                            <h3>
                              {post?.author?.firstName} {post.author.lastName}
                            </h3>
                            <p class="mb-0 mt-3 text-grey-dark text-sm italic">
                              Moscow - Russia
                            </p>
                            <hr class="w-1/4 md:ml-0 mt-4  border lg:hidden" />
                          </div>

                          <div class="w-full lg:w-3/5 lg:px-3">
                            <p class="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                              {post?.content}
                            </p>
                          </div>

                          {/* <div class="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                            <button class="bg-white hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2">
                              Visit now
                            </button>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        {/* <div className="w-12/12">
          <div class="container mt-32 mx-auto p-4 md:p-0">
            <div class="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
              <div
                class="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
                style={{
                  backgroundImage:
                    "url('https://images7.alphacoders.com/347/347549.jpg')",
                }}
              >
                <div class="absolute text-xl">
                  <i class="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
                </div>
              </div>

              <div class="bg-white w-full md:w-2/3">
                <div class="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                  <div class="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                    <div class="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                      <h3>Saint Basil's Cathedral</h3>
                      <p class="mb-0 mt-3 text-grey-dark text-sm italic">
                        Moscow - Russia
                      </p>
                      <hr class="w-1/4 md:ml-0 mt-4  border lg:hidden" />
                    </div>

                    <div class="w-full lg:w-3/5 lg:px-3">
                      <p class="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                        The Cathedral of Vasily the Blessed (Russian: Собор
                        Василия Блаженного, Sobor Vasiliya Blazhennogo),
                        commonly known as Saint Basil's Cathedral, is a church
                        in Red Square in Moscow, Russia. The building, now a
                        museum, is officially known as the Cathedral of the
                        Intercession of the Most Holy Theotokos on the Moat
                        (Russian: Собор Покрова Пресвятой Богородицы, что на
                        Рву, Sobor Pokrova Presvyatoy Bogoroditsy, chto na Rvu)
                        or Pokrovsky Cathedral (Russian: Покровский собор).[5]
                        It was built from 1555–1561 on orders from Ivan the
                        Terrible and commemorates the capture of Kazan and
                        Astrakhan.
                      </p>
                    </div>

                    <div class="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                      <button class="bg-white hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2">
                        Visit now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div>
          <img
            className="rounded-full object-cover w-80 h-80"
            src="https://images.unsplash.com/photo-1601933470096-0e34634ffcde?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="logo"
          />
          <p>
            Published -{" "}
            <span style={{ fontWeight: "lighter" }}>12/12/2020</span>
          </p>
          <p>
            Interview -- What it's like to work remotely big-sized product
            development
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <div>
            <Circle size="70px">
              <img
                style={{ borderRadius: "50%", width: "100%", height: "100%" }}
                src="https://images.unsplash.com/photo-1601933470096-0e34634ffcde?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="logo"
              />
            </Circle>
            <div>
              <p>Name of Author</p>
              <p>Designation</p>
            </div>
          </div>
        </div> */}
      </motion.div>
    </Layout>
  );
}

export default Posts;
