import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserDetails } from "../../../../store/actions/userActions";

import UserDetails from "../../components/userDetails/UserDetails";

const UserDetailsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    dispatch(getUserDetails(id));
  }, [id]);

  return <UserDetails />;
};

export default UserDetailsPage;
