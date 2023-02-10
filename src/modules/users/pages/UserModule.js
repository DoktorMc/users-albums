import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import UserCRDPage from "./userCRDPage/UserCRDPage";
import UserDetailsPage from "./userDetailsPage/UserDetailsPage";
import UserPage from "./userPage/UserPage";

const UserModule = () => {
  return (
    <Routes>
      <Route path="/" element={<UserPage />} />
      <Route path="/:id" element={<UserDetailsPage />} />
      <Route path="/add" element={<UserCRDPage />} />
      <Route path="/:id/edit" element={<UserCRDPage />} />
      <Route path="*" element={<Navigate to="/notfound" replace={true} />} />
    </Routes>
  );
};

export default UserModule;
