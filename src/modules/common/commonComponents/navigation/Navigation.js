import React from "react";
import { NavLink } from "react-router-dom";

import { AppBar, Toolbar, Button, Link } from "@mui/material";
import Container from "@mui/material/Container";
import HiveSharpIcon from "@mui/icons-material/HiveSharp";
import { Box } from "@mui/system";

const Navigation = () => {
  return (
    <>
      <AppBar position="static" sx={{ mb: 1 }}>
        <Container maxWidth="xl">
          <Toolbar>
            <NavLink to={"/"}>
              <HiveSharpIcon color="secondary" sx={{ fontSize: 40 }} />
            </NavLink>

            <Box
              sx={{
                ml: 15,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Button variant="contained" href="/users" sx={{ mr: 5 }}>
                Users
              </Button>
              <Button variant="contained" href="/albums">
                Albums
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navigation;
