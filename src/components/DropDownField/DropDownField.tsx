import { FC } from 'react';
import './styles.css';

type InputTypes = {
  label: string;
  placeholder: string;
  // eslint-disable-next-line no-undef
  options: JSX.Element[];
  onChoice: (e) => void;
  selectedState: string;
};

const DropDownField: FC<InputTypes> = (props) => {
  return (
    <div className='dropDown'>
      <label>{props.label}</label>
      <select
        className='dropDownSelect'
        placeholder={props.placeholder}
        onChange={props.onChoice}
        value={props.selectedState}
      >
        <option hidden>{props.placeholder}</option>
        {props.options}
      </select>
    </div>
  );
};

export default DropDownField;
