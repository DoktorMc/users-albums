import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Box } from "@mui/system";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { getAlbumsByid } from "../../../../store/actions/albumActions";
import { Typography } from "@mui/material";

const UserDetails = ({ userDetail, userAlbums, getUserAlbums }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log("USER Detail", userDetail);
  useEffect(() => {
    getUserAlbums(userDetail.id);
  }, [userDetail.id]);

  const onEditForm = () => {
    navigate(`${pathname}/edit`);
  };
  return (
    <div>
      <h2>USER DETAIL</h2>

      <Box
        component="div"
        sx={{ mb: 2, p: 2, border: "1px dashed grey", maxWidth: 500 }}
      >
        <Typography sx={{ mb: 2, fontSize: 25 }}>{userDetail.name}</Typography>
        <Typography>
          <p>
            User name - <span>{userDetail.username}</span>
          </p>
          <p>
            Phone - <span>{userDetail.phone}</span>
          </p>
          <p>
            E-mail - <span> {userDetail.email}</span>
          </p>
          <p>
            Website - <span> {userDetail.website}</span>
          </p>
        </Typography>
      </Box>

      <Box
        component="div"
        sx={{ mb: 2, p: 2, border: "1px dashed grey", maxWidth: 500 }}
      >
        <Typography sx={{ mb: 2, fontSize: 25 }}>Address</Typography>
        <Typography>
          <p>
            City - <span> {userDetail.address?.city}</span>
          </p>
          <p>
            Street - <span> {userDetail.address?.street}</span>
          </p>
          <p>
            Suite - <span> {userDetail.address?.suite}</span>
          </p>
          <p>
            Zip-code - <span> {userDetail.address?.zipcode}</span>
          </p>
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{ mb: 2, p: 2, border: "1px dashed grey", maxWidth: 500 }}
      >
        <Typography sx={{ mb: 2, fontSize: 25 }}>Company</Typography>
        <Typography>
          <p>Company name - <span> {userDetail.company?.name}</span></p>
          <p>BS - <span> {userDetail.company?.bs}</span></p>
          <p>Catch phrase - <span> {userDetail.company?.catchPhrase}</span></p>
        </Typography>
      </Box>

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
