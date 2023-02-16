import React,{ useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../../../store/actions/userActions";
import UsersList from "../../components/usersList/UsersList";
import "./UserPage.css";

const UserPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  });

  return (
    <>
      <div className="user-title">USER PAGE</div>
      <div>
        <input type="text" className="user-searcher" placeholder="Searcher" />
      </div>
      <div className="user-header">
        <div>Name</div>
        <div>User Name</div>
        <div>Phone number</div>
        <div>E-mail</div>
      </div>
     <UsersList/>
    </>
  );
};

export default UserPage;
