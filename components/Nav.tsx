"use client";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import Image from "next/image";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Dropdown from "./Dropdown";

const Nav = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Image src="/logo.svg" alt="snap logo" width={87} height={35} />
        <Dropdown label="Features" />
        <Dropdown label="Company" />
        <Typography>Careers</Typography>
        <Typography>About</Typography>
      </Box>
      <Box>
        <Button>Login</Button>
        <Button>Register</Button>
      </Box>
    </Container>
  );
};

export default Nav;
