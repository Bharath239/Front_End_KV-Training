import { render, screen } from '@testing-library/react';
import DetailsField, { DetailsFieldInputTypes } from './DetailsField';

describe('If DetailsField works properly', () => {
  test('If everything other than status and address field accessed correctly', () => {
    const DetailsFieldProps: DetailsFieldInputTypes = {
      label: 'name'
    };

    render(<DetailsField {...DetailsFieldProps} />);
    const element = screen.getByTestId('detailsField-test');

    expect(element).toHaveTextContent;
  });
  test('If status field and address field accessed correctly', () => {
    const DetailsFieldProps: DetailsFieldInputTypes = {
      label: 'Status',
      address: {
        address_line_1: 'asd',
        address_line_2: 'dsa',
        city: 'sd',
        state: 'dssdsd',
        country: 'sd',
        pincode: 'sd'
      }
    };

    render(<DetailsField {...DetailsFieldProps} />);
    const element = screen.getByTestId('detailsField-test');

    expect(element).toContainHTML;
  });
});
