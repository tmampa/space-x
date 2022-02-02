import React from 'react';
import PropTypes from 'prop-types';

const InteractiveButton = (props) => {
  const {
    handleClick,
    label,
    fs,
    bgCol,
    lableCol,
    borderCol,
    padding,
    radius,
  } = props;

  const buttonGeneralStyle = {
    cursor: 'pointer',
    fontSize: fs,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    padding,
    color: lableCol,
    backgroundColor: bgCol,
    border: `1px solid ${borderCol}`,
    borderRadius: radius,
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      style={buttonGeneralStyle}
    >
      {label}
    </button>
  );
};

InteractiveButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  fs: PropTypes.string,
  padding: PropTypes.string,
  bgCol: PropTypes.string,
  lableCol: PropTypes.string,
  borderCol: PropTypes.string,
  radius: PropTypes.string,
};

InteractiveButton.defaultProps = {
  fs: '1.175rem',
  padding: '0.35rem',
  lableCol: 'hsl(0deg 0% 40%)',
  bgCol: 'transparent',
  borderCol: 'hsl(0deg 0% 40%)',
  radius: '0.25rem',
};

export default InteractiveButton;
