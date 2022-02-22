import { render } from '@testing-library/react';
import Text from './';

describe('Text', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Text kind="h1" children="Hello World" />);
    expect(baseElement).toBeTruthy();
  });
});
