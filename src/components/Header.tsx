import React from "react";
import { AppBar, Toolbar } from "@mui/material";

const Header: React.FC = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <h1 className="text-2xl font-bold">Sticky Notes</h1>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
