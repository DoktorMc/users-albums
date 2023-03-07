import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Box, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { useNavigate } from "react-router-dom";
import { setProperty } from "../../../../helper/setPropertyToNestedObj";
import { withRouter } from "../../../../hoc/withRouter";
import useCustomNavigate from "../../../../hooks/useCastomNavigate";
import { addUser, updateUser } from "../../../../store/actions/userActions";

export const UserAddEditForm = ({
  userForUpdate,
  onAddUser,
  onUpdeteUser,
  routerInfo,
}) => {
  const [user, setUser] = useState(
    routerInfo.params.id
      ? userForUpdate
      : {
          name: "",
          username: "",
          phone: "",
          email: "",
          address: {
            street: "",
            suite: "",
            city: "",
          },
          website: "",
          company: {
            name: "",
          },
        }
  );

  const navigate = useCustomNavigate();
  const nav = useNavigate();

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setUser(setProperty(user, name, value));
  };

  const onClickAdd = (e) => {
    e.preventDefault();
    onAddUser(user);
    nav("/users");
  };

  const onClickUpdate = (e) => {
    console.log(" form id update");
    console.log("user form", user);
    e.preventDefault();
    onUpdeteUser(routerInfo.params.id, user);
    nav("/users");
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
      >
        <Box component="div" noValidate autoComplete="off">
          <h3>General information</h3>
          <TextField
            id="outlined-controlled"
            size="small"
            placeholder="Name"
            label="Name"
            value={user.name}
            onChange={onInputChange}
            name="name"
            sx={{
              mb: 2,
            }}
          />

          <TextField
            id="outlined-controlled"
            size="small"
            placeholder="User name"
            label="User name"
            value={user.username}
            onChange={onInputChange}
            name="username"
            sx={{
              mb: 2,
            }}
          />

          <TextField
            id="outlined-controlled"
            size="small"
            placeholder="Phone"
            label="Phone"
            value={user.phone}
            onChange={onInputChange}
            name="phone"
            sx={{
              mb: 2,
            }}
          />

          <TextField
            id="outlined-controlled"
            size="small"
            placeholder="E-mail"
            label="E-mail"
            value={user.email}
            onChange={onInputChange}
            name="email"
            sx={{
              mb: 2,
            }}
          />

          <TextField
            id="outlined-controlled"
            size="small"
            placeholder="Website"
            label="Website"
            value={user.website}
            onChange={onInputChange}
            name="website"
            sx={{
              mb: 2,
            }}
          />
        </Box>
        <Box component="div">
          <h3>Address information</h3>

          <TextField
            id="outlined-controlled"
            size="small"
            placeholder="Street"
            label="Street"
            value={user.address?.street}
            onChange={onInputChange}
            name="address.street"
            sx={{
              mb: 2,
            }}
          />
          <TextField
            id="outlined-controlled"
            size="small"
            placeholder="Suite"
            label="Suite"
            value={user.address?.suite}
            onChange={onInputChange}
            name="address.suite"
            sx={{
              mb: 2,
            }}
          />
          <TextField
            id="outlined-controlled"
            size="small"
            placeholder="City"
            label="City"
            value={user.address?.city}
            onChange={onInputChange}
            name="address.city"
          />
        </Box>
        <Box component="div">
          <h3>Company information</h3>

          <TextField
            id="outlined-controlled"
            size="small"
            placeholder="Company name"
            label="Company name"
            value={user.company?.name}
            onChange={onInputChange}
            name="company.name"
            sx={{
              mb: 2,
            }}
          />
        </Box>
      </Box>
      <div className="form-button">
        {routerInfo.params.id ? (
          <Button
            variant="contained"
            onClick={onClickUpdate}
            endIcon={<SendIcon />}
          >
            Edit
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={onClickAdd}
            endIcon={<SendIcon />}
          >
            Add
          </Button>
        )}
        <Button
          variant="contained"
          onClick={navigate.goBack}
          sx={{
            ml: 2,
          }}
        >
          Go Back
        </Button>
      </div>
    </>
  );
};

const mapStateToProps = ({ users }) => {
  const item = users.userDetail;
  return {
    userForUpdate: item,
  };
};

const mapDispatchToProps = {
  onAddUser: addUser,
  onUpdeteUser: updateUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserAddEditForm));
