import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Secure VPN brand', () => {
  render(<App />);
  const brandElement = screen.getByText(/Secure VPN/i);
  expect(brandElement).toBeInTheDocument();
});
