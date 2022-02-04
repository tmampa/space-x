import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setRocketReservation } from '../../redux/rockets/rocketsActions/rocketsActions';
import StatusBadge from '../StatusBadge';
import InteractiveButton from '../InteractionButton';

const RocketItem = (props) => {
  const {
    rocketId,
    rocketName,
    rocketDescription,
    rocketImageLink,
    rocketReserved,
  } = props;
  const dispatch = useDispatch();

  const handleReservation = () => {
    dispatch(setRocketReservation({ id: rocketId }));
  };

  const listItemStyle = {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '24% 74%',
    gap: '2%',
    padding: '1rem 0',
  };

  const rocketInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    fontSize: '1.25rem',
  };

  return (
    <li key={rocketId} style={listItemStyle}>
      <div>
        <img src={rocketImageLink} alt={rocketName} style={{ width: '100%' }} />
      </div>
      <div style={rocketInfoStyle}>
        <h3>{rocketName}</h3>
        <div className="rocket-desc-wrapper">
          {rocketReserved ? (
            <StatusBadge active={rocketReserved} label="Reserved" />
          ) : null}
          {rocketDescription}
        </div>
        <div>
          <InteractiveButton
            handleClick={handleReservation}
            label={rocketReserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            labelCol={rocketReserved ? 'hsl(0deg 0% 40%)' : 'hsl(0deg 0% 99%)'}
            borderCol={
							rocketReserved ? 'hsl(0deg 0% 40%)' : 'hsl(230deg 90% 60%)'
						}
            bgCol={rocketReserved ? 'transparent' : 'hsl(230deg 90% 60%)'}
          />
        </div>
      </div>
    </li>
  );
};

RocketItem.propTypes = {
  rocketId: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  rocketDescription: PropTypes.string.isRequired,
  rocketReserved: PropTypes.bool.isRequired,
  rocketImageLink: PropTypes.string.isRequired,
};

export default RocketItem;
