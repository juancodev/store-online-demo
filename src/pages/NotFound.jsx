import React from 'react'
import notFoundImage from 'errors/error404-notfound.jpg';
import '../styles/NotFound.scss';

const NotFound = () => {
  return (
    <div className='divImage'>
      <img className='notFoundImage' src={notFoundImage} alt="Not Found" />
    </div>
  );
}

export { NotFound };