import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../redux/reducers/users';

function SignIn({ dispatch }) {
  const [email, setEmail] = useState('user@habits.com');
  const navigate = useNavigate();
  const handleSubmit = () => {
    dispatch(signIn(email));
    return navigate('/habits');
  };
  return (
    <div className="w-full h-screen">
      <div className="w-1/4 mx-auto">
        <div className="flex flex-col items-center gap-10 mt-10">
          <span className="text-7xl font-jack">{`( Sign In )`}</span>
          <input
            className="w-full h-12 text-black rounded-lg"
            type="text"
            defaultValue={'user@habits.com'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-dark-blue px-10 py-2 text-green-100 rounded-lg"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(SignIn);
