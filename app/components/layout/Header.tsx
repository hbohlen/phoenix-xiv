// layout/Header.tsx
"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Link href="/">
          <Typography variant="h6" style={{ cursor: "pointer" }}>
            Phoenix.xiv
          </Typography>
        </Link>
        <Avatar
          src="#" // replace with your default avatar image
          alt="User"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link href="/settings">Settings</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>Sign Out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
