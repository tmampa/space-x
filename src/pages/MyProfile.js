import React from 'react';
import { useSelector } from 'react-redux';
import ReservedItemsList from '../components/profileComponents/ReservedItemsList';

const MyProfile = () => {
  const missionsList = useSelector((state) => state.missionsReducer);
  const filteredMissions = missionsList.filter((mission) => mission.missionReserved);
  const unjoinedMissions = missionsList.filter((mission) => !mission.missionReserved);

  return (
    <div className="profile-page-container">
      <ReservedItemsList
        listTitle="My Missions"
        reservedItems={filteredMissions.map((mission) => ({
          itemId: mission.missionId,
          itemName: mission.missionName,
        }))}
      />
      {/* <p>Reserved Rockets List here</p> */}
      <ReservedItemsList
        listTitle="Not joined Missions"
        reservedItems={unjoinedMissions.map((mission) => ({
          itemId: mission.missionId,
          itemName: mission.missionName,
        }))}
      />
    </div>
  );
};

export default MyProfile;
