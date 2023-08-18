import { render, screen } from '@testing-library/react';
import DropDownField, { DropDownFieldInputTypes } from './DropDownField';

describe('If DropDownField works properly', () => {
  test('If DropDown works', () => {
    const onChoice = jest.fn();
    const DropDownProps: DropDownFieldInputTypes = {
      label: 'name',
      placeholder: 'name',
      options: [<option key={'item'}>item</option>],
      onChoice,
      selectedState: 'item'
    };

    render(<DropDownField {...DropDownProps} />);
    const element = screen.getByTestId('dropDown-test');

    expect(element).toContainHTML;
  });
});
