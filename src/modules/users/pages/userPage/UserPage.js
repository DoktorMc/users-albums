import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../../../store/actions/userActions";
import UsersList from "../../components/usersList/UsersList";
import { Container, TextField } from "@mui/material";
import "./UserPage.css";

const UserPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  });
  return (
    <>
      <Container maxWidth="xl">
        <div>
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            size="small"
            sx={{ mb: 2, width: "40ch" }}
          />
        </div>
        <UsersList />
      </Container>
    </>
  );
};

export default UserPage;
