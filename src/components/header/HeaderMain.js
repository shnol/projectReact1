import React from 'react';
import cls from './HeaderMain.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

const HeaderMain = (props) => {
  return (
      <header className={cls.header}>
          <div>
              {!props.isAuth ? <Button variant="primary">Log In</Button> : 'Привет,' + props.login}
          </div>
      </header>
  );
}

export default HeaderMain;

