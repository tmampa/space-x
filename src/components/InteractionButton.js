import React from 'react';
import PropTypes from 'prop-types';

const InteractiveButton = (props) => {
  const {
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
    <div>
      <p style={buttonGeneralStyle}>
        {label}
      </p>
    </div>
  );
};

InteractiveButton.propTypes = {
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
