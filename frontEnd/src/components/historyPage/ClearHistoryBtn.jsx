import React from 'react';
import PropTypes from 'prop-types';
import { CiTrash } from 'react-icons/ci';
import { apiQueriesKey } from '../../utils/constants';
import { deleteLocalStorageItem } from '../../utils';

function ClearHistoryBtn({ updatePage }) {
  const handleClick = () => {
    deleteLocalStorageItem(apiQueriesKey);
    updatePage((count) => count + 1);
  };
  return (
    <div
      className='clear-history-btn'
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
      role='button'
      tabIndex={0}
    >
      <div className='inner-btn'>
        <span className='button-text'>
          Clear history
        </span>
        <span className='button-icon'>
          <CiTrash size={30} />
        </span>
      </div>
    </div>
  );
}

ClearHistoryBtn.propTypes = {
  updatePage: PropTypes.func.isRequired,
};

export default ClearHistoryBtn;
