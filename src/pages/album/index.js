import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllAlbums } from '../../redux/reducers';
import Albums from '../../components/albums';
import CreateAlbum from '../../components/albums/album/create-album';

function Album({ dispatch }) {
  const [isAdd, setIsAdd] = useState(false);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((res) => res.json())
      .then((res) => {
        dispatch(getAllAlbums(res));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full h-full bg-slate-200">
      <div className="w-3/4 mx-auto">
        <div className="flex flex-col h-full">
          <div className="w-full h-auto min-h-[5rem]">
            <div className="w-full mx-auto text-center mt-5">
              {/* <Link to={'/album/create'} className=""> */}
              <button
                className="bg-[#4C3575] text-xl py-1 px-4 rounded-lg align-middle text-white"
                onClick={() => setIsAdd(!isAdd)}
              >
                Add Album
              </button>
              {isAdd ? <CreateAlbum /> : null}
              {/* </Link> */}
            </div>
          </div>
          <div className="w-full h-full grow mb-10">
            <Albums />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(Album);
