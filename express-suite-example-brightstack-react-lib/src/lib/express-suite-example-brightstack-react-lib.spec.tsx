import { render } from '@testing-library/react';

import ExpressSuiteExampleBrightstackReactLib from './express-suite-example-brightstack-react-lib';

describe('ExpressSuiteExampleBrightstackReactLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExpressSuiteExampleBrightstackReactLib />);
    expect(baseElement).toBeTruthy();
  });
});
