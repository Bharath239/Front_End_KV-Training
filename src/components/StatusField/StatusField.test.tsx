import { render, screen } from '@testing-library/react';
import StatusField from './StatusField';

describe('Test for statusfield', () => {
  test('active status', () => {
    render(<StatusField status={true} />);
    const element = screen.getByTestId('statusfield-test');

    expect(element).toHaveTextContent;
  });
  test('inactive status', () => {
    render(<StatusField status={false} />);
    const element = screen.getByTestId('statusfield-test');

    expect(element).toHaveTextContent;
  });
});
