import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AlbumDetailsPage from "./albumDetailsPage/AlbumDetailsPage";
import AlbumPage from "./albumsPage/AlbumPage";


const AlbumsModule = () => {
  return (
    <Routes>
      <Route path="/" element={<AlbumPage />} />
      <Route path="/:id" element={<AlbumDetailsPage/>} />
      <Route path="*" element={<Navigate to="/notfound" replace={true} />} />
    </Routes>
  );
};

export default AlbumsModule;
