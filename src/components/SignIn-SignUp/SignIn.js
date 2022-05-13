import React, { useState } from "react";
import { Link } from "react-router-dom";

//CSS-MUI
import { Button, Container, TextField, Typography } from "@mui/material";

//FIREBASE-AUTH
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
//TODO
/* 
1-HANDLE VALIDATION
*/

const SignIn = () => {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  //FIREBASE AUTH SIGN IN
  const onSignInClick = async () => {
    await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "50% 0",
      }}
    >
      <Typography sx={{ marginBottom: "10px", textAlign: "center" }}>Login for POSTS</Typography>
      <TextField
        onChange={(event) => setSignInEmail(event.target.value)}
        type="text"
        id="filled-basic"
        label="Email"
        variant="filled"
        sx={{ marginBottom: "10px" }}
      />
      <TextField
        onChange={(event) => setSignInPassword(event.target.value)}
        type="password"
        id="filled-basic"
        label="Password"
        variant="filled"
        sx={{ marginBottom: "10px" }}
      />
      <Link to="/">
        <Button onClick={onSignInClick} sx={{ marginBottom: "10px" }}>
          Sign in and start posting
        </Button>
      </Link>
      <Typography variant="caption">Don't have an account?</Typography>
      <Link to="/signup">
        <Button>Register now</Button>
      </Link>
    </Container>
  );
};

export default SignIn;
