import React, { useState } from 'react';
import { createAlbum } from '../../../redux/reducers';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';

function CreateAlbum({ dispatch }) {
  const [title, setTitle] = useState('');
  const [userID, setUserID] = useState('');

  const handleSubmit = async () => {
    await toast.promise(
      fetch(`https://jsonplaceholder.typicode.com/albums`, {
        method: 'POST',
        body: JSON.stringify({
          title,
          userID,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json())
        .then((res) => {
          dispatch(createAlbum(res));
        })
        .catch((err) => console.log(err)),
      {
        pending: 'Creating the album...',
        success: 'Album created successfully! 👌',
        error: 'Something went wrong 🤯',
      }
    );
  };

  return (
    <div className="w-full h-full my-5">
      <div className="w-1/4 mx-auto">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between gap-2">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              className="w-3/4 border border-black"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-row justify-between gap-2">
            <label htmlFor="user-id">User-Id</label>
            <input
              id="user-id"
              className="w-3/4 border border-black"
              type="text"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
            />
          </div>
          <div className="flex flex-row justify-center">
            <button
              className="bg-[#4C3575] text-xl py-1 px-4 rounded-lg align-middle text-white"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(CreateAlbum);
