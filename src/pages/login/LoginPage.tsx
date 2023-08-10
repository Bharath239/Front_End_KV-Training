import { useState, type FC } from 'react';
import './styles.css';
import Input from '../../components/InputField/Input';
import Button from '../../components/ButtonField/Button';
import { useNavigate } from 'react-router-dom';

const LoginPage: FC = () => {
  const [userName, setUserName] = useState('');
  const onUserNameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const [password, setPassword] = useState('');
  const onPasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const onClickHandler = () => {
    if (userName && password) navigate('/employees');
    else setShowError(true);
  };

  return (
    <>
      <div className='leftpanel'>
        <img src='./assets/img/banner.png' />
      </div>
      <div className='rightpanel'>
        <div className='loginbox'>
          <h1 className='kvlogo'>
            <img src='./assets/img/kv-logo.png' />
          </h1>
          <Input
            type={'Text'}
            label={'Username'}
            inputState={userName}
            onChangeHandler={onUserNameChangeHandler}
          ></Input>
          <Input
            type={'Password'}
            label={'Password'}
            inputState={password}
            onChangeHandler={onPasswordChangeHandler}
          ></Input>
          <Button type='filled' label='Submit' onClickHandler={onClickHandler}></Button>
          {showError && <h1>Error</h1>}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
