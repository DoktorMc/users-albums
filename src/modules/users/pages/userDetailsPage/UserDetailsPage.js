import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserDetails } from "../../../../store/actions/userActions";

import UserDetails from "../../components/userDetails/UserDetails";

const UserDetailsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getUserDetails(params.id));
  }, [params.id]);

  return <UserDetails />;
};

export default UserDetailsPage;
