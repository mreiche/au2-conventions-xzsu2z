import { createFixture } from '@aurelia/testing';
import { bootstrapTestEnvironment } from '../bootstrap-tests';
import { Echart } from '../../src/components/echart/echart';

describe('EChart component', () => {
  beforeAll(() => {
    bootstrapTestEnvironment();
  });

  it('Renders the element', async () => {
    class ViewModel {
      _chart: HTMLElement;
      _options = [];
    }
    const { appHost, component, startPromise, tearDown } = createFixture(
      '<echart chart.bind="_chart"></echart>',
      ViewModel,
      [Echart]
    );

    await startPromise;

    expect(component._options).not.toBe(undefined);
    expect(component._chart).toBeInstanceOf(HTMLElement);

    await tearDown();
  });
});
