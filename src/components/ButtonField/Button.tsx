import { FC } from 'react';
import './styles.css';

export type InputTypes = {
  value: string;
  type: 'filled' | 'empty';
  onClickHandler?: () => void;
};

const Button: FC<InputTypes> = (props) => {
  return (
    <button className={props.type} onClick={props.onClickHandler} data-testid='button-test'>
      {props.value}
    </button>
  );
};

export default Button;
