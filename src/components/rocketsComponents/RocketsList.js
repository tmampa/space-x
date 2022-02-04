import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRockets from '../../redux/rockets/rocketsThunks/rocketsThunks';
import RocketItem from './RocketItem';

const RocketsList = () => {
  const dispatch = useDispatch();
  const rocketsList = useSelector((state) => state.rocketsReducer);

  useEffect(() => {
    if (rocketsList.length < 1) {
      dispatch(fetchRockets());
    }
  });

  return (
    <ul>
      {rocketsList.map((rocket) => (
        <RocketItem
          key={rocket.rocketId}
          rocketId={rocket.rocketId}
          rocketName={rocket.rocketName}
          rocketDescription={rocket.rocketDescription}
          rocketImageLink={rocket.rocketImages[0]}
          rocketReserved={rocket.rocketReserved}
        />
      ))}
    </ul>
  );
};

export default RocketsList;
