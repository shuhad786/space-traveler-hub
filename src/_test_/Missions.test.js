import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../components/Missions';

describe('Missions page', () => {
  test('render all missions', () => {
    const mission = render (
        <Provider store={store}>
          <Missions />
        </Provider>
    );
    expect(mission).toMatchSnapshot();
  });
});