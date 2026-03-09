import { render } from '@testing-library/react';

import ExpressSuiteExampleBrightchainReactLib from './express-suite-example-brightchain-react-lib';

describe('ExpressSuiteExampleBrightchainReactLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExpressSuiteExampleBrightchainReactLib />);
    expect(baseElement).toBeTruthy();
  });
});
