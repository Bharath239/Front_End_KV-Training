import { FC } from 'react';
import './styles.css';

type InputTypes = {
  status: boolean | string;
};

const StatusField: FC<InputTypes> = (props) => {
  return (
    <div className='statusBox' data-testid='statusfield-test'>
      {props.status && <div className='activeStatus'>Active</div>}
      {!props.status && <div className='inactiveStatus'>Inactive</div>}
    </div>
  );
};

export default StatusField;
