import React from "react";
import { connect } from "react-redux";
import { deleteUser } from "../../../store/actions/userActions";
import UserItem from "../UserItem/UserItem";

const UsersListPage = ({ users, onDeleteItem }) => {
  return (
    <div className="list-items">
      {users.map((item) => (
        <UserItem item={item} key={item.id} onDeleteItem={onDeleteItem} />
      ))}
    </div>
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
