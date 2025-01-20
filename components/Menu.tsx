import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { COLORS } from "@/styles/colors";
import Image from "next/image";

export type MenuItem = {
  icon?: string;
  label: string;
};

interface Props {
  menuItems: MenuItem[];
}
const Menu = ({ menuItems }: Props) => {
  return (
    <Box
      sx={{
        borderRadius: ".625rem",
        backgroundColor: COLORS.white,
        padding: "1.5rem",
        boxShadow: "0 10px 40px 000000",
        position: "absolute",
      }}
    >
      {menuItems.map((item) => {
        return (
          <Typography key={item.label} sx={{ margin: ".5rem" }}>
            {item.icon && (
              <Image src={item.icon} alt="icon" height={16} width={16} />
            )}

            {item.label}
          </Typography>
        );
      })}
    </Box>
  );
};

export default Menu;
