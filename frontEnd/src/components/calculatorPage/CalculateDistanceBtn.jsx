import React from 'react';
import PropTypes from 'prop-types';
import { CiCalculator1 } from 'react-icons/ci';

function CalculateDistanceBtn({ buttonClick, active }) {
  return (
    <div
      className={active ? 'calculate-distance-btn' : 'calculate-distance-btn disabled-btn'}
      onClick={active ? buttonClick : null}
      onKeyDown={(e) => {
        if (active) {
          if (e.key === 'Enter' || e.key === ' ') {
            buttonClick();
          }
        }
      }}
      role='button'
      tabIndex={0}
      aria-disabled={!active}
    >
      <div className='inner-btn'>
        <span className='button-text'>Calculate Distance</span>
        <span className='button-icon'><CiCalculator1 size={30} /></span>
      </div>
    </div>
  );
}

CalculateDistanceBtn.propTypes = {
  buttonClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default CalculateDistanceBtn;
