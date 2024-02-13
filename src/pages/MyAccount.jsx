import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from 'hooks/useAuth'
import { Header } from 'components/Header'
import 'styles/MyAccount.scss';

const MyAccount = () => {
  const { userAuth } = useAuth();
  const navigate = useNavigate();
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(form.current);
      setLoading(true);

      const data = {
        "email": formData.get("email"),
        "password": formData.get("password")
      }

      if (!userAuth.user) {
        navigate('/login');
      } else {
        const id = userAuth.user.id;
        const userChanged = await axios.patch(`https://store-node-api.onrender.com/api/v1/users/${id}`, data);

        if (userChanged.status === 200) {
          setLoading(false);
          navigate('/');
        }
      }
    } catch (err) {
      setLoading(false);
      setError(true);
      console.log(err);
    }
  }

  return (
    <>
      <Header />
      <div className="MyAccount">
        <div className="MyAccount-container">
          <h1 className="title">My account</h1>
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
            <button className='primary-button login-button' onClick={handleSubmit}>Edit</button>
            {error && <p>There is a error!!</p>}
          </form >
        </div>
      </div>
    </>
  );
}

export { MyAccount };