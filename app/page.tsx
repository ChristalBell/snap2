import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const Home = () => {
  return (
    <Box maxWidth="xl">
      <Nav />
      <Hero />
    </Box>
  );
};

export default Home;
