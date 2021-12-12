import React from 'react';
import { render, wait } from '@testing-library/react';
import RandomImage from './RandomImage';

describe('RandomImage', () => {
  describe('integration tests', () => {
    it('should render an image from a url', async () => {
      const { getByAltText } = render(<RandomImage />);

      await wait(() => {
        const image = getByAltText('mars rover');
        expect(image).toBeTruthy();
      });
    });
  });
});
