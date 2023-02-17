import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserDetails } from "../../../../store/actions/userActions";
import Container from "@mui/material/Container";
import UserDetails from "../../components/userDetails/UserDetails";

const UserDetailsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    dispatch(getUserDetails(id));
  }, [id]);

  return (
    <>
      <Container maxWidth="xl">
        <UserDetails />
      </Container>
      
    </>
  )
 
};

export default UserDetailsPage;
