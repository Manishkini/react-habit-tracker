import React from 'react';
import Album from './album';
import { connect } from 'react-redux';

function Albums({ albums, dispatch }) {
  //   console.log('albums', albums);
  return (
    <div className="grid grid-cols-3 gap-4">
      {albums && albums.length
        ? albums.map((album, index) => (
            <Album key={index} album={album} dispatch={dispatch} />
          ))
        : null}
    </div>
  );
}

const mapStateToProps = ({ albums }) => {
  return {
    albums,
  };
};

export default connect(mapStateToProps)(Albums);
