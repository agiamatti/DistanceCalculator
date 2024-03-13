import PropTypes from 'prop-types';

function AddressField({ title, placeholderMessage, onChange }) {

  return (
    <div className='label-item'>
      <label>{title}</label>
      <input
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
