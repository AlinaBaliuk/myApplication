import React from 'react';
import LoginHeader from '../LoginHeader/LoginHeader';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import PropTypes from 'prop-types';

function LoginForm(props){
  function getLogin(){
    fetch("https://api.github.com/")
      .then(response => response.json())
      .then(response => alert('success'));
    document.querySelector('.container-login-form').style.display = 'none';
    document.querySelector('.home-page').style.display = 'block';
  }
  
  return(
    <div className="container-login-form">
      <LoginHeader />
      <form id='loginForm' onSubmit={ e  => { e.preventDefault(); getLogin() }}>
          <InputComponent  type="email" placeholder="write your email" />
          <InputComponent  type="password" placeholder="write your password" />
          <ButtonComponent type="submit" name="Submit" />
      </form>
    </div>
  )
}

InputComponent.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string
}

ButtonComponent.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string
}

export default LoginForm;