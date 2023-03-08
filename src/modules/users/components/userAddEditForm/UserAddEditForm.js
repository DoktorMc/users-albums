import React from "react";
import { connect } from "react-redux";
import { Box, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import { withRouter } from "../../../../hoc/withRouter";
import useCustomNavigate from "../../../../hooks/useCastomNavigate";
import { addUser, updateUser } from "../../../../store/actions/userActions";
import { Formik, Form} from "formik";
import userFormSchema from "../../../../helper/validation/userFormSchema";

export const UserAddEditForm = ({
  userForUpdate,
  onAddUser,
  onUpdeteUser,
  routerInfo,
}) => {
  const navigate = useCustomNavigate();
  const nav = useNavigate();

  const onSubmit = (values) => {
    console.log("VULUES", values);
    routerInfo.params.id
      ? onUpdeteUser(routerInfo.params.id, values)
      : onAddUser(values);
    nav("/users");
  };

  return (
    <>
      <Formik
        initialValues={
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
        }
        onSubmit={onSubmit}
        validationSchema={userFormSchema}
      >
        {(formik) => {
          return (
            <Box
              component={Form}
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
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  sx={{
                    mb: 2,
                  }}
                />

                <TextField
                  id="outlined-controlled"
                  size="small"
                  placeholder="User name"
                  label="User name"
                  value={formik.values.username}
                  onChange={formik.handleChange}
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
                  value={formik.values.phone}
                  onChange={formik.handleChange}
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
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  sx={{
                    mb: 2,
                  }}
                />

                <TextField
                  id="outlined-controlled"
                  size="small"
                  placeholder="Website"
                  label="Website"
                  value={formik.values.website}
                  onChange={formik.handleChange}
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
                  value={formik.values.address?.street}
                  onChange={formik.handleChange}
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
                  value={formik.values.address?.suite}
                  onChange={formik.handleChange}
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
                  value={formik.values.address?.city}
                  onChange={formik.handleChange}
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
                  value={formik.values.company?.name}
                  onChange={formik.handleChange}
                  name="company.name"
                  sx={{
                    mb: 2,
                  }}
                />
              </Box>

              <div className="form-button">
                {routerInfo.params.id ? (
                  <Button
                    component="button"
                    type="submit"
                    variant="contained"
                    disabled={!formik.dirty || formik.isSubmitting}
                    endIcon={<SendIcon />}
                  >
                    Edit
                  </Button>
                ) : (
                  <Button
                    component="button"
                    variant="contained"
                    disabled={!formik.dirty || formik.isSubmitting}
                    type="submit"
                    endIcon={<SendIcon />}
                  >
                    Add
                  </Button>
                )}
                <Button
                  component="button"
                  type="button"
                  variant="contained"
                  onClick={navigate.goBack}
                  sx={{
                    ml: 2,
                  }}
                >
                  Go Back
                </Button>
              </div>
            </Box>
          );
        }}
      </Formik>
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
