import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'styles/CreateAccount.scss';
import logo from 'logos/logo_yard_sale.svg';

const CreateAccount = () => {
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
        password: formData.get('password'),
        role: "customer"
      }

      const registered = await axios.post('https://store-node-api.onrender.com/api/v1/users', data);

      if (registered.status === 201) {
        setLoading(true);
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="CreateAccount">
      <div className="CreateAccount-container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">Register</h1>
        {loading && <p>Loading...</p>}
        <form className="form" ref={form}>
          <div>
            <label htmlFor="name" className="label">Name</label>
            <input type="text" id="name" name="name" placeholder="Juan" className="input input-name" />
            <label htmlFor="email" className="label">Email</label>
            <input type="text" id="email" name="email" placeholder="juancodev@example.com" className="input input-email" />
            <label htmlFor="password" className="label">Password</label>
            <input type="password" name="password" id="password" placeholder="*********" className="input input-password" />
          </div>
          <button className='primary-button login-button' onClick={handleSubmit}>Create</button>
        </form >
      </div >
    </div >
  );
}

export { CreateAccount }