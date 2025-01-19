"use client";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Menu from "./Menu";

interface Props {
  label: string;
}
const Dropdown = ({ label }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [{ icon: "/icon-todo.svg", label: "To Do List" }];

  return (
    <Box>
      <Typography onClick={() => setIsOpen(!isOpen)}>
        Features {isOpen ? "^" : "v"}
        {isOpen && <Menu menuItems={menuItems} />}
      </Typography>
    </Box>
  );
};

export default Dropdown;
