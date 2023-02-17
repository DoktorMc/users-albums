import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./UserItem.css";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const UserItem = ({ item }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onLinkTo = (e) => {
    console.log(e.target);
    navigate(`${pathname}/${item.id}`);
  };
  return (
    <>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset", cursor: "pointer" } }}
        onClick={onLinkTo}
      >
        <TableCell align="center">{item.name}</TableCell>
        <TableCell align="center">{item.username}</TableCell>
        <TableCell align="center">{item.phone}</TableCell>
        <TableCell align="center">{item.email}</TableCell>
      </TableRow>
    </>
  );
};
export default UserItem;
