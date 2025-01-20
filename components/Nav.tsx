"use client";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import Image from "next/image";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Dropdown from "./Dropdown";

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
          width: "35vw",
          padding: "0 4rem",
        }}
      >
        <Image src="/logo.svg" alt="snap logo" width={87} height={35} />
        {dropdownMenuItems.map((dropdownMenuItem) => {
          return (
            <Dropdown
              key={dropdownMenuItem.menuLabel}
              label={dropdownMenuItem.menuLabel}
              menuItems={dropdownMenuItem.menuItems}
            />
          );
        })}

        <Typography>Careers</Typography>
        <Typography>About</Typography>
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
        <Button>Login</Button>
        <Button>Register</Button>
      </Box>
    </Box>
  );
};

export default Nav;
