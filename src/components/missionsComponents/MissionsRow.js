import React from 'react';
import PropTypes from 'prop-types';

const MissionsRow = (props) => {
  const {
    missionId, missionName, missionDescription, missionReserved,
  } = props;

  return (
    <tr key={missionId}>
      <th>
        {missionName}
      </th>
      <td>
        {missionDescription}
      </td>
      <td>
        <p className={missionReserved ? 'badge active-badge' : 'badge'}>
          {missionReserved ? 'Active Member' : 'Not a member'}
        </p>
      </td>
      <td>
        <p className={missionReserved ? 'leave-btn' : 'join-btn'}>
          {missionReserved ? 'Leave Mission' : 'Join Mission'}
        </p>
      </td>
    </tr>
  );
};

MissionsRow.propTypes = {
  missionId: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  missionDescription: PropTypes.string.isRequired,
  missionReserved: PropTypes.bool.isRequired,
};

export default MissionsRow;
