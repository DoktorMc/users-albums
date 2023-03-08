import * as yup from 'yup'

export default yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name should be of minimum 3 characters length")
    .max(30, "The length of the name must be a maximum of 30 characters"),
  username: yup
    .string()
    .required("User Name is required")
    .min(3, "Name should be of minimum 3 characters length")
    .max(30, "The length of the name must be a maximum of 30 characters"),
  phone: yup.number(),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("E-mail is required"),
  website: yup.string().url(),
  address: yup.object().shape({
    city: yup
      .string()
      .min(3, "Name should be of minimum 3 characters length")
      .max(30, "The length of the name must be a maximum of 30 characters"),
    street: yup
      .string()
      .min(3, "Name should be of minimum 3 characters length")
      .max(50, "The length of the name must be a maximum of 50 characters"),
    zipcode: yup
      .number()
      .min(3, "Name should be of minimum 3 characters length"),
  }),
});