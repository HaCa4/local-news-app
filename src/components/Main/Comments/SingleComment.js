import React from "react";

//CSS-MUI
import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { paper } from "../../../mui-styling/singleComment.sx";

//FIREBSE CONFIGURATION
import { auth, db } from "../../../firebase";
import { deleteDoc, doc } from "firebase/firestore";

const SingleComment = ({ comment, post }) => {
  const time = new Date();
  const deleteComment = async () => {
    await deleteDoc(doc(db, "posts", `${post.id}`, "comments", `${comment.id}`));
  };
  return (
    <Paper sx={paper}>
      <Avatar src={comment.commentAuthorPhotoUrl} sx={{ width: "30px", height: "30px" }} />
      <Box sx={{ flexGrow: "1", marginLeft: "20px", borderBottom: "0.5px solid orange" }}>
        <Typography variant="caption" sx={{ fontWeight: "700" }}>
          {comment.commentAuthorName.toUpperCase()} :
        </Typography>
        <Typography variant="caption" sx={{ marginLeft: "6px" }}>
          {comment.content}
        </Typography>
      </Box>
      <Typography variant="caption">
        {time.getHours()}.{time.getMinutes()}
      </Typography>
      {comment.commentAuthorId === auth.currentUser.uid && (
        <Button>
          <DeleteIcon onClick={() => deleteComment()} sx={{ color: "rgb(0,0,0,0.6)" }} />
        </Button>
      )}
    </Paper>
  );
};

export default SingleComment;
