import { render, screen } from '@testing-library/react';

import { SmallButton } from '../SmallButton';

window.resizeTo = function resizeTo(width, height) {
  Object.assign(this, {
    innerWidth: width,
    innerHeight: height,
    outerWidth: width,
    outerHeight: height,
  }).dispatchEvent(new this.Event('resize'));
};

describe('small button testing', () => {
  test('should render component', () => {
    render(<SmallButton>Menu</SmallButton>);
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
  });
});
