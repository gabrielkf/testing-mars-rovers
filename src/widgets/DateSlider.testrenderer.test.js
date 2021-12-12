import React from 'react';
import TestRenderer from 'react-test-renderer';
import DateSlider from './DateSlider';
import { solToDate } from '../services/sols';

describe('DateSlider', () => {
  describe('change with renderer', () => {
    it('should publish the selected date', () => {
      const fn = jest.fn();

      const tr = TestRenderer.create(
        <DateSlider earth_date="2015-6-3" onDateChanged={fn} />
      );

      const input = tr.root.findByProps({
        'data-testid': 'date-slider',
      });

      //* Calls event function
      TestRenderer.act(() => {
        input.props.onChange({ target: { value: '3877' } });
      });

      expect(fn.mock.calls).toEqual([[solToDate(3877)]]);
    });
  });
});
