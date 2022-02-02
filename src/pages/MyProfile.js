import React from 'react';
import { useSelector } from 'react-redux';
import JoinedMissionsList from '../components/profileComponents/JoinedMissionsList';

const MyProfile = () => {
  const missionsList = useSelector((state) => state.missionsReducer);
  const filteredMissions = missionsList.filter((mission) => mission.missionReserved);

  return (
    <div className="profile-page-container">
      <JoinedMissionsList
        joinedMissions={filteredMissions.map((mission) => ({
          missionId: mission.missionId,
          missionName: mission.missionName,
        }))}
      />
      <p>Reserved Rockets List here</p>
    </div>
  );
};

export default MyProfile;
