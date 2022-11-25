import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

describe('Navbar', () => {
  test('render navbar correctly', () => {
    const navbar = render(
      <React.StrictMode>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </React.StrictMode>,
    );
    expect(navbar).toMatchSnapshot();
  });
});
