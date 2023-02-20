import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import FolderIcon from "@mui/icons-material/Folder";
import { Link, useLocation } from "react-router-dom";

export const AlbumList = ({ albums }) => {
   const { pathname } = useLocation(); 
  return (
    <>
      <Box
        component="div"
        sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {albums.map((item) => (
          <List
            item={item}
            key={item.id}
            sx={{ width: 350, border: 1, borderRadius: "16px", m: 1 }}
          >
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <Link to={`${pathname}/${item.id}`}>
                <span>{item.title}</span>
              </Link>
            </ListItem>
          </List>
        ))}
      </Box>
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
