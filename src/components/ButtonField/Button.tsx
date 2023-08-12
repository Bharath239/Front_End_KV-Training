import { FC } from 'react';
import './styles.css';

type InputTypes = {
  value: string;
  type: 'filled' | 'empty';
  onClickHandler?: () => void;
};

const Button: FC<InputTypes> = (props) => {
  return (
    <button className={props.type} onClick={props.onClickHandler}>
      {props.value}
    </button>
  );
};

export default Button;
