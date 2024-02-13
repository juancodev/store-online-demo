import React from 'react';
import 'styles/RecoveryPassword.scss';
import 'styles/Login.scss';
import logo from 'logos/logo_yard_sale.svg';

const RecoveryPassword = () => {

  return (
    <div className="login" >
      <div className="form-container" >
        <img src={logo} alt="logo" className="logo" />

        <h1 className="title" >Enter your email!</h1 >

        <form className='form'>
          <input type="email" name="email" placeholder="juan@example.com" className="input input-email" />
        </form>

        <button className="primary-button" >Send</button >

        <p className="resend" >
          <span>Didn't receive the email?</span>
          <a href="/">Resend</a>
        </p >
      </div >
    </div >
  );
}

export { RecoveryPassword };