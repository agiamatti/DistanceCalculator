import React from 'react';
import PropTypes from 'prop-types';

function RadioButtonSelector({
  label, options, selectedOption, onOptionChange,
}) {
  return (
    <div>
      <p className='label-item'>{label}</p>
      {options.map((option, index) => (
        <div className='radio-group' key={option}>
          <input
            className='radio-input'
            type='radio'
            id={`option-${index}`}
            name='radio-selector'
            value={option}
            checked={selectedOption === option}
            onChange={() => onOptionChange(option)}
          />
          <label
            className='label-item radio-label'
            htmlFor={`option-${index}`}
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  );
}

RadioButtonSelector.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.string.isRequired,
  onOptionChange: PropTypes.func.isRequired,
};

export default RadioButtonSelector;
