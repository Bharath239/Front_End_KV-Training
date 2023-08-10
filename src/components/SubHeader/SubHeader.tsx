import { FC } from 'react';
import './styles.css';

type InputTypes = {
  subHeading: string;
  icon: 'add' | 'edit';
  action: string;
};

const SubHeader: FC<InputTypes> = (props) => {
  return (
    <div className='subHeaderBox'>
      <div className='subHeader'>{props.subHeading}</div>
      <div className='actionBox'>
        <div className='actionIcon'>
          {props.icon === 'add' && <img className='plusIcon' src='./assets/img/+.png' />}
          {props.icon === 'edit' && <img className='editIcon' src='./assets/icons/edit.svg' />}
        </div>
        <div className='action'> {props.action}</div>
      </div>
    </div>
  );
};

export default SubHeader;
