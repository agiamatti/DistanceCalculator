import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BiNoEntry } from 'react-icons/bi';
import { IoIosClose } from 'react-icons/io';
import '../../styles/Snackbar.css';

function Snackbar({ title, error }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(error.message);
    setOpen(true);
  }, [error]);

  if (!open) return null;

  return (
    <div
      className='snackbar-message'
    >
      <div className='snackbar-icon'>
        <BiNoEntry size={30} />
      </div>
      <div>
        <div className='snackbar-title'>{title}</div>
        {message}
      </div>
      <div
        className='snackbar-close'
      >
        <IoIosClose
          className='snackbar-close-btn'
          onClick={() => setOpen(false)}
          size={20}
        />
      </div>
    </div>
  );
}

Snackbar.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,

};

export default Snackbar;
