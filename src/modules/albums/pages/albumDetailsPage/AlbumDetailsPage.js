import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAlbumsDetails } from "../../../../store/actions/albumActions";
import AlbumDetails from "../../components/albumsDetails/AlbumDetails";

import { Container} from "@mui/material";

export const AlbumDetailsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    dispatch(getAlbumsDetails(id));
  }, [id]);
  return (
    <Container maxWidth="xl">
      <AlbumDetails />
    </Container>
  );
};

export default AlbumDetailsPage;
