import { render, screen } from '@testing-library/react';
import Input, { InputFieldInputTypes } from './Input';

describe('If InputField works properly', () => {
  test('If input works correctly', () => {
    const onChangeHandler = jest.fn();
    const InputFieldProps: InputFieldInputTypes = {
      label: 'name',
      type: 'text',
      placeholder: 'name',
      inputState: 'name',
      onChangeHandler
    };

    render(<Input {...InputFieldProps} />);
    const element = screen.getByTestId('input-test');

    expect(element).toHaveDisplayValue;
  });
});
