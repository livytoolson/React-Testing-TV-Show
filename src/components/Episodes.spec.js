import React from "react";
import { render, screen } from "@testing-library/react";
import Episodes from "./Episodes";

const episodesArr = [
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
];

test("renders without errors", () => {
	render(<Episodes episodes={[]} />);
});

test("rerenders without errors when props change", () => {
	const { rerender } = render(<Episodes episodes={[]} />);
	rerender(<Episodes episodes={episodesArr} />)

})

test("renders Episodes from API", () => {
	render(<Episodes episodes={episodesArr} />);

	const episodes = screen.getAllByTestId("episode");
	const image1 = screen.getByAltText(/Episode 1/i)
	const image2 = screen.getByAltText(/Episode 2/i);
	const header1 = screen.getByText(/Season 1, Episode 1/i);
	const header2 = screen.getByText(/Season 1, Episode 2/i);
	const title1 = screen.getByRole("heading", { name: /Episode 1/i });
	const title2 = screen.getByRole("heading", { name: /Episode 2/i });
	const summary1 = screen.getByText(/Ep_Summary_1/i);
	const summary2 = screen.getByText(/Ep_Summary_2/i);
	const runtime1 = screen.getByText(/1 minutes/i);
	const runtime2 = screen.getByText(/2 minutes/i);

	expect(episodes.length).toBe(2);
	expect(image1).toBeInTheDocument();
	expect(image2).toBeInTheDocument();
	expect(header1).toBeInTheDocument();
	expect(header2).toBeInTheDocument();
	expect(title1).toBeInTheDocument();
	expect(title2).toBeInTheDocument();
	expect(summary1).toBeInTheDocument();
	expect(summary2).toBeInTheDocument();
	expect(runtime1).toBeInTheDocument();
	expect(runtime2).toBeInTheDocument();
});