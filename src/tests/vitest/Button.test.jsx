import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CustomButton from '../../components/Button';

describe('Testing Button component via vitest', () => {
  it('increments counter on click', () => {
    render(<CustomButton />);

    const btn = screen.getByText('Plus');
    expect(screen.getByText(/Counter: 0/)).toBeInTheDocument();

    fireEvent.click(btn);
    expect(screen.getByText(/Counter: 1/)).toBeInTheDocument();
  });
});
