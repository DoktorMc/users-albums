import React from 'react';
import { Link, useLocation } from "react-router-dom";

const AlbumItem = ({ item }) => {
  const { pathname } = useLocation(); 
  return (
    <div className="item-group">
      <Link to={`${pathname}/${item.id}`} className="item-group_link">
        <span>{item.title}</span>
      </Link>
    </div>
  );
}

export default AlbumItem;
