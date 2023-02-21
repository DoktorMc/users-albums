import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchUsers } from "../../../../store/actions/userActions";
import UsersList from "../../components/usersList/UsersList";
import { Container, TextField } from "@mui/material";
import "./UserPage.css";
import { searchContact } from "../../../../store/actions/searchAction";

const UserPage = ({ onSearchContact }) => {
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
            onChange={(e) => onSearchContact(e.target.value)}
            sx={{ mb: 2, width: "40ch" }}
          />
        </div>
        <UsersList />
      </Container>
    </>
  );
};

const mapDispatchToProps = {
  onSearchContact: searchContact 
};

export default  connect(null, mapDispatchToProps)  (UserPage);
