/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Table.scss';

function Table({ header, data }) {
  // TODO: add pagination for table
  return (
    <table className='table'>
      <thead className='table-head'>
        <tr>
          {header.map((item) => (
            <th key={item.key}>{item.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rIndex) => (
          <tr key={rIndex}>
            {header.map((item, index) => (
              <td key={index}>{row[item.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
Table.propTypes = {
  header: PropTypes.arrayOf(PropTypes.shape).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Table;
