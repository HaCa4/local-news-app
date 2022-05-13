import React, { useState } from "react";

//CSS-MUI
import { Alert, Box, Button, TextField } from "@mui/material";
import { box1, box2 } from "../../../mui-styling/addNewPost.sx";

//FIREBASE-FIRESTORE
import { addDoc, collection } from "firebase/firestore";

//FIREBASE CONFIGURATION
import { auth, db } from "../../../firebase";
/* 
TODO:
1)Add login alert on pressing "add a post" button
 */
const AddNewPost = ({ setPostList, postList }) => {
  const [newPostContent, setNewPostContent] = useState("");
  const [isAddNewPostSelected, setIsAddNewPostSelected] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const onNewPostDoneButtonClick = async () => {
    setIsDone(true);
    setTimeout(() => {
      setIsDone(false);
      setIsAddNewPostSelected(false);
    }, 500);
    await addDoc(collection(db, "posts"), {
      content: newPostContent,
      authorName: auth.currentUser.displayName,
      authorPhotoUrl: auth.currentUser.photoURL,
      authorId: auth.currentUser.uid,
    });
  };
  return (
    <Box sx={box1}>
      {auth.currentUser && (
        <Button
          sx={{ color: "orange", fontWeight: "600" }}
          onClick={() => (auth.currentUser ? setIsAddNewPostSelected(!isAddNewPostSelected) : null)}
        >
          {!isAddNewPostSelected ? "Add a new post" : "Cancel"}
        </Button>
      )}
      {!isAddNewPostSelected ? null : (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Box sx={box2}>
            <TextField
              sx={{ width: "83%" }}
              onChange={(event) => setNewPostContent(event.target.value)}
            />
            <Button onClick={onNewPostDoneButtonClick}>Done/Send</Button>
          </Box>
          {isDone ? <Alert severity="success">Your post is successfully sent</Alert> : null}
        </Box>
      )}
    </Box>
  );
};

export default AddNewPost;
