import { FormEvent, useRef } from "react";
import { Link } from "react-router-dom";
import { auth, createUserWithEmailAndPassword } from "../firebase/auth";
import logo from "@/logos/logo_yard_sale.svg";
import styles from "@/styles/Login.module.scss";

type FormElement = FormEvent<HTMLButtonElement | HTMLFormElement>;
type Email = string;
type Password = string;

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event: FormElement) => {
    event.preventDefault();

    if (form.current) {
      const email: Email = form.current[0].value || "Empty@empty.com";
      const password: Password = form.current[1].value || "123456789";
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          console.log(userCredentials.user);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className={styles.Login}>
      <div className={`${styles["Login-container"]}`}>
        <img src={logo} alt="logo" className={styles.logo} />

        <form className={styles.form} ref={form}>
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input
            type="email"
            name="email"
            placeholder="juan@example.com"
            className={`${styles.input} ${styles["input-email"]}`}
          />

          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className={`${styles["input"]} ${styles["input-password"]}`}
          />

          <button
            className={`${styles["primary-button"]} ${styles["login-button"]}`}
            onClick={handleSubmit}
          >
            Log in
          </button>
          <Link to="/">Forgot my password</Link>
        </form>

        <button className={styles["secondary-button"]}>
          <Link to="/signup">Sign up</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
