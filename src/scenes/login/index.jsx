import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import banner from "../../assets/modal.jpg";

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
    <Box className="center-div-container banner-background" height="100vh">
      <Box className="frosted" maxWidth="450px">
        <form
          style={{
            height: "80%",
            width: "100%",
          }}
          onSubmit={handleSubmit} // Call handleSubmit function on form submit
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            color={"#fff"}
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
            color={"#fff"}
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
            color={"#fff"}
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
          <Link
            style={{
              textDecoration: "none",
              marginLeft: "35%",
              marginRight: "35%",
              width: "450px",
              color: "blue",
              fontWeight: "bold",
            }}
            to="/"
          >
            Forget Password?
          </Link>
          <Typography
            textAlign="center"
            p="1rem"
            fontWeight="bold"
            color={"#fff"}
          >
            Dont have Account?
            <Link style={{ textDecoration: "none", color: "blue" }} to="/">
              Create Account
            </Link>
          </Typography>
        </form>
      </Box>
    </Box>
  );
}

export default LoginPage;
