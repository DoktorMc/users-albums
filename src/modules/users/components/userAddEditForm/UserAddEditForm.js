import React from "react";
import { connect } from "react-redux";
import { Box, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import { withRouter } from "../../../../hoc/withRouter";
import useCustomNavigate from "../../../../hooks/useCastomNavigate";
import { addUser, updateUser } from "../../../../store/actions/userActions";
import { Formik, Form, Field} from "formik";
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
                <Field
                  as={TextField}
                  id="outlined-controlled"
                  size="small"
                  placeholder="Name"
                  label="Name"
                  name="name"
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  sx={{
                    mb: 2,
                  }}
                />

                <Field
                  as={TextField}
                  id="outlined-controlled"
                  size="small"
                  placeholder="User name"
                  label="User name"
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                  helperText={formik.touched.username && formik.errors.username}
                  name="username"
                  sx={{
                    mb: 2,
                  }}
                />

                <Field
                  as={TextField}
                  id="outlined-controlled"
                  size="small"
                  placeholder="Phone"
                  label="Phone"
                  name="phone"
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                  sx={{
                    mb: 2,
                  }}
                />

                <Field
                  as={TextField}
                  id="outlined-controlled"
                  size="small"
                  placeholder="E-mail"
                  label="E-mail"
                  name="email"
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  sx={{
                    mb: 2,
                  }}
                />

                <Field
                  as={TextField}
                  id="outlined-controlled"
                  size="small"
                  placeholder="Website"
                  label="Website"
                  name="website"
                  error={
                    formik.touched.website && Boolean(formik.errors.website)
                  }
                  helperText={formik.touched.website && formik.errors.website}
                  sx={{
                    mb: 2,
                  }}
                />
              </Box>
              <Box component="div">
                <h3>Address information</h3>

                <Field
                  as={TextField}
                  id="outlined-controlled"
                  size="small"
                  placeholder="Street"
                  label="Street"
                  name="address.street"
                  error={
                    formik.touched.address?.street &&
                    Boolean(formik.errors.address?.street)
                  }
                  helperText={
                    formik.touched.address?.street &&
                    formik.errors.address?.street
                  }
                  sx={{
                    mb: 2,
                  }}
                />
                <Field
                  as={TextField}
                  id="outlined-controlled"
                  size="small"
                  placeholder="Suite"
                  label="Suite"
                  name="address.suite"
                  sx={{
                    mb: 2,
                  }}
                />
                <Field
                  as={TextField}
                  id="outlined-controlled"
                  size="small"
                  placeholder="City"
                  label="City"
                  name="address.city"
                  error={
                    formik.touched.address?.city &&
                    Boolean(formik.errors.address?.city)
                  }
                  helperText={
                    formik.touched.address?.city &&
                    formik.errors.address?.city
                  }
                />
              </Box>
              <Box component="div">
                <h3>Company information</h3>

                <Field
                  as={TextField}
                  id="outlined-controlled"
                  size="small"
                  placeholder="Company name"
                  label="Company name"
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
