import React from 'react';
import './styles.css';

type InputTypes = {
  label?: string;
  type: string;
  placeholder: string;
  inputState: string;
  onChangeHandler: (e) => void;
};

const Input: React.FC<InputTypes> = (props) => {
  return (
    <input
      className='inputbox'
      type={props.type}
      placeholder={props.placeholder}
      value={props.inputState}
      onChange={props.onChangeHandler}
      required
    />
  );
};

export default Input;
