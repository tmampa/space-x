import React from 'react';
import PropTypes from 'prop-types';

const JoinedMissionsList = (props) => {
  const { joinedMissions } = props;

  return (
    <figure>
      <figcaption>My Missions</figcaption>
      <ul>
        {
          joinedMissions.map((mission) => (
            <li key={mission.id}>{mission.missionName}</li>
          ))
        }
      </ul>
    </figure>
  );
};

JoinedMissionsList.propTypes = {
  joinedMissions: PropTypes.arrayOf(
    PropTypes.shape({
      missionId: PropTypes.string.isRequired,
      missionName: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default JoinedMissionsList;
