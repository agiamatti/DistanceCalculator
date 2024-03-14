import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { kmToMiles, roundToTwoDecimals } from '../../utils';

function DistanceBox({ distance, selectedOption }) {
  const [milesString, setMilesString] = useState('');
  const [kmString, setKmString] = useState('');

  useEffect(() => {
    if (distance) {
      if (selectedOption === 'Kilometers') {
        setKmString(roundToTwoDecimals(distance));
        setMilesString('');
      } else if (selectedOption === 'Miles') {
        setMilesString(roundToTwoDecimals(kmToMiles(distance)));
        setKmString('');
      } else {
        setKmString(roundToTwoDecimals(distance));
        setMilesString(roundToTwoDecimals(kmToMiles(distance)));
      }
    }
  }, [distance, selectedOption]);

  return (
    <div className='distance-result-box'>
      <p className='label-item'>Distance</p>
      <p className='distance-result'>
        {milesString !== '' ? `${milesString} mi` : ''}
      </p>
      <p className='distance-result'>
        {kmString !== '' ? `${kmString} km` : ''}
      </p>
    </div>
  );
}

DistanceBox.propTypes = {
  distance: PropTypes.number,
  selectedOption: PropTypes.string,
};

DistanceBox.defaultProps = {
  distance: null,
  selectedOption: '',
};

export default DistanceBox;
