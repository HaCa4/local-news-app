import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//CSS-MUI
import { Box } from "@mui/material";

//COMPONENTS
import SignIn from "./components/SignIn-SignUp/SignIn";
import SignUp from "./components/SignIn-SignUp/SignUp";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <Box
      sx={{
        minWidth: "100vw",
        height: "100vh",
        backgroundColor: "rgb(220,220,220)",
      }}
      maxWidth="sm"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/signin" exact element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
