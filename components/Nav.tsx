"use client";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import Dropdown from "./Dropdown";
import { COLORS } from "@/styles/colors";

const Nav = () => {
  const dropdownMenuItems = [
    {
      menuLabel: "Features",
      menuItems: [
        { icon: "/icon-todo.svg", label: "To Do List" },
        { icon: "/icon-calendar.svg", label: "Calendar" },
        { icon: "/icon-reminders.svg", label: "Reminders" },
        { icon: "/icon-planning.svg", label: "Planning" },
      ],
    },
    {
      menuLabel: "Company",
      menuItems: [
        { label: "History" },
        { label: "Our Team" },
        { label: "Blog" },
      ],
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "2rem",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "40vw",
        }}
      >
        <Image
          src="/logo.svg"
          alt="snap logo"
          width={80}
          height={30}
          style={{ marginLeft: "4rem" }}
        />
        {dropdownMenuItems.map((dropdownMenuItem) => {
          return (
            <Dropdown
              key={dropdownMenuItem.menuLabel}
              label={dropdownMenuItem.menuLabel}
              menuItems={dropdownMenuItem.menuItems}
            />
          );
        })}

        <Typography
          sx={{ fontWeight: "bold", fontSize: "1rem", cursor: "pointer" }}
        >
          Careers
        </Typography>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "1rem", cursor: "pointer" }}
        >
          About
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "15vw",
          marginRight: "4rem",
        }}
      >
        <Button
          sx={{
            fontSize: ".75rem",
            fontWeight: "bold",
            color: COLORS.black,
          }}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderRadius: ".75rem",
            border: `2px solid ${COLORS.black}`,
            backgroundColor: COLORS.black,
            color: COLORS.white,
            fontSize: ".75rem",
            fontWeight: "bold",

            "&:hover": {
              backgroundColor: COLORS.white,
              color: COLORS.black,
              border: `1px solid ${COLORS.black}`,
            },
          }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default Nav;
