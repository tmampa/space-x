import React from 'react';
import PropTypes from 'prop-types';
import StatusBadge from '../StatusBadge';
import InteractiveButton from '../InteractionButton';

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
        <StatusBadge
          active={missionReserved}
          label={missionReserved ? 'Active Member' : 'Not a member'}
        />
      </td>
      <td>
        <InteractiveButton
          label={missionReserved ? 'Leave Mission' : 'Join Mission'}
          lableCol={missionReserved ? 'hsl(0deg 65% 45%)' : 'hsl(0deg 0% 40%)'}
          borderCol={missionReserved ? 'hsl(0deg 65% 45%)' : 'hsl(0deg 0% 40%)'}
        />
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
