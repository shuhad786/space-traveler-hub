import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Profiles from '../components/Profiles';
import '@testing-library/jest-dom';

describe('To check if the missions and rockets display in my profile', () => {
  test('Display My Missions in Profile', () => {
    render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Profiles />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    expect(screen.getByText('My Missions')).toBeInTheDocument();
  });
  test('Display My Rockets in Profile', () => {
    render(
        <Provider store={store}>
          <Profiles />
        </Provider>
    );
    expect(screen.getByText('My Rockets')).toBeInTheDocument();
  });
});