import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import App from "./App";
import { fetchShow as mockFetchShow } from "./api/fetchShow";

jest.mock("./api/fetchShow.js");
const data = {
	data: {
		name: "Show 1",
		summary: "Summary 1",
		image: { original: "original_image", medium: "medium_image", },
		_embedded: {
			episodes: [
				{
					id: 1,
					url: "url1",
					name: "Episode 1",
					season: 1,
					number: 1,
					summary: "Ep_Summary_1",
					runtime: 1,
					image: { medium: "ep1_med_image", }
				},
				{
					id: 2,
					url: "url2",
					name: "Episode 2",
					season: 1,
					number: 2,
					summary: "Ep_Summary_2",
					runtime: 2,
					image: { medium: "ep2_med_image", }
				}
			],
		}
	},
}

// test("renders without errors", () => {
// 	mockFetchShow.mockResolvedValueOnce(data);
// 	render(<App />);
// })

test("renders episodes from api", async () => {
	jest.resetAllMocks();
	// render(<App />);
	mockFetchShow.mockResolvedValueOnce(data);

	render(<App />);
	expect(mockFetchShow).toHaveBeenCalledTimes(1);
	const dropdown = await screen.findByText(/select a season/i);
	expect(dropdown).toBeInTheDocument();
	userEvent.click(dropdown);
	const seasonOne = await screen.findByText(/season 1/i)
	userEvent.click(seasonOne);

	await waitFor(() => {
		const episodes = screen.getAllByTestId("episode");
		expect(episodes.length).toBe(2);
	})
});