import React, { useState } from "react";
import { Link } from "react-router-dom";

//CSS-MUI
import { Button, Box, TextField, Typography } from "@mui/material";

//FIREBASE-AUTH
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

//FIREBASE CONFIGURATION
import { auth } from "../../firebase";

//TODO
/* 
1.ADD VALIDATION,
2.CHANGE THE LINK WITH HISTORY PUSH(REACT-DOM-ROUTER)
3.HANDLE STATE MANAGEMENT WITH CONTEXT OR REDUX
*/

const SignUp = () => {
  const [newUserDisplayName, setNewUserDisplayName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [newUserAvatarUrl, setNewUserAvatarUrl] = useState("");

  //FIREBASE- CREATE NEW USER WITH EMAIL AND PASSWORD
  const onSignUpSummit = async (event) => {
    const email = newUserEmail;
    const password = newUserPassword;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: newUserDisplayName,
        photoURL: newUserAvatarUrl,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "50% 0",
      }}
      component="form"
    >
      <Typography sx={{ marginBottom: "10px", textAlign: "center" }}>Create an account</Typography>
      <TextField
        type="text"
        id="filled-basic"
        label="Display Name"
        variant="filled"
        sx={{ marginBottom: "10px" }}
        onChange={(event) => setNewUserDisplayName(event.target.value)}
      />
      <TextField
        type="text"
        id="filled-basic"
        label="Avatar URL"
        variant="filled"
        sx={{ marginBottom: "10px" }}
        onChange={(event) => setNewUserAvatarUrl(event.target.value)}
      />
      <TextField
        type="text"
        id="filled-basic"
        label="Email"
        variant="filled"
        sx={{ marginBottom: "10px" }}
        onChange={(event) => setNewUserEmail(event.target.value)}
      />
      <TextField
        type="password"
        id="filled-basic"
        label="Password"
        variant="filled"
        sx={{ marginBottom: "10px" }}
        onChange={(event) => setNewUserPassword(event.target.value)}
      />
      <Link to="/signin">
        <Button onClick={onSignUpSummit}>Register</Button>
      </Link>
    </Box>
  );
};

export default SignUp;
