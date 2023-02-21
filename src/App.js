import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./modules/home/HomePage";
import NotFoundPage from "./modules/about/notFound/NotFoundPage";
import Navigation from "./modules/common/commonComponents/navigation/Navigation";
import UserModule from "./modules/users/pages/UserModule";
import AlbumsModule from "./modules/albums/pages/AlbumModules";
import "./App.css";
import { Box } from "@mui/material";


function App() {
  return (
    <Box
      className="App"
      sx={{
        minHeight:'100vh',
        backgroundColor: "primary.paper",
      }}
    >
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/*" element={<UserModule />} />
          <Route path="/albums/*" element={<AlbumsModule />} />
          <Route path="/notfound" element={<NotFoundPage />} />
          <Route
            path="*"
            element={<Navigate to="/notfound" replace={true} />}
          />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
