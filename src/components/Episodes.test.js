import React from 'react';
import { render, screen } from '@testing-library/react';
import Episodes from './Episodes';

const episodes = [
    {
      id: 553946,
      url: 'http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers',
      name: 'Chapter One: The Vanishing of Will Byers',
      season: 1,
      number: 1,
      type: 'regular',
      airdate: '2016-07-15',
      airtime: '',
      airstamp: '2016-07-15T12:00:00+00:00',
      runtime: 1,
      image: {
        medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg',
        original: 'http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg'
      },
      summary: 'summary',
      _links: {
        self: {
          href: 'http://api.tvmaze.com/episodes/553946'
        }
      }
    },
    {
      id: 909340,
      url: 'http://www.tvmaze.com/episodes/909340/stranger-things-2x01-chapter-one-madmax',
      name: 'Chapter One: MADMAX',
      season: 2,
      number: 1,
      type: 'regular',
      airdate: '2017-10-27',
      airtime: '',
      airstamp: '2017-10-27T12:00:00+00:00',
      runtime: 60,
      image: {
        medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/132/331976.jpg',
        original: 'http://static.tvmaze.com/uploads/images/original_untouched/132/331976.jpg'
      },
      summary: '<p>One year after the events with the Upside Down and the Demogorgon, Will meets with a government doctor. The boys discover that there\'s a new player in town, and Jim pays a visit to El.</p>',
      _links: {
        self: {
          href: 'http://api.tvmaze.com/episodes/909340'
        }
      }
    }
  ]

  test('Epsiodes renders without errors', () => {
      render(<Episodes episodes={[]}/>);
  });

  test('rerenders without errors when props are changed', () => {
      const { rerender } = render(<Episodes episodes={[]} />);
      rerender(<Episodes episodes={episodes} />);
  });

  test('renders data from API', () => {
      render(<Episodes episodes={episodes}/>)

      const episode = screen.getAllByTestId(/episode/i);
      const header = screen.getByText(/season 1, episode 1/i);
      const title = screen.getByText(/chapter one: the vanishing of will byers/i);
      const summary = screen.getByText(/summary/i);
      const runTime = screen.getByText(/1 minutes/i);

      expect(episodes.length).toBe(2);
      expect(header).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(summary).toBeInTheDocument();
      expect(runTime).toBeInTheDocument();
  });