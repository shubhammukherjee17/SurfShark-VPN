import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Secure VPN brand', () => {
  render(<App />);
  const matches = screen.getAllByText(/Secure VPN/i);
  expect(matches.length).toBeGreaterThan(0);
});
