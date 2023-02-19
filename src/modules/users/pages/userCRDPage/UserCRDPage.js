import React from "react";
import { Container} from "@mui/material";

import UserAddForm from "../../components/userAddEditForm/UserAddEditForm";

const UserCRDPage = () => {
  return (
    <Container maxWidth="xl">
      <UserAddForm />
    </Container>
  );
};

export default UserCRDPage;
