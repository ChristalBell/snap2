import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import { COLORS } from "@/styles/colors";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 14rem",
      }}
    >
      <Box className="left">
        <Typography variant="h1" sx={{ paddingTop: "12rem" }}>
          {" "}
          Make <br></br>remote work
        </Typography>
        <Typography sx={{ color: COLORS.darkGrey, padding: "2rem 0" }}>
          Get your team in sync, no matter your location.<br></br> Streamline
          processes, create team rituals,<br></br> and watch productivity soar.{" "}
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: COLORS.white,
            backgroundColor: COLORS.black,
            border: `1px solid ${COLORS.black}`,
            borderRadius: ".75rem",
            width: "10rem",

            "&:hover": {
              backgroundColor: COLORS.white,
              color: COLORS.black,
              border: `1px solid ${COLORS.black}`,
            },
          }}
        >
          {" "}
          Learn More
        </Button>
        <Box
          className="socials"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "8rem",
          }}
        >
          <Image
            src="/client-databiz.svg"
            alt=" databiz"
            height={20}
            width={60}
          />
          <Image
            src="/client-audiophile.svg"
            alt="audophile"
            height={20}
            width={60}
          />
          <Image src="/client-meet.svg" alt="maker" height={20} width={60} />
          <Image src="/client-maker.svg" alt="meet" height={20} width={60} />
        </Box>
      </Box>

      <Box className="right" sx={{ marginLeft: "8rem" }}>
        <Image
          src="/image-hero-desktop.png"
          alt="hero"
          height={750}
          width={650}
          style={{ marginTop: "8rem" }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
