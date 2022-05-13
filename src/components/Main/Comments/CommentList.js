import React, { useEffect, useState } from "react";

//COMPONENTS
import AddComment from "./AddComment";
import SingleComment from "./SingleComment";

//CSS-MUI
import { Container } from "@mui/material";
import { container } from "../../../mui-styling/commentList.sx";

//FIREBASE-FIRESTORE
import { collection, getDocs } from "firebase/firestore";

//FIRESTORE CONFIGURATION
import { db } from "../../../firebase";

const CommentsList = ({ post }) => {
  const [commentList, setCommentList] = useState([]);

  //FETCHING DOCUMENTS FROM FIRESTORE

  useEffect(() => {
    const getComments = async () => {
      const allData = await getDocs(collection(db, "posts", `${post.id}`, "comments"));
      await setCommentList(allData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getComments();
  }, []);
  return (
    <Container sx={container}>
      <AddComment post={post} commentList={commentList} setCommentList={setCommentList} />
      {commentList.map((comment) => (
        <SingleComment post={post} key={comment.id} comment={comment} />
      ))}
    </Container>
  );
};

export default CommentsList;
