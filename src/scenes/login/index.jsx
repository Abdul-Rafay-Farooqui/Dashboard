import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
function LoginPage() {
  const navigation = useNavigate(); // Using useHistory instead of useNavigate
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Check if the entered username and password match the hardcoded values
    if (username === "admin@gmail.com" && password === "123456") {
      // If they match, redirect to another page
      navigation("/dashboard");
    } else {
      // If they don't match, show an error message
      alert("Invalid username or password");
    }
  };

  return (
    <Box className="div-container">
      <Box className="logo">
        <img
          className="img-logo"
          src={require("../../assets/logo.jpeg")}
          alt="Missig"
        />
      </Box>
      <Box className="frosted" maxWidth="450px">
        <form
          className="form-login"
          onSubmit={handleSubmit} // Call handleSubmit function on form submit
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            color={"#242424"}
            p="2rem 1rem 0 1rem"
          >
            Welcome to STEDA
          </Typography>
          <Typography
            fontSize="17px"
            color="green"
            textAlign="center"
            p="0 1rem 1rem 1rem"
            fontWeight="bold"
          >
            Login to dashboard
          </Typography>
          <Typography
            fontSize="17px"
            fontWeight="bold"
            paddingLeft="1.5rem"
            paddingTop="1rem"
            color={"#242424"}
          >
            Email or Username
          </Typography>
          <TextField
            type="text"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ width: "85%", mx: "1.5rem", pb: "1rem" }}
          />
          <Typography
            fontSize="17px"
            fontWeight="bold"
            paddingLeft="1.5rem"
            color={"#242424"}
          >
            Password
          </Typography>
          <TextField
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ width: "85%", mx: "1.5rem" }}
          />

          <Button
            type="submit" // Use type="submit" to trigger form submission
            variant="contained"
            color="primary"
            sx={{ width: "80%", m: "2rem 2rem 0 2rem", fontWeight: "bold" }}
          >
            Login
          </Button>
          <Link className="FP-logo" to="/">
            Forget Password?
          </Link>
          <Typography
            textAlign="center"
            p="1rem"
            fontWeight="bold"
            color={"#242424"}
          >
            Dont have Account?
            <Link style={{ textDecoration: "none", color: "blue" }} to="/">
              Create Account
            </Link>
          </Typography>
          <Link className="login-icons" to="/">
            <Typography color="#242424" fontWeight="bold" marginRight="1rem">
              Sign Up Using
            </Typography>
            <GoogleIcon sx={{ fontSize: "30px", marginRight: "1rem" }} />
            <FacebookIcon sx={{ fontSize: "30px", marginRight: "1rem" }} />
            <TwitterIcon sx={{ fontSize: "30px" }} />
          </Link>
        </form>
      </Box>
    </Box>
  );
}

export default LoginPage;
