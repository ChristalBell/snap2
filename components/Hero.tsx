import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import { COLORS } from "@/styles/colors";

const Hero = () => {
  return (
    <Box sx={{ display: "grid ", gridTemplateColumns: "1fr 1fr" }}>
      <Box className="left">
        <Typography variant="h1"> Make remote work</Typography>
        <Typography sx={{ color: COLORS.darkGrey }}>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.{" "}
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: COLORS.black,
            border: `1px solid ${COLORS.black}`,
            borderRadius: ".75rem",
          }}
        >
          {" "}
          Learn More
        </Button>
        <Box
          className="socials"
          sx={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Image
            src="/client-databiz.svg"
            alt=" databiz"
            height={20}
            width={115}
          />
          <Image
            src="/client-audiophile.svg"
            alt="audophile"
            height={20}
            width={115}
          />
          <Image src="/client-meet.svg" alt="maker" height={20} width={115} />
          <Image src="/client-maker.svg" alt="meet" height={20} width={115} />
        </Box>
      </Box>

      <Box className="right">
        <Image
          src="/image-hero-desktop.png"
          alt="hero"
          height={750}
          width={650}
        />
      </Box>
    </Box>
  );
};

export default Hero;
