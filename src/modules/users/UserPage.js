import UsersList from "../../components/Users/UserList/UsersList";

import './UserPage.css';

const UserPage = () => {
  return (
    <>
      <div className="user-title">USER PAGE</div>
      <div>
        <input
          type="text"
          className="user-searcher"
          placeholder="Searcher"
          // onChange={(e) => onSearchContact(e.target.value)}
        />
      </div>
      <div className="user-header">
        <div>Name</div>
        <div>User Name</div>
        <div>Phone number</div>
        <div>E-mail</div>
      </div>

      <UsersList/>
    </>
  );
};

export default UserPage;
