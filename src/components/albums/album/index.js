import React, { useState } from 'react';
import { updateAlbum, deleteAlbum } from '../../../redux/reducers';
import { toast } from 'react-toastify';

function Album({ album: { id, title, userId }, dispatch }) {
  const [isEdit, setIsEdit] = useState(false);
  const [customTitle, setCustomTitle] = useState(title || '');

  const handleSubmit = async () => {
    await toast.promise(
      fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id,
          title: customTitle,
          userId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json())
        .then((res) => {
          dispatch(updateAlbum(res));
          setIsEdit(false);
        })
        .catch((err) => console.log(err)),
      {
        pending: 'Updating the album...',
        success: 'Album updated successfully! 👌',
        error: 'Something went wrong 🤯',
      }
    );
  };

  const handleDelete = async () => {
    await toast.promise(
      fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((res) => {
          dispatch(deleteAlbum(id));
        })
        .catch((err) => console.log(err)),
      {
        pending: 'Deleting the album...',
        success: 'Album deleted successfully! 👌',
        error: 'Something went wrong 🤯',
      }
    );
  };

  return (
    <div>
      {isEdit ? (
        <div className="flex flex-col gap-1 h-48 bg-[#5B4B8A] justify-between py-3 rounded-sm text-white">
          <div className="flex flex-row gap-1 grow">
            <label className="w-1/5 text-center" htmlFor="title">
              Title
            </label>
            <textarea
              className="text-black w-4/5 mr-5"
              type="text"
              value={customTitle}
              onChange={(e) => setCustomTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-row justify-center gap-8 h-8">
            <button
              className="bg-[#4C3575] p-1 rounded-lg"
              onClick={() => setIsEdit(false)}
            >
              Cancle
            </button>
            <button
              className="bg-[#4C3575] p-1 rounded-lg"
              onClick={() => handleSubmit()}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-row gap-4 bg-[#5B4B8A] rounded-sm text-white">
          <div className="flex flex-col h-48 gap-8 justify-center flex-grow pl-5">
            <strong>{`Id: ${id}`}</strong>
            <strong>{`Title: ${title}`}</strong>
            <strong>{`User-id: ${userId}`}</strong>
          </div>
          <div className="flex flex-col w-1/6 justify-center items-center p-1 gap-8">
            {/* <button className="text-[#4C3575]"> */}
            <img
              className="text-[#4C3575] cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/1827/1827933.png"
              width={20}
              onClick={() => setIsEdit(true)}
            />
            {/* </button>
        <button className="text-[#4C3575]"> */}
            <img
              className="text-[#4C3575] cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/3096/3096687.png"
              width={25}
              onClick={() => handleDelete()}
            />
            {/* </button> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Album;
