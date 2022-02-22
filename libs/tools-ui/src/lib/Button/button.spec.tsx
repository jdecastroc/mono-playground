import { render } from '@testing-library/react';
import Button from './';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Button kind="primary" children="Hello World" />
    );
    expect(baseElement).toBeTruthy();
  });
});
