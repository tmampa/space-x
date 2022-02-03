import React from 'react';
import { useSelector } from 'react-redux';
import ReservedItemsList from '../components/profileComponents/ReservedItemsList';

const MyProfile = () => {
  const missionsList = useSelector((state) => state.missionsReducer);
  const filteredMissions = missionsList.filter((mission) => mission.missionReserved);

  return (
    <div className="profile-page-container">
      <ReservedItemsList
        listTitle="My Missions"
        reservedItems={filteredMissions.map((mission) => ({
          itemId: mission.missionId,
          itemName: mission.missionName,
        }))}
      />
      <p>Reserved Rockets List here</p>
    </div>
  );
};

export default MyProfile;
