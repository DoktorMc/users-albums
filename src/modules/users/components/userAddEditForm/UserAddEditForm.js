import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "../../../../hoc/withRouter";
import useCustomNavigate from "../../../../hooks/useCastomNavigate";
import { addUser } from "../../../../store/actions/userActions";

const setProperty = (obj, path, value) => {
  const [head, ...rest] = path.split(".");

  return {
    ...obj,
    [head]: rest.length ? setProperty(obj[head], rest.join("."), value) : value,
  };
};

export const UserAddEditForm = ({ onAddUser, routerInfo }) => {
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
  });

  const [nameError, setNameError] = useState(" ");
  const [userNameError, setUserNameError] = useState(" ");
  const [phoneNumberError, setPhoneNumberError] = useState(" ");
  const [emailError, setEmailError] = useState(" ");
  const [formValid, setFormValid] = useState(false);

  const navigate = useCustomNavigate();

  useEffect(() => {
    if (nameError || userNameError || phoneNumberError || emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, userNameError, phoneNumberError, emailError, formValid]);

  const errorText = (name, empty) => {
    const errors = {
      name: (empty) =>
        !empty ? setNameError("the name is not written!") : setNameError(""),
      username: (empty) =>
        !empty
          ? setUserNameError("the surname is not written!")
          : setUserNameError(""),
      phone: (empty) =>
        !empty
          ? setPhoneNumberError("the phone number is not written!")
          : setPhoneNumberError(""),
      email: (empty) =>
        !empty
          ? setEmailError("the E-mail is not written!")
          : setEmailError(""),
    };

    return errors[name]?.(empty);
  };

  console.log("user", user);

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });

    setUser(setProperty(user, name, value));
    errorText(name, value);
  };

  const onClickAdd = (e) => {
    e.preventDefault();
    onAddUser(user);
  };

  return (
    <>
      <form className="form">
        <div className="form-input_general">
          <h3>General information</h3>
          {nameError && <div className="form-error">{nameError}</div>}
          <input
            type="text"
            placeholder="Name"
            value={user.name}
            onChange={onInputChange}
            name="name"
          />
          {userNameError && <div className="form-error">{userNameError}</div>}
          <input
            type="text"
            placeholder="Surname"
            value={user.username}
            onChange={onInputChange}
            name="username"
          />
          {phoneNumberError && (
            <div className="form-error">{phoneNumberError}</div>
          )}
          <input
            type="text"
            placeholder="Phone number"
            value={user.phone}
            onChange={onInputChange}
            name="phone"
          />
          {emailError && <div className="form-error">{emailError}</div>}
          <input
            type="text"
            placeholder="E-mail"
            value={user.email}
            onChange={onInputChange}
            name="email"
          />
          <input
            type="text"
            placeholder="Website"
            value={user.website}
            onChange={onInputChange}
            name="website"
          />
        </div>
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
            name="company.street"
          />
        </div>
      </form>
      <div className="form-button">
        {routerInfo.params.id ? (
          <>
            <button
              className="form-button_save"
              // onClick={onClick}
              disabled={!formValid}
            >
              Edit
            </button>
            <button className="form-button_cancel" onClick={navigate.goBack}>
              Back to details
            </button>
          </>
        ) : (
          <>
            <button
              className="form-button_save"
              onClick={onClickAdd}
              disabled={!formValid}
            >
              Add
            </button>
            <button
              className="form-button_cancel"
              onClick={() => navigate.goBack()}
            >
              Back to users
            </button>
          </>
        )}
      </div>
    </>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  onAddUser: addUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserAddEditForm));
