import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { getAlbumsByid } from "../../../../store/actions/albumActions";

const UserDetails = ({ userDetail, userAlbums, getUserAlbums }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getUserAlbums(userDetail.id);
  }, [userDetail.id]);

  const onEditForm = () => {
    navigate(`${pathname}/edit`);
  };
  return (
    <div>
      <h2>USER DETAIL</h2>
      <div>{userDetail.name}</div>
      <button onClick={onEditForm}>Edit Information</button>

      <h4>User photo album</h4>
      <div>
        {userAlbums.map((item) => (
          <div item={item} key={item.id}>
            <Link to={`/albums/${item.id}`} className="item-group_link">
              <span>{item.title}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ users, albums }) => {
  const item = users.userDetail;
  const albumsItem = albums.userAlbums;
  return {
    userDetail: item,
    userAlbums: albumsItem,
  };
};

const mapDispatchToProps = {
  getUserAlbums: getAlbumsByid,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
