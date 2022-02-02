import React from 'react';
import MissionsTable from '../components/missionsComponents/MissionsTable';
import './missions.css';

const Missions = () => {
  return (
    <div className="missions-page-container">
      <MissionsTable />
    </div>
  );
};

export default Missions;
