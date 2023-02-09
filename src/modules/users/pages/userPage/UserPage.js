import UserList from '../../components/UsersList/UsersList'
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
        />
      </div>
      <div className="user-header">
        <div>Name</div>
        <div>User Name</div>
        <div>Phone number</div>
        <div>E-mail</div>
      </div>
    <UserList/>
    </>
  );
};

export default UserPage;
