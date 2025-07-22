import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SurfShark brand', () => {
  render(<App />);
  const brandElement = screen.getByText(/SurfShark/i);
  expect(brandElement).toBeInTheDocument();
});
