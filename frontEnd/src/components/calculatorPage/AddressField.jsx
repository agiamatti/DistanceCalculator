import React from 'react';
import PropTypes from 'prop-types';

function AddressField({ title, placeholderMessage, onChange }) {
  return (
    <div className='address-field'>
      <label
        className='label-item'
        htmlFor={`address-input-${title}`}
      >
        {title}
      </label>
      <input
        className='address-textfield'
        id={`address-input-${title}`}
        type='text'
        placeholder={placeholderMessage}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

AddressField.propTypes = {
  title: PropTypes.string.isRequired,
  placeholderMessage: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

AddressField.defaultProps = {
  placeholderMessage: 'Input Address',
};

export default AddressField;
