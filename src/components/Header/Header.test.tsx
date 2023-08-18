import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Test for header', () => {
  test('Header displayed', () => {
    render(<Header />);
    const element = screen.getByTestId('header-test');

    expect(element).toContainHTML;
  });
});
