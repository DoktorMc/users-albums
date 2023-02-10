import React from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const UserDetails = ({ userDetail }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate()
 
  const onEditForm = () => {
     navigate(`${pathname}/edit`, { replace: true })
  }
  return (
    <div>
      <h2>USER DETAIL</h2>
      <div>{userDetail.name}</div>
      <button onClick={onEditForm}>Edit Information</button>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  const item = users.userDetail;
  return {
    userDetail: item,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
