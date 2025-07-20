import { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Full Name: {userData.name}</p>
      <p>Email Address: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
