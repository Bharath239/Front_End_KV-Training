import React from 'react';
import './styles.css';

export type DetailsInputBoxInputTypes = {
  label?: string;
  inputState?: string | number;
  placeholder?: string;
  onChangeHandler?: (e) => void;
  visibility?: boolean;
};

const DetailsInputBox: React.FC<DetailsInputBoxInputTypes> = (props) => {
  return (
    <div className='detailsInputBox' data-testid='detailsInputBox-test'>
      <label>{props.visibility && props.label}</label>
      {props.label !== 'Employee ID' && (
        <input
          className='inputboxinDetails'
          placeholder={props.placeholder}
          value={props.inputState}
          onChange={props.onChangeHandler}
          required
        />
      )}
      {props.label === 'Employee ID' && (
        <input
          className={props.visibility ? 'readOnlyInput' : 'notVisible'}
          placeholder={props.placeholder}
          value={props.inputState}
          readOnly
        />
      )}
    </div>
  );
};

DetailsInputBox.defaultProps = {
  visibility: true
};

export default DetailsInputBox;
