import { FC } from 'react';

type InputTypes = {
  label: string;
  type: 'filled' | 'empty';
  onClickHandler: () => void;
};

const Button: FC<InputTypes> = (props) => {
  return (
    <>
      <button className={props.type} onClick={props.onClickHandler}>
        {props.label}
      </button>
    </>
  );
};

export default Button;
