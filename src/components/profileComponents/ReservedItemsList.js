import React from 'react';
import PropTypes from 'prop-types';
import './reservedItemsList.css';

const ReservedItemsList = (props) => {
  const { reservedItems, listTitle } = props;

  return (
    <figure>
      <figcaption>{listTitle}</figcaption>
      <ul className="active-list">
        {
          reservedItems.map((item) => (
            <li key={item.itemId}>{item.itemName}</li>
          ))
        }
      </ul>
    </figure>
  );
};

ReservedItemsList.propTypes = {
  listTitle: PropTypes.string.isRequired,
  reservedItems: PropTypes.arrayOf(
    PropTypes.shape({
      itemId: PropTypes.string.isRequired,
      itemName: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReservedItemsList;
