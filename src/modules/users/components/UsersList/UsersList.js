import React from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteUser } from "../../../../store/actions/userActions";
import UserItem from "../userItem/UserItem";

const UsersListPage = ({ users, onDeleteItem }) => {

   const { pathname } = useLocation();
   const navigate = useNavigate();

   const onAddUser= () => {
     navigate(`${pathname}/add`, { replace: true });
   };
  
  return (
    <>
      <div className="list-items">
      {users.map((item) => (
        <UserItem item={item} key={item.id} onDeleteItem={onDeleteItem} />
      ))}
      </div>
      <button onClick={onAddUser}>Add new user</button>
    </>
   
  );
};

function mapStateToProps({ users }) {
  const items = users.users;
  return {
    users: items,
  };
}

const mapDispatchToProps = {
  onDeleteItem: deleteUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListPage);
