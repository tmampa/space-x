import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from '../../src/redux/configureStore';
import MyProfile from "../../src/pages/MyProfile";

describe("Navigation Links Tests", () => {
	test("Check if Component Renders in DOM", () => {
		render(
			<Provider store={store}>
				<MyProfile />
			</Provider>
		);
		expect(screen.queryByText(/Missions/)).toBeTruthy();
	});
	it("renders correctly", () => {
		const tree = renderer
			.create(
				<Provider store={store}>
					<MyProfile />
				</Provider>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});