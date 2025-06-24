import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CustomButton from '@components/Button';

describe('Testing Button component', () => {
  it('Click on button', async () => {
    const { container } = render(<CustomButton />);

    const button = screen.getByText('Plus');
    const counter = container.querySelector('p');

    expect(counter.textContent).toBe('Counter: 0');

    fireEvent.click(button);

    expect(counter.textContent).toBe('Counter: 1');
  });

  it('Matches snapshot', () => {
    const { container } = render(<CustomButton />);

    expect(container).toMatchSnapshot();
  });

  it('Sending prop day to compononent', async () => {
    const { container } = render(<CustomButton day={'01.01.2025'} />);
    const currentDay = container.querySelector('span');

    expect(currentDay.textContent).toBe('Current day: 01.01.2025');
  });
});
