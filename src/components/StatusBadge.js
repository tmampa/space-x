import React from 'react';
import PropTypes from 'prop-types';

const StatusBadge = (props) => {
  const {
    active,
    label,
    fs,
    activeBgCol,
    inactiveBgCol,
    activeLableCol,
    inactiveLableCol,
    padding,
    radius,
  } = props;

  const badgeGeneralStyle = {
    fontSize: fs,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    padding,
    borderRadius: radius,
  };

  const badgeActiveStyle = {
    fontWeight: 'normal',
    textTransform: 'none',
    color: activeLableCol,
    backgroundColor: activeBgCol,
  };

  const badgeInactiveStyle = {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: inactiveLableCol,
    backgroundColor: inactiveBgCol,
  };

  return (
    <p
      style={
				active
				  ? { ...badgeGeneralStyle, ...badgeActiveStyle }
				  : { ...badgeGeneralStyle, ...badgeInactiveStyle }
			}
    >
      {label}
    </p>
  );
};

StatusBadge.propTypes = {
  active: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  fs: PropTypes.string,
  activeBgCol: PropTypes.string,
  inactiveBgCol: PropTypes.string,
  activeLableCol: PropTypes.string,
  inactiveLableCol: PropTypes.string,
  padding: PropTypes.string,
  radius: PropTypes.string,
};

StatusBadge.defaultProps = {
  fs: '1rem',
  activeBgCol: 'hsl(185deg 100% 25%)',
  inactiveBgCol: 'hsl(0deg 0% 40%)',
  activeLableCol: 'hsl(0deg 0% 99%)',
  inactiveLableCol: 'hsl(0deg 0% 99%)',
  padding: '0.125rem 0.375rem',
  radius: '0.5rem',
};

export default StatusBadge;
