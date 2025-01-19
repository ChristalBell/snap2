import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import Image from "next/image";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const Nav = () => {
  return (
    <Container sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ display: "flex" }}>
        <Image src="/logo.svg" alt="snap logo" width={87} height={35} />
        <Typography></Typography>
        <Typography>Features</Typography>
        <Typography>Company</Typography>
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
