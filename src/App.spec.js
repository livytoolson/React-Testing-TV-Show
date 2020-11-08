import React from "react";
import { render, fireEvent, waitFor, wait, screen, within, getNodeText, getByText, findByText } from "@testing-library/react";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import App from "./App";

// jest.mock(mockFetchShow);
// jest.mock("./api/fetchShow.js");

// beforeEach(() => {
// const { container } = render(<App />)
// jest.resetAllMocks();
// const utils = render(<App />);
// const { getByText, findByText, fireEvent, container } = utils;1
// })

// function buildEpisode(overrides) {
// 	return {
// 		"id": 553946,
// 		"url": "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers", "name": "Chapter One: The Vanishing of Will Byers", "season": 1, "number": 1, "type": "regular", "airdate": "2016-07-15", "airtime": "", "airstamp": "2016-07-15T12:00:00+00:00", "runtime": 60, "image": { "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg", "original": "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg" }, "summary": "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
// 		"_links": { "self": { "href": "http://api.tvmaze.com/episodes/553946" } },
// 		...overrides,
// 	}
// }

test("renders episodes from API", async () => {
	const { container } = render(<App />)
	await waitFor(() => {
		expect(container.querySelector("div.Dropdown-root")).toBeInTheDocument();
	})
	// const dropdownRoot = container.querySelector("div.Dropdown-root");
	const dropdownSelector = container.querySelector("div.Dropdown-placeholder");
	userEvent.click(dropdownSelector);

	const option1 = await screen.findByRole('option', { name: /season 1/i });
	userEvent.selectOptions(option1);

	expect(container.querySelector("div.episodes")).toBeInTheDocument();
	expect(screen.getByRole('img', { name: /chapter one: the vanishing of will byers/i })).toBeInTheDocument();
	expect(screen.getByText(/season 1, episode 1/i)).toBeInTheDocument();
	expect(screen.getByText(/season 1, episode 1/i)).toHaveTextContent(/season 1, episode 1/i);
	expect(screen.getByRole('heading', { name: /chapter one: the vanishing of will byers/i })).toHaveTextContent(/chapter one: the vanishing of will byers/i);
});