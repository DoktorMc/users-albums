import React from "react";
import { connect } from "react-redux";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export const AlbumDetails = ({ photos }) => {
  return (
    <>
      <ImageList sx={{ width: "auto", height: "auto" }} cols={5} gap={8}>
        {photos.map((item) => (
          <ImageListItem key={item.img} sx={{ width: 250 }}>
            <img
              src={`${item.thumbnailUrl}?w=248&fit=crop&auto=format`}
              srcSet={`${item.thumbnailUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} position="below" />
          </ImageListItem>
        ))}
      </ImageList>
    </>
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
