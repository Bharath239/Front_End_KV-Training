import { FC, useState } from 'react';
import DetailsInputBox from '../DetailsInputBox/DetailsInputBox';
import './styles.css';
import DropDownField from '../DropDownField/DropDownField';
import Button from '../ButtonField/Button';
import { useNavigate } from 'react-router-dom';
import { Employee } from '../../utils/EmployeeList';

type InputType = {
  idVisibility: boolean;
  employee?: Employee;
};

const EmployeeDetailsInputFeild: FC<InputType> = (props) => {
  const [employeeName, setEmployeeName] = useState(props.employee ? props.employee.name : '');
  const onEmployeeNameChange = (e) => setEmployeeName(e.target.value);
  const [joiningDate, setJoiningDate] = useState(props.employee ? props.employee.joiningDate : '');
  const onJoiningDateChange = (e) => setJoiningDate(e.target.value);
  const [experience, setExperience] = useState(props.employee ? props.employee.experience : '');
  const onExperienceChange = (e) => setExperience(e.target.value);
  const [department, setDepartment] = useState('');
  const onDepartmentSelect = (e) => setDepartment(e.target.value);
  const [role, setRole] = useState(props.employee ? props.employee.role : '');
  const onRoleSelect = (e) => setRole(e.target.value);
  const [status, setStatus] = useState(
    props.employee ? (props.employee.isActive ? 'Active' : 'Inactive') : ''
  );
  const onStatusSelect = (e) => setStatus(e.target.value);
  const [address_line_1, setAddressLine1] = useState(
    props.employee ? props.employee.address.address_line_1 : ''
  );
  const onAddressLine1Change = (e) => setAddressLine1(e.target.value);
  const [address_line_2, setAddressLine2] = useState(
    props.employee ? props.employee.address.address_line_2 : ''
  );
  const onAddressLine2Change = (e) => setAddressLine2(e.target.value);
  const [city, setCity] = useState(props.employee ? props.employee.address.city : '');
  const onCityChange = (e) => setCity(e.target.value);
  const [state, setState] = useState(props.employee ? props.employee.address.state : '');
  const onStateChange = (e) => setState(e.target.value);
  const [country, setCountry] = useState(props.employee ? props.employee.address.country : '');
  const onCountryChange = (e) => setCountry(e.target.value);
  const [pincode, setPincode] = useState(props.employee ? props.employee.address.pincode : '');
  const onPincodeChange = (e) => setPincode(e.target.value);

  const departmentOptions = [1, 2, 3].map((item) => <option key={item}>{item}</option>);

  const roleOptions = ['Full Stack', 'Devops', 'UI Engineer'].map((item) => (
    <option key={item}>{item}</option>
  ));

  const statusOptions = ['Active', 'Inactive'].map((item) => <option key={item}>{item}</option>);

  const navigate = useNavigate();

  const onCancel = () => {
    if (props.idVisibility) navigate('employees/:id');
    else navigate('/employees');
  };

  return (
    <div className='detailsbox'>
      <DetailsInputBox
        label='Employee Name'
        placeholder='Employee Name'
        inputState={employeeName}
        onChangeHandler={onEmployeeNameChange}
      />
      <DetailsInputBox
        label='Joining Date'
        placeholder='Joining Date'
        inputState={joiningDate}
        onChangeHandler={onJoiningDateChange}
      />
      <DetailsInputBox
        label='Experience'
        placeholder='Experience'
        inputState={String(experience)}
        onChangeHandler={onExperienceChange}
      />
      <DropDownField
        label='Department'
        placeholder='Choose Department'
        options={departmentOptions}
        onChoice={onDepartmentSelect}
        selectedState={department}
      />
      <DropDownField
        label='Role'
        placeholder='Choose Role'
        options={roleOptions}
        onChoice={onRoleSelect}
        selectedState={role}
      />
      <DropDownField
        label='Status'
        placeholder='Status'
        options={statusOptions}
        onChoice={onStatusSelect}
        selectedState={status}
      />
      <div className='addressBox'>
        <label>Address</label>
        <div className='addressInput'>
          <DetailsInputBox
            inputState={address_line_1}
            onChangeHandler={onAddressLine1Change}
            placeholder='Address Line 1'
          />
          <DetailsInputBox
            inputState={address_line_2}
            onChangeHandler={onAddressLine2Change}
            placeholder='Address Line 2'
          />
          <DetailsInputBox inputState={city} onChangeHandler={onCityChange} placeholder='City' />
          <DetailsInputBox inputState={state} onChangeHandler={onStateChange} placeholder='State' />
          <DetailsInputBox
            inputState={country}
            onChangeHandler={onCountryChange}
            placeholder='Country'
          />
          <DetailsInputBox
            inputState={pincode}
            onChangeHandler={onPincodeChange}
            placeholder='Pincode'
          />
        </div>
      </div>
      <DetailsInputBox
        label='Employee ID'
        inputState={String(props.employee.id)}
        visibility={props.idVisibility}
      />
      <div className='buttonArea'>
        {props.idVisibility && <Button value={'Save'} type='filled' />}
        {!props.idVisibility && <Button value={'Create'} type='filled' />}
        <Button value={'Cancel'} type='empty' onClickHandler={onCancel} />
      </div>
    </div>
  );
};

export default EmployeeDetailsInputFeild;
