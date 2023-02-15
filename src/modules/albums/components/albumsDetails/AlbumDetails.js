import React from "react";
import { connect } from "react-redux";

export const AlbumDetails = ({ photos }) => {
  return (
    <div>
      {photos.map((item) => (
        <div item={item} key={item.id}>
          <div>
            <img src={item.thumbnailUrl} alt="" />
            <span>{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = ({ albums }) => {
  const items = albums.photos;
  return {
    photos: items,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetails);
