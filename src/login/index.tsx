import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/logos/logo_yard_sale.svg';
import styles from '@/styles/Login.module.scss';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(form.current || undefined);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    };

    if (data.username === '' || data.password === '') {
      alert('Required fields');
    }
    console.log(data);
  };
  return (
    <div className={styles.Login}>
      <div className={`${styles['Login-container']}`}>
        <Image src={logo} alt="logo" className={styles.logo} />

        <form action="/" className={styles.form} ref={form}>
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input type="email" name="email" placeholder="juan@example.com" className={`${styles.input} ${styles['input-email']}`} />

          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input type="password" name="password" placeholder="*********" className={`${styles['input']} ${styles['input-password']}`} />

          <button className={`${styles['primary-button']} ${styles['login-button']}`} onClick={handleSubmit}>
            Log in
          </button>
          <Link href="/">Forgot my password</Link>
        </form>

        <button className={styles['secondary-button']}>
          <Link href="/signup">Sign up</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
