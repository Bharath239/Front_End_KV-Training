import { FC } from 'react';
import './styles.css';
import StatusField from '../StatusField/StatusField';
import { Address } from '../../utils/types';

export type DetailsFieldInputTypes = {
  detail?: string | number | boolean;
  address?: Address;
  label: string;
};

const DetailsField: FC<DetailsFieldInputTypes> = (props) => {
  return (
    <div className='eachDetail' data-testid='detailsField-test'>
      <label className='eachLabel'>{props.label}</label>
      {props.label !== 'Status' && props.label !== 'Address' && (
        <div className='detailContent'>{String(props.detail)}</div>
      )}
      {props.label === 'Status' && <StatusField status={Boolean(props.detail)} />}
      {props.address && (
        <div className='addressDetail'>
          {props.address.address_line_1 +
            ', ' +
            props.address.address_line_2 +
            ', ' +
            props.address.city +
            ', ' +
            props.address.state +
            ', ' +
            props.address.country +
            ', ' +
            props.address.pincode}
        </div>
      )}
    </div>
  );
};

export default DetailsField;
