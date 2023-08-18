import { FC } from 'react';
import './styles.css';

export type DropDownFieldInputTypes = {
  label: string;
  placeholder: string;
  // eslint-disable-next-line no-undef
  options: JSX.Element[];
  onChoice?: (e) => void;
  selectedState: string | number;
};

const DropDownField: FC<DropDownFieldInputTypes> = (props) => {
  return (
    <div className='dropDown' data-testid='dropDown-test'>
      <label>{props.label}</label>
      <select
        className='dropDownSelect'
        placeholder={props.placeholder}
        onChange={props.onChoice}
        value={props.selectedState}
        required
      >
        <option value='' hidden>
          {props.placeholder}
        </option>
        {props.options}
      </select>
    </div>
  );
};

export default DropDownField;
