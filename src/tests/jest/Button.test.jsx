import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomButton from '../../components/Button';

describe('Testing Button component', () => {
  test('Click on button', async () => {
    const { container } = render(<CustomButton />);

    const button = screen.getByText('Plus');
    const counter = container.querySelector('p');

    expect(counter.textContent).toBe('Counter: 0');

    fireEvent.click(button);

    expect(counter.textContent).toBe('Counter: 1');
  });

  test('Matches snapshot', () => {
    const { container } = render(<CustomButton />);

    expect(container).toMatchSnapshot();
  });

  test('Sending prop day to compononent', async () => {
    const { container } = render(<CustomButton day={'01.01.2025'} />);
    const currentDay = container.querySelector('span');

    expect(currentDay.textContent).toBe('Current day: 01.01.2025');
  });
});
