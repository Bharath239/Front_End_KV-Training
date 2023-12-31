import React from 'react';
import './styles.css';

type InputTypes = {
  label?: string;
  inputState?: string;
  placeholder: string;
  onChangeHandler?: (e) => void;
  visibility?: boolean;
};

const DetailsInputBox: React.FC<InputTypes> = (props) => {
  return (
    <div className='detailsInputBox'>
      <label>{props.visibility && props.label}</label>
      {props.label !== 'Employee ID' && (
        <input
          className='inputboxinDetails'
          placeholder={props.placeholder}
          value={props.inputState}
          onChange={props.onChangeHandler}
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

// import React from 'react';
// import './styles.css';

// type InputTypes = {
//   label?: string;
//   inputState?: string;
//   placeholder: string;
//   onChangeHandler?: (e) => void;
//   idVisibility?: boolean;
// };

// const DetailsInputBox: React.FC<InputTypes> = (props) => {
//   return (
//     <div className='detailsInputBox'>
//       {props.label !== 'Employee ID' && (
//         <>
//           <label>{props.label}</label>
//           <input
//             className='inputboxinDetails'
//             placeholder={props.placeholder}
//             value={props.inputState}
//             onChange={props.onChangeHandler}
//           />
//         </>
//       )}
//       {props.label === 'Employee ID' && (
//         <>
//           <label>{props.idVisibility && props.label}</label>
//           <input
//             className={props.idVisibility ? 'readOnlyInput' : 'notVisible'}
//             placeholder={props.placeholder}
//             value={props.inputState}
//             readOnly
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default DetailsInputBox;
