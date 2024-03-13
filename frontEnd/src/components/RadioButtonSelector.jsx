import PropTypes from 'prop-types';

function RadioButtonSelector({ options, selectedOption, onOptionChange }) {
  return (
    <div>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type='radio'
            id={`option-${index}`}
            name='radio-selector'
            value={option}
            checked={selectedOption === option}
            onChange={() => onOptionChange(option)}
          />
          <label
            className='label-item'
            htmlFor={`option-${index}`}
          >
            {option}
          </label>
        </div>
      ))}
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
}

RadioButtonSelector.propTypes = {
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.string.isRequired,
  onOptionChange: PropTypes.func.isRequired,
};

export default RadioButtonSelector;
