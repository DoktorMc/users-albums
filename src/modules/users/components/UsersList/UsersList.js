import React from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteUser } from "../../../../store/actions/userActions";
import UserItem from "../userItem/UserItem";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { Button } from "@mui/material";

const UsersList = ({ users }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onAddUser = () => {
    navigate(`${pathname}/add`);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow
              sx={{
                "& th": {
                  color: "#fff",
                  backgroundColor: "primary.main",
                },
              }}
            >
              <TableCell sx={{ fontSize: 20 }} align="center">
                Name
              </TableCell>
              <TableCell sx={{ fontSize: 20 }} align="center">
                User Name
              </TableCell>
              <TableCell sx={{ fontSize: 20 }} align="center">
                Phone
              </TableCell>
              <TableCell sx={{ fontSize: 20 }} align="center">
                E-mail
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((item) => (
              <UserItem item={item} key={item.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        variant="contained"
        onClick={onAddUser}
        sx={{ mt: 2, width: "20ch", fontSize: 15, fontWeight: 'bold'}}
        color='secondary'
      >
        Add new user
      </Button>
    </>
  );
};

function mapStateToProps({ users }) {
  const items = users.users;
  return {
    users: items,
  };
}

const mapDispatchToProps = {
  onDeleteItem: deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
