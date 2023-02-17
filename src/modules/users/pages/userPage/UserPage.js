import React, { useEffect } from "react";
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
      
      <div>
        <input type="text" className="user-searcher" placeholder="Searcher" />
      </div>
     
      <UsersList />
    </>
  );
};

export default UserPage;
