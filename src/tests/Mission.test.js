import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../src/redux/configureStore";
import MissionsTable from "../../src/components/missionsComponents/MissionsTable";

describe("Mission Element Tests", () => {
	test("Check if Component Renders in DOM", () => {
		render(
			<Provider store={store}>
				<MissionsTable />
			</Provider>
		);
		expect(screen.queryByText(/Rocket/)).toBeNull();
		expect(screen.queryByText(/Mission/)).toBeTruthy();
	});
	it("renders correctly", () => {
		const tree = renderer
			.create(
				<Provider store={store}>
					<MissionsTable />
				</Provider>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
