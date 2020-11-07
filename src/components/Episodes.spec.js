import React from "react";
import { render, screen } from "@testing-library/react";
import Episodes from "./Episodes";

// const season1 =
test("renders Episodes from API", () => {
	const { queryByAltText, rerender } = render(<Episodes episodes={[]} />);
	expect(queryByAltText(/Chapter One: The Vanishing of Will Byers/i)).toBeNull();
	// rerender(<Episodes episodes={ } />);
});