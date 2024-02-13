import React, { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from "hooks/useAuth";
import 'styles/Login.scss';
import logo from 'logos/logo_yard_sale.svg';

const Login = () => {
  const { setUserAuth } = useAuth();
  const form = useRef(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);
      const formData = new FormData(form.current);
      const data = {
        email: formData.get('email'),
        password: formData.get('password')
      }
      const logged = await axios.post('https://store-node-api.onrender.com/api/v1/auth/login', data)

      if (logged.status === 200) {
        const user = logged.data;
        setUserAuth(user);
        setLoading(false);
        navigate('/');
      }

    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="Login">
      <div className="Login-container border-test">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">Login</h1>
        {loading && <p>Loading...</p>}
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">Email address</label>
          <input type="email" name="email" placeholder="juan@example.com" className="input input-email" />

          <label htmlFor="password" className="label">Password</label>
          <input type="password" name="password" placeholder="*********"
            className="input input-password" />

          <button className="primary-button login-button"
            onClick={handleSubmit} >
            Log in
          </button>
          <Link to="/recovery-password">Forgot my password</Link>
        </form>

        <button className="secondary-button">
          <Link to="/signup">
            Sign up
          </Link>
        </button>
      </div >
    </div >
  );
}

export { Login }