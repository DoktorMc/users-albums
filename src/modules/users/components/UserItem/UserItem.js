import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./UserItem.css";

const UserItem = ({ item, onDeleteItem }) => {
  const onClickDelete = (e) => {
    e.stopPropagation();
    onDeleteItem(item.id);
  };

 
const {pathname} = useLocation()
  return (
    <div className="item-group">
      <Link to={`${pathname}/${item.id}`} className="item-group_link">
        <div>{item.name}</div>
        <div>{item.username}</div>
        <div>{item.phone}</div>
        <div>{item.email}</div>
      </Link>
      <span className="item-group_delete" onClick={onClickDelete}>
        X
      </span>
    </div>
  );
};
export default UserItem;
