import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";


test("renders episodes from API", () => {
	const { getByLabelText, queryByPlaceholderText, getByDisplayValue, queryByAltText, getByText, getByRole, queryByRole, queryByText, getAllByTestId, rerender } = render(<App />);
	expect(queryByAltText(/Chapter One: The Vanishing of Will Byers/i)).toBeNull();
	// rerender(<App />);
});