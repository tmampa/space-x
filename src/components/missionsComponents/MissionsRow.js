import React from "react";
import PropTypes from 'prop-types';


const MissionsRow = (props) => {
  const { mission_id, mission_name, mission_description, mission_reserved } = props;

  return (
    <div>
      <div>Mission ID: {mission_id} </div>
      <div>Mission Name: {mission_name} </div>
      <div>Mission Description: {mission_description} </div>
      <div>Mission Reserved: {mission_reserved ? 'reserved' : 'not reserved'} </div>
    </div>
  );
};

MissionsRow.propTypes = {
  mission_id: PropTypes.string.isRequired,
  mission_name: PropTypes.string.isRequired,
  mission_description: PropTypes.string.isRequired,
  mission_reserved: PropTypes.bool.isRequired,
};

export default MissionsRow;
