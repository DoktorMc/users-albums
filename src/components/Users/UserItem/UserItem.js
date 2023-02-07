import React from "react";

import './UserItem.css'

const UserItem = ({ item, onDeleteItem }) =>{
  const onClickDelete = (e) => {
    e.stopPropagation();
    onDeleteItem(item.id);
  };

  return (
    <div className="item-group">
      <div>{item.name}</div>
      <div>{item.username}</div>
      <div>{item.phone}</div>
      <div>{item.email}</div>
      <span className="item-group_delete" onClick={onClickDelete}>
        X
      </span>
    </div>
  );
}
export default UserItem;
