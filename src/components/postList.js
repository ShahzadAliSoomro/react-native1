import React from "react";
function PostList() {
  return (
    <div className="">
      <h1 style={{ margin: "10px 40px" }}>Category</h1>
      <div>
        <div>
          <img
            width="100%"
            style={{ height: "280px", borderRadius: "5px" }}
            src="https://images.unsplash.com/photo-1601933470096-0e34634ffcde?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="logo"
          />
          <p fontWeight="bold" pl="5" pr="5" fontSize="12" pt="2">
            Published -{" "}
            <span style={{ fontWeight: "lighter" }}>12/12/2020</span>
          </p>
          <p fontWeight="bold" pl="5" pr="5" fontSize="25">
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
            <duv>
              <img
                style={{ borderRadius: "50%", width: "100%", height: "100%" }}
                src="https://images.unsplash.com/photo-1601933470096-0e34634ffcde?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="logo"
              />
            </duv>
            <div>
              <p fontWeight="bold">Name of Author</p>
              <p color="gray.600">Designation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostList;
