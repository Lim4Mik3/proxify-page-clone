import { render } from "@testing-library/react";
import { HomePage } from "./home-page";

describe("Home | PAGE SUITE TEST", () => {
	it("should be able render", () => {
		const wrapper = render(<HomePage />);

		expect(wrapper.getByText(/Home Page Screen!/i)).toBeInTheDocument();
	});
});
