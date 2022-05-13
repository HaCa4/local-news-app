import React from "react";

//COMPONENTS
import UserCard from "./UserCard.js";
import AddNewPost from "./Posts/AddNewPost";
import PostList from "./Posts/PostList";

//CSS-MUI
import { Container, Typography } from "@mui/material";
import { container, h3, typo } from "../../mui-styling/main.sx.js";

//TODO
/* 
1-USE FIREBASE HOOKS REACT
2-HANDLE SERVER SIDE RENDERING
3-HANDLE STATE MANAGEMENT WITH REDUX OR CONTEXT
4.HANDLE AUTHORIZATION
*/

const PostsList = () => {
  return (
    <Container sx={container}>
      <h3 style={h3}>Heart of the City</h3>

      <UserCard />
      <Typography variant="h3" sx={typo}>
        Latest News
      </Typography>
      <AddNewPost />
      <PostList />
    </Container>
  );
};

export default PostsList;
