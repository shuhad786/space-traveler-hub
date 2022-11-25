import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rockets from '../components/Rockets';

describe('Missions page', () => {
  test('render all missions', () => {
    const mission = render (
        <Provider store={store}>
          <Rockets />
        </Provider>
    );
    expect(mission).toMatchSnapshot();
  });
});