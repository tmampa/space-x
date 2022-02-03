import { listRockets } from "../rocketsActions/rocketsActions";

const fetchRockets = () => async (dispatch) => {
	try {
		const apiRocketsResponse = await fetch(
			"https://api.spacexdata.com/v3/rockets"
		);
		const apiRockets = await apiRocketsResponse.json();
		dispatch(
			listRockets(
				apiRockets.map((rocket) => ({
					rocketId: rocket.rocket_id,
					rocketName: rocket.rocket_name,
					rocketDescription: rocket.description,
					rocketImages: rocket.flickr_images,
					rocketReserved: false,
				}))
			)
		);
	} catch (error) {
		throw new Error(error);
	}
};

export default fetchRockets;
