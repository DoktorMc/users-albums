import * as yup from "yup";
import "yup-phone";

const phoneRegex =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{2,3}\)?)\s?-?\s?(\(?\d{2,3}\)?)s?-?\s?(\(?\d{2,3}\)?)?$/;
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
  phone: yup.string().matches(phoneRegex, 'doesn\'t look like a phone number, try again').max(17).required(),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("E-mail is required"),
  website: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    ),
  address: yup.object().shape({
    city: yup
      .string()
      .min(3, "Name should be of minimum 3 characters length")
      .max(30, "The length of the name must be a maximum of 30 characters"),
    street: yup
      .string()
      .min(3, "Name should be of minimum 3 characters length")
      .max(50, "The length of the name must be a maximum of 50 characters")
  }),
});
