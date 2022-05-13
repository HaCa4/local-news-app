import React, { useState } from "react";

//COMPONENTS
import CommentList from "../Comments/CommentList";

//CSS-MUI
import { Avatar, Paper, Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { box1, box2, paper } from "../../../mui-styling/singlePost.sx";

//FIREBASE CONFIGURATION
import { auth } from "../../../firebase";

const SinglePost = ({ post }) => {
  const [isSeeCommentsSelected, setIsSeeCommentsSelected] = useState(false);
  const time = new Date();

  return (
    <Paper elevation={24} sx={paper}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "auto",
          height: "5rem",
        }}
      >
        <Avatar src={post.authorPhotoUrl} sx={{ width: 50, height: 50 }} />
        <Box sx={box1}>
          <Typography color="primary">{post.authorName}</Typography>
          <Typography variant="caption">{post.content}</Typography>
        </Box>
        <Typography>
          {time.getHours()}.{time.getMinutes()}
        </Typography>
        {post.authorId === auth.currentUser.uuid && (
          <Button>
            <DeleteIcon sx={{ color: "rgb(0,0,0,0.6)" }} />
          </Button>
        )}
      </Box>
      <Button sx={box2} onClick={() => setIsSeeCommentsSelected(!isSeeCommentsSelected)}>
        {!isSeeCommentsSelected ? "See the comments" : "Close the comments"}
      </Button>
      {isSeeCommentsSelected && <CommentList isSelected={isSeeCommentsSelected} post={post} />}
    </Paper>
  );
};

export default SinglePost;
