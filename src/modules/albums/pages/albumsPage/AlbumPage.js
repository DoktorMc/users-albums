import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAlbums } from "../../../../store/actions/albumActions";
import AlbumList from "../../components/albumList/AlbumList";
import { Container } from "@mui/material";

const AlbumPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbums());
  });
  return (
    <Container maxWidth="xl">
      <AlbumList />
    </Container>
  );
};

export default AlbumPage;
