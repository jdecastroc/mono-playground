import { render } from '@testing-library/react';
import Box from './';

describe('Box', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Box padding="4x" children="Hello World" />);
    expect(baseElement).toBeTruthy();
  });
});
