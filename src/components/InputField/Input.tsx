import React from 'react';
import './styles.css';

type InputTypes = {
  label: string;
  type: string;
  inputState: string;
  onChangeHandler: (e) => void;
};

const Input: React.FC<InputTypes> = (props) => {
  return (
    <div className='loginblock'>
      <label>{props.label}</label>
      <input
        className='inputbox'
        type={props.type}
        placeholder={props.label}
        value={props.inputState}
        onChange={props.onChangeHandler}
      />
    </div>
  );
};

export default Input;
