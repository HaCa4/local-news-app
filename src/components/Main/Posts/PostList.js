import React, { useEffect, useState } from "react";

//COMPONENTS
import SinglePost from "./SinglePost";

//CSS-MUI
import { Box } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";

//FIREBASE CONFIGURATION
import { db } from "../../../firebase";

const PostList = () => {
  const [postList, setPostList] = useState([]);

  //FETCHING DOCUMENTS FROM FIRESTORE ( POSTS )
  useEffect(() => {
    const getPosts = async () => {
      const allData = await getDocs(collection(db, "posts"));
      await setPostList(allData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  return (
    <Box sx={{ width: "100%", margin: "0 auto" }}>
      {postList.map((post) => (
        <SinglePost key={post.id} post={post} />
      ))}
    </Box>
  );
};

export default PostList;
