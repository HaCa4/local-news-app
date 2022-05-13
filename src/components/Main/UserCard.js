import React from "react";
import { Link } from "react-router-dom";

//CSS-MUI
import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import LogoutIcon from "@mui/icons-material/Logout";
import { box, paper, typo } from "../../mui-styling/usercard.sx";

//FIREBASE CONFIGURATION
import { auth } from "../../firebase";

const UserCard = () => {
  return (
    <Paper elevation={20} sx={paper}>
      {auth.currentUser ? (
        <Box sx={box}>
          <Avatar src={auth.currentUser.photoURL} />
          <Typography sx={typo}>{auth.currentUser.displayName.toUpperCase()}</Typography>
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <Button onClick={() => signOut()}>
              <LogoutIcon sx={{ color: "orange" }} />
            </Button>
          </Link>
        </Box>
      ) : (
        <Link to="/signin">
          <Button>Sign in</Button>
        </Link>
      )}
    </Paper>
  );
};

export default UserCard;
