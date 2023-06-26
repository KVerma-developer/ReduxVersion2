import React, { useEffect } from 'react';
import { fetchUsers } from './userSlice'; // Corrected import statement

import { useDispatch, useSelector } from 'react-redux';

const UserView = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user); //this is from store

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => (
            <li key={user.name}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default UserView;

