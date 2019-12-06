import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App render', () => {
  render(<App />);
});

test("strikes and balls are rendered", () => {
  const {getByTestId} = render(<App />);
  getByTestId(/balls-number/i);
  getByTestId(/strikes-number/i);
})