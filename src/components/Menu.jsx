import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import 'styles/Menu.scss';

const Menu = () => {

  const { setUserAuth } = useAuth();
  const handleLogout = () => {
    setUserAuth([]);
  }

  return (
    <div className="Menu">
      <ul>
        <li>
          <Link to="/checkout" className="title">My orders</Link>
        </li>
        <li>
          <Link to="/account" className="">My account</Link>
        </li>
        <li>
          <Link to="/login" onClick={handleLogout}>Sign out</Link>
        </li>
      </ul>
    </div>
  );
}

export { Menu };