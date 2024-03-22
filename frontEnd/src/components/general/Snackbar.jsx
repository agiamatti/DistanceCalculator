import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BiNoEntry } from 'react-icons/bi';
import { IoIosClose } from 'react-icons/io';
import '../../styles/Snackbar.scss';
import { iconSize } from '../../../constants';

function Snackbar({ title, error }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(error);
    setOpen(true);
  }, [error]);

  if (!open) return null;

  return (
    <div
      className='snackbar-message'
    >
      <div className='snackbar-icon'>
        <BiNoEntry size={iconSize} />
      </div>
      <div className='snackbar-textbox'>
        <div className='snackbar-title'>{title}</div>
        <div className='snackbar-text'>{message}</div>
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
  error: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,

};

export default Snackbar;
