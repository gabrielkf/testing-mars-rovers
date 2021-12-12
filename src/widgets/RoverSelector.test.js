import React from 'react';
import TestRenderer from 'react-test-renderer';
import RoverSelector from './RoverSelector';
import { rovers } from '../pages/ConnectedRoverSearch';

describe('RoverSelections', () => {
  describe('rendering', () => {
    describe('selection', () => {
      describe('all rovers selected', () => {
        it('should select all rovers', () => {
          const all = {
            spirit: true,
            opportunity: true,
            curiosity: true,
          };

          const testRenderer = TestRenderer.create(
            <RoverSelector
              rovers={rovers}
              roversActive={all}
              roverSelection={all}
              onRoverSelection={() => {}}
            />
          );

          const inputs = testRenderer.root.findAllByProps({
            'data-testid': 'rover-selected',
          });

          inputs.forEach(input => {
            expect(input.props.checked).toBe(true);
          });
        });
      });

      describe('no rovers selected', () => {
        it('should select no rovers', () => {
          const none = {
            spirit: false,
            opportunity: false,
            curiosity: false,
          };

          const testRenderer = TestRenderer.create(
            <RoverSelector
              rovers={rovers}
              roversActive={none}
              roverSelection={none}
              onRoverSelection={() => {}}
            />
          );

          const inputs = testRenderer.root.findAllByProps({
            'data-testid': 'rover-selected',
          });

          inputs.forEach(input => {
            expect(input.props.checked).toBe(false);
          });
        });
      });
    });

    describe('activation', () => {
      const INACTIVE_STYLE_CLASS = 'RoverSelector-inactive';

      describe('all active', () => {
        it('should not have the class for inactive component', () => {
          const all = {
            spirit: true,
            opportunity: true,
            curiosity: true,
          };

          const testRenderer = TestRenderer.create(
            <RoverSelector
              rovers={rovers}
              roversActive={all}
              roverSelection={all}
              onRoverSelection={() => {}}
            />
          );

          const divs = testRenderer.root.findAll(i => {
            (i.props['data-testid'] || '').startsWith('rover-div-');
          });

          divs.forEach(div => {
            expect(div.props.className).not.toMatch(INACTIVE_STYLE_CLASS);
          });
        });
      });

      describe('all inactive', () => {
        it('should have the class for inactivity', () => {
          const none = {
            spirit: false,
            opportunity: false,
            curiosity: false,
          };

          const testRenderer = TestRenderer.create(
            <RoverSelector
              rovers={rovers}
              roversActive={none}
              roverSelection={none}
              onRoverSelection={() => {}}
            />
          );

          const divs = testRenderer.root.findAll(i => {
            (i.props['data-testid'] || '').startsWith('rover-div-');
          });

          divs.forEach(div => {
            expect(div.props.className).toMatch(INACTIVE_STYLE_CLASS);
          });
        });
      });

      describe('mixed', () => {
        it('should have only the first element with the specified class', () => {
          const mixed = {
            spirit: true,
            opportunity: false,
            curiosity: false,
          };

          const tr = TestRenderer.create(
            <RoverSelector
              rovers={rovers}
              roversActive={mixed}
              roverSelection={mixed}
              onRoverSelection={() => {}}
            />
          );

          Object.keys(mixed).forEach(rover => {
            const div = tr.root.findByProps({
              'data-testid': `rover-div-${rover}`,
            });

            if (mixed[rover]) {
              expect(div.props.className).not.toMatch(INACTIVE_STYLE_CLASS);
            } else {
              expect(div.props.className).toMatch(INACTIVE_STYLE_CLASS);
            }
          });
        });
      });
    });
  });
});
