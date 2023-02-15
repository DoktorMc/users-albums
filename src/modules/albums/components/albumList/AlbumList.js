import React from "react";
import { connect } from "react-redux";
import AlbumItem from "../albumItem/AlbumItem";

export const AlbumList = ({ albums }) => {
  return (
    <>
      <div className="list-items">
        {albums.map((item) => (
          <AlbumItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = ({ albums }) => {
  const items = albums.albums;
  return {
    albums: items,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
