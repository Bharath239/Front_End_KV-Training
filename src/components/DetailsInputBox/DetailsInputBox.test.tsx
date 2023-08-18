import { render, screen } from '@testing-library/react';
import DetailsInputBox, { DetailsInputBoxInputTypes } from './DetailsInputBox';

describe('If DetailsField works properly', () => {
  test('If label is Employee ID and visible', () => {
    const DetailsInputBoxProps: DetailsInputBoxInputTypes = {
      label: 'Employee ID',
      visibility: true
    };

    render(<DetailsInputBox {...DetailsInputBoxProps} />);
    const element = screen.getByTestId('detailsInputBox-test');

    expect(element).toContainHTML;
  });

  test('If label is Employee ID and not visible', () => {
    const DetailsInputBoxProps: DetailsInputBoxInputTypes = {
      label: 'Employee ID',
      visibility: false
    };

    render(<DetailsInputBox {...DetailsInputBoxProps} />);
    const element = screen.getByTestId('detailsInputBox-test');

    expect(element).toContainHTML;
  });
  test('If label not ID', () => {
    const onChangeHandler = jest.fn();
    const DetailsInputBoxProps: DetailsInputBoxInputTypes = {
      label: 'Employee Name',
      visibility: false,
      onChangeHandler
    };

    render(<DetailsInputBox {...DetailsInputBoxProps} />);
    const element = screen.getByTestId('detailsInputBox-test');

    expect(element).toContainHTML;
  });
});
