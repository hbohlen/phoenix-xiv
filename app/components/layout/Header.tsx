// layout/Header.tsx

import { useSession } from "next-auth/react";
import { AppBar, Toolbar, Typography, Avatar } from "@mui/material";

const Header: React.FC = () => {
  const { data: session } = useSession();

  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Phoenix.xiv</Typography>
        {session && <Avatar src={session.user?.image as string} alt="User" />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
