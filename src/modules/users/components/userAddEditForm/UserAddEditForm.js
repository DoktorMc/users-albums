import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Box, TextField , Button} from "@mui/material";


import { useNavigate } from "react-router-dom";
import { setProperty } from "../../../../helper/setPropertyToNestedObj";
import { withRouter } from "../../../../hoc/withRouter";
import useCustomNavigate from "../../../../hooks/useCastomNavigate";
import { addUser, updateUser } from "../../../../store/actions/userActions";

// function extend(obj1, obj2) {
//   function copyObject(obj) {
//     const result = {};
//     for (let key in obj) {
//       if (typeof obj[key] != "object") {
//         result[key] = obj[key];
//       } else {
//         result[key] = copyObject(obj[key]);
//       }
//     }
//     return result;
//   }
//   for (let key in obj2) {
//     if (typeof obj2[key] != "object") {
//       obj1[key] = obj2[key];
//     } else {
//       obj1[key] = copyObject(obj2[key]);
//     }
//   }
//   return obj1;
// }

export const UserAddEditForm = ({
  userForUpdate,
  onAddUser,
  onUpdeteUser,
  routerInfo,
}) => {
  const [user, setUser] = useState({
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
  });

  const [nameError, setNameError] = useState(true);
  const [userNameError, setUserNameError] = useState(true);
  const [phoneNumberError, setPhoneNumberError] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [formValid, setFormValid] = useState(false);

  const navigate = useCustomNavigate();
  const nav = useNavigate();

  // console.log("user for updatung data - ", userForUpdate);

  useEffect(() => {
    //     if (routerInfo.params.id) {
    //    console.log("THIS EDIT FORM");

    //    console.log("user after", user);
    //  }
    console.log("user eror imput", nameError);
    // setUser(extend(user, userForUpdate));
    if (nameError || userNameError || phoneNumberError || emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  console.log("form valid", formValid);
  }, [nameError, userNameError, phoneNumberError, emailError, formValid]);

  const errorText = (name, empty) => {
    const errors = {
      name: (empty) =>
        empty ? setNameError(false) : setNameError(true),
      username: (empty) =>
        empty
          ? setUserNameError(false)
          : setUserNameError(true),
      phone: (empty) =>
        empty
          ? setPhoneNumberError(false)
          : setPhoneNumberError(true),
      email: (empty) =>
        empty
          ? setEmailError(false)
          : setEmailError(true),
    };

    return errors[name]?.(empty);
  };

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setUser(setProperty(user, name, value));
    errorText(name, value);
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
            error={nameError}
            id="outlined-controlled"
            placeholder="Name"
            label="Name"
           
            value={user.name}
            onChange={onInputChange}
            name="name"
            helperText={nameError ? "the name is not written!" : ""}
          />

          <TextField
            error={userNameError}
            id="outlined-controlled"
            placeholder="User name"
            label="User name"
            value={user.username}
            onChange={onInputChange}
            name="username"
            helperText={userNameError ? "the user name is not written!" : ""}
          />

          <TextField
            error={phoneNumberError}
            id="outlined-controlled"
            placeholder="Phone"
            label="Phone"
            value={user.phone}
            onChange={onInputChange}
            name="phone"
            helperText={phoneNumberError ? "the phone is not written!" : ""}
          />

          <TextField
            error={emailError}
            id="outlined-controlled"
            placeholder="E-mail"
            label="E-mail"
            value={user.email}
            onChange={onInputChange}
            name="email"
            helperText={emailError ? "the e-mail is not written!" : ""}
          />

          <TextField
            id="outlined-controlled"
            placeholder="Website"
            label="Website"
            value={user.website}
            onChange={onInputChange}
            name="website"
          />
        </Box>
        <div className="form-input_address">
          <h3>Address information</h3>

          <input
            type="text"
            placeholder="Street"
            value={user.address?.street}
            onChange={onInputChange}
            name="address.street"
          />
          <input
            type="text"
            placeholder="Suite"
            value={user.address?.suite}
            onChange={onInputChange}
            name="address.suite"
          />
          <input
            type="text"
            placeholder="City"
            value={user.address?.city}
            onChange={onInputChange}
            name="address.city"
          />
        </div>
        <div className="form-input_company">
          <h3>Company information</h3>

          <input
            type="text"
            placeholder="Company name"
            value={user.company?.name}
            onChange={onInputChange}
            name="company.name"
          />
        </div>
      </Box>
      <div className="form-button">
        {routerInfo.params.id ? (
          <>
            <Button
              variant="contained"
              onClick={onClickUpdate}
              disabled={!formValid}
            >
              Edit
            </Button>

            <button className="form-button_cancel" onClick={navigate.goBack}>
              Back to details
            </button>
          </>
        ) : (
          <>
            <button
              className="form-button_save"
              onClick={onClickAdd}
              disabled={formValid}
            >
              Add
            </button>
            <button className="form-button_cancel" onClick={navigate.goBack}>
              Back to users
            </button>
          </>
        )}
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
