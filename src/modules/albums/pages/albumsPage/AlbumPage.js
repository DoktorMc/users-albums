import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAlbums } from "../../../../store/actions/albumActions";
import AlbumList from "../../components/albumList/AlbumList";

const AlbumPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbums());
  });

  return (
    <div>
      <AlbumList />
    </div>
  );
};

export default AlbumPage;
