import { Box, Container } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "primary.paper",
      }}
    >
      <Container maxWidth="xl">
        <Box component="div"><span>HOME PAGE</span></Box>
      </Container>
    </Box>
  );
};

export default HomePage;
