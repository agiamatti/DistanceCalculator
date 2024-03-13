import PropTypes from 'prop-types';

function CalculateDistanceBtn({ buttonClick }) {
  return (
    <div className='pageBtn' onClick={buttonClick}
      style={{ backgroundColor: 'black', color: 'white' }}>
      <p>Calculate Distance</p>
    </div>
  );
}

CalculateDistanceBtn.propTypes = {
  buttonClick: PropTypes.func.isRequired,
  kmString: PropTypes.string,
};


CalculateDistanceBtn.defaultProps = {
  kmString: '',
};

export default CalculateDistanceBtn;
