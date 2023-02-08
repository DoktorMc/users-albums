import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
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
      <Route path="/10" element={<UserDetailsPage />} />
    </Routes>
  );
};

export default UserModule;
