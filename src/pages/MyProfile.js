import React from 'react';
import { useSelector } from 'react-redux';
import ReservedItemsList from '../components/profileComponents/ReservedItemsList';

const MyProfile = () => {
  const missionsList = useSelector((state) => state.missionsReducer);
  const filteredMissions = missionsList.filter(
    (mission) => mission.missionReserved,
  );
  const rocketsList = useSelector((state) => state.rocketsReducer);
  const filteredRockets = rocketsList.filter((rocket) => rocket.rocketReserved);

  return (
    <div className="profile-page-container">
      <ReservedItemsList
        listTitle="My Missions"
        reservedItems={filteredMissions.map((mission) => ({
				  itemId: mission.missionId,
				  itemName: mission.missionName,
        }))}
      />
      <ReservedItemsList
        listTitle="My Rockets"
        reservedItems={filteredRockets.map((rocket) => ({
				  itemId: rocket.rocketId,
				  itemName: rocket.rocketName,
        }))}
      />
    </div>
  );
};

export default MyProfile;
