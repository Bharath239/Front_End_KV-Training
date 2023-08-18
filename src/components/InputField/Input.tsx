import React from 'react';
import './styles.css';

export type InputFieldInputTypes = {
  label?: string;
  type: string;
  placeholder: string;
  inputState: string;
  onChangeHandler: (e) => void;
};

const Input: React.FC<InputFieldInputTypes> = (props) => {
  return (
    <input
      className='inputbox'
      type={props.type}
      placeholder={props.placeholder}
      value={props.inputState}
      onChange={props.onChangeHandler}
      required
      data-testid='input-test'
    />
  );
};

export default Input;
