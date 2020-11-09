import React from 'react';
import { render, wait } from '@testing-library/react';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import App from './App';
import { userEvent } from '@testing-library/user-event';

const episodesList = {}