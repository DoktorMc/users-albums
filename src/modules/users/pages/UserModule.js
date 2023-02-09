import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { fetchUsers } from "../../../store/actions/userActions";
import UserDetailsPage from "./userDetailsPage/UserDetailsPage";
import UserPage from "./userPage/UserPage";

const UserModule = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  });
  
  return (
    <Routes>
      <Route path="/" element={<UserPage />} />
      <Route path="/:id" element={<UserDetailsPage />} />
      <Route path="*" element={<Navigate to="/notfound" replace={true} />} />
    </Routes>
  );
};

export default UserModule;
