import Button, { InputTypes } from './Button';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

describe('If Button works properly', () => {
  test('If label rendered correctly', () => {
    const ButtonProps: InputTypes = {
      value: 'Button',
      type: 'filled'
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    expect(element).toHaveTextContent('Button');
  });
  test('If type rendered correctly', () => {
    const ButtonProps: InputTypes = {
      value: 'Button',
      type: 'filled'
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    expect(element.getAttribute('class')).toBe('filled');
  });
  test('If onClick is triggered', () => {
    const onClickHandler = jest.fn();
    const ButtonProps: InputTypes = {
      value: 'Button',
      type: 'filled',
      onClickHandler
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    fireEvent.click(element);
    expect(onClickHandler).toBeCalled();
  });
  test('Check snapshot', () => {
    const ButtonProps: InputTypes = {
      value: 'Button',
      type: 'filled'
    };

    const element = render(<Button {...ButtonProps} />);

    expect(element).toMatchSnapshot();
  });
});
