import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../redux/reducers/users';

function Header({ user, dispatch }) {
  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <div className="w-full h-16 bg-darkest-blue text-green-900 font-crafty">
      <div className="flex flex-row h-16 px-10 justify-between">
        <span className="self-center text-4xl uppercase">
          {`< React-Habit-Tracker >`}
        </span>
        {user && user.email ? (
          <span
            className="self-center text-2xl cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </span>
        ) : null}
      </div>
    </div>
  );
}

const mapStateToProps = ({ users: { user } }) => {
  return { user };
};
export default connect(mapStateToProps)(Header);
