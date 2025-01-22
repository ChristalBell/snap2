"use client";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Menu, { MenuItem } from "./Menu";

interface Props {
  label: string;
  menuItems: MenuItem[];
}
const Dropdown = ({ label, menuItems }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Typography
        onClick={() => setIsOpen(!isOpen)}
        sx={{ fontWeight: "bold", fontSize: "1rem", cursor: "pointer" }}
      >
        {label} {isOpen ? "^" : "v"}
        {isOpen && <Menu menuItems={menuItems} />}
      </Typography>
    </Box>
  );
};

export default Dropdown;
