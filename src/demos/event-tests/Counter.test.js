import React from 'react';
import Counter from './Counter';
import { render, fireEvent } from '@testing-library/react';

describe('Counter', () => {
  it('should start at zero', () => {
    const { queryByText } = render(<Counter />);
    const paragraph = queryByText(/###/);
    expect(paragraph).toBeTruthy();
    expect(paragraph.textContent).toBe('### 0 ###');
  });

  it('should increment on click', () => {
    const { queryByText } = render(<Counter />);
    const paragraph = queryByText(/###/);

    fireEvent.click(paragraph);
    expect(paragraph.textContent).toBe('### 1 ###');

    fireEvent.click(paragraph);
    expect(paragraph.textContent).toBe('### 2 ###');
  });
});
