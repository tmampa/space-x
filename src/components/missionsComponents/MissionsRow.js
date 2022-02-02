import React from "react";
import PropTypes from 'prop-types';


const MissionsRow = (props) => {
  const { mission_id, mission_name, mission_description, mission_reserved } = props;

  return (
    <tr key={mission_id}>
      <th>{mission_name} </th>
      <td>{mission_description} </td>
      <td>
        <p className={mission_reserved ? "badge active-badge" : "badge"}>
          {mission_reserved ? 'Active Member' : 'Not a member'}
        </p>
      </td>
      <td>
        <p className={mission_reserved ? "leave-btn" : "join-btn"}>
          {mission_reserved ? 'Leave Mission' : 'Join Mission'}
        </p>
      </td>
    </tr >
  );
};

MissionsRow.propTypes = {
  mission_id: PropTypes.string.isRequired,
  mission_name: PropTypes.string.isRequired,
  mission_description: PropTypes.string.isRequired,
  mission_reserved: PropTypes.bool.isRequired,
};

export default MissionsRow;
