import { FC } from 'react';
import './styles.css';

const Header: FC = () => {
  return (
    <div className='navBar'>
      <div className='logoBox'>
        <img className='kvlogonavbar' src='./assets/img/kv-logo.png' />
      </div>
    </div>
  );
};

export default Header;
