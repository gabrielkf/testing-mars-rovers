import React from 'react';
import CounterAsync from './Counter.async';
import { render, fireEvent, wait } from '@testing-library/react';

describe('Async Counter', () => {
  it('should start at zero', () => {
    const { queryByText } = render(<CounterAsync />);
    const paragraph = queryByText(/###/);
    expect(paragraph).toBeTruthy();
    expect(paragraph.textContent).toBe('### 0 ###');
  });

  it('should increment on click', async () => {
    const { queryByText } = render(<CounterAsync />);
    const paragraph = queryByText(/###/);

    fireEvent.click(paragraph);
    await wait(() => {
      expect(paragraph.textContent).toBe('### 1 ###');
    });

    fireEvent.click(paragraph);
    await wait(() => {
      expect(paragraph.textContent).toBe('### 2 ###');
    });
  });
});
