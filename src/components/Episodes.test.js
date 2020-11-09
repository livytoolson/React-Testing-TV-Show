import React from 'react';
import { getAllByTestId, render, rerender, screen } from '@testing-library/react';
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
      runtime: 60,
      image: {
        medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg',
        original: 'http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg'
      },
      summary: '<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy\'s friends conduct their own search, and meet a mysterious girl in the forest.</p>',
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
    },
    {
      id: 1576469,
      url: 'http://www.tvmaze.com/episodes/1576469/stranger-things-3x01-chapter-one-suzie-do-you-copy',
      name: 'Chapter One: Suzie, Do You Copy?',
      season: 3,
      number: 1,
      type: 'regular',
      airdate: '2019-07-04',
      airtime: '',
      airstamp: '2019-07-04T12:00:00+00:00',
      runtime: 51,
      image: {
        medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/204/510098.jpg',
        original: 'http://static.tvmaze.com/uploads/images/original_untouched/204/510098.jpg'
      },
      summary: '<p>Things change over the summer: Jonathan, Nancy, Steve, and Billy get jobs; Dustin goes to science camp; El and Mike become an item; Lucas and Max almost become an item. Meanwhile, mysterious power outages plague Hawkins and rats start exploding.</p>',
      _links: {
        self: {
          href: 'http://api.tvmaze.com/episodes/1576469'
        }
      }
    },
    {
      id: 1752754,
      url: 'http://www.tvmaze.com/episodes/1752754/stranger-things-4x01-chapter-one-the-hellfire-club',
      name: 'Chapter One: The Hellfire Club',
      season: 4,
      number: 1,
      type: 'regular',
      airdate: '',
      airtime: '',
      airstamp: null,
      runtime: 60,
      image: null,
      summary: null,
      _links: {
        self: {
          href: 'http://api.tvmaze.com/episodes/1752754'
        }
      }
    }
  ]

  test('', () => {
      
  })
// test('rerenders correctly with list of episodes displayed', () => {
//   // arrange - render the component and set up mock data
//   render(<Episodes episodes={[]}/>)

//   // act - rerender the component with episodes data passed in
//   rerender(<Episodes episodes={episodes} />)
//   const episodes = getAllByTestId(/episodes/i)

//   // assert 
//   expect(episodes).toHaveLength(4);
// });