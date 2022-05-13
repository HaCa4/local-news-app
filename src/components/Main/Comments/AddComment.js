import React, { useState } from "react";

//CSS:MUI
import { Box, Button, TextField, Alert } from "@mui/material";
import { box1, box2, button } from "../../../mui-styling/addNewComment.sx";

//Firebase Configuration
import { auth, db } from "../../../firebase";

//Firebase-FireStore
import { addDoc, collection } from "firebase/firestore";

const AddComment = ({ setCommentList, commentList, post }) => {
  const [newCommentContent, setNewCommentContent] = useState("");
  const [isAddNewCommentSelected, setIsAddNewCommentSelected] = useState(false);
  const [isCommentDone, setIsCommentDone] = useState(false);
  const onNewCommentDoneButtonClick = async () => {
    await setCommentList([...commentList, newCommentContent]);
    setIsCommentDone(true);
    setTimeout(() => {
      setIsCommentDone(false);
      setIsAddNewCommentSelected(false);
    }, 500);
    //ADD DOCUMENT TO FIRESTORE
    await addDoc(collection(db, "posts", `${post.id}`, "comments"), {
      content: newCommentContent,
      commentAuthorName: auth.currentUser.displayName,
      commentAuthorPhotoUrl: auth.currentUser.photoURL,
      commentAuthorId: auth.currentUser.uid,
    });
  };
  return (
    <Box sx={box1}>
      <Button
        sx={button}
        onClick={() =>
          auth.currentUser ? setIsAddNewCommentSelected(!isAddNewCommentSelected) : null
        }
      >
        {!isAddNewCommentSelected ? "Leave a new comment" : "Cancel"}
      </Button>
      {!isAddNewCommentSelected ? null : (
        <Box sx={box2}>
          <TextField
            sx={{ width: "83%" }}
            onChange={(event) => setNewCommentContent(event.target.value)}
          />
          <Button
            sx={{ alignSelf: "right", backgroundColor: "lightGray" }}
            onClick={onNewCommentDoneButtonClick}
          >
            Done/Send
          </Button>
          {isCommentDone ? <Alert severity="success"></Alert> : null}
        </Box>
      )}
    </Box>
  );
};

export default AddComment;
