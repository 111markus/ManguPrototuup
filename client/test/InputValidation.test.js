import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';

test('Start button remains disabled for empty or whitespace-only name and enables for valid name', () => {
  render(<App />);
  const input = screen.getByLabelText('name-input');
  const startBtn = screen.getByLabelText('start-button');

  // initially disabled
  expect(startBtn).toBeDisabled();

  // whitespace-only should keep disabled
  fireEvent.change(input, { target: { value: '   ' } });
  expect(startBtn).toBeDisabled();

  // valid name enables button
  fireEvent.change(input, { target: { value: 'Markus' } });
  expect(startBtn).toBeEnabled();
});
