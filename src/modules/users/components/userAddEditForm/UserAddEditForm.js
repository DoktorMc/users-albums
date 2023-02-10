import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

export const UserAddEditForm = ({ onAddElement }) => {
  const [contact, setContact] = useState({
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

  const [nameError, setNameError] = useState(" ");
  const [userNameError, setUserNameError] = useState(" ");
  const [phoneNumberError, setPhoneNumberError] = useState(" ");
  const [emailError, setEmailError] = useState(" ");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || userNameError || phoneNumberError || emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, userNameError, phoneNumberError, emailError, formValid]);

  const params = useParams() 
 
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

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setContact({ ...contact, [name]: value });
    errorText(name, value);
  };

  const onClick = (e) => {
    e.preventDefault();
    onAddElement(contact);
  };

  return (
    <form className="form">
      <div className="form-input">
        {nameError && <div className="form-error">{nameError}</div>}
        <input
          type="text"
          placeholder="Name"
          value={contact.name}
          onChange={onInputChange}
          name="name"
        />
        {userNameError && <div className="form-error">{userNameError}</div>}
        <input
          type="text"
          placeholder="Surname"
          value={contact.username}
          onChange={onInputChange}
          name="username"
        />
        {phoneNumberError && (
          <div className="form-error">{phoneNumberError}</div>
        )}
        <input
          type="text"
          placeholder="Phone number"
          value={contact.phone}
          onChange={onInputChange}
          name="phone"
        />
        {emailError && <div className="form-error">{emailError}</div>}
        <input
          type="text"
          placeholder="E-mail"
          value={contact.email}
          onChange={onInputChange}
          name="email"
        />
      </div>

      <div className="form-button">
        {params.id ? (
          <button
            className="form-button_save"
            onClick={onClick}
            disabled={!formValid}
          >
            Edit 
          </button>
        ) : (
          <button
            className="form-button_save"
            onClick={onClick}
            disabled={!formValid}
          >
            Add 
          </button>
        )}

        <button className="form-button_cancel">Cancel</button>
      </div>
    </form>
  );
};

const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(UserAddEditForm);
