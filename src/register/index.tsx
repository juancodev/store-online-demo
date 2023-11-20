import { FormEvent, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../firebase/auth";
import logo from "@/logos/logo_yard_sale.svg";
import styles from "@/styles/Login.module.scss";

type FormElement = FormEvent<HTMLButtonElement | HTMLFormElement>;
type Email = string;
type Password = string;

const Register = () => {
  const form = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (event: FormElement) => {
    event.preventDefault();

    if (form.current) {
      const email: Email = form.current.value || "Empty@empty.com";
      const password: Password = form.current.value || "123456789";
      console.log(email, password);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          console.log(userCredentials.user);
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className={styles.Login}>
      <div className={`${styles["Login-container"]}`}>
        <img src={logo} alt="logo" className={styles.logo} />

        <form className={styles.form} ref={form}>
          <label htmlFor="fullName" className={styles.label}>
            Full name
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Juan Carlos Montilla Sanchez"
            className={`${styles.input} ${styles["input-email"]}`}
          />

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
            Sign up
          </button>
          <Link to="/">Forgot my password</Link>
        </form>

        <button className={styles["secondary-button"]}>
          <Link to="/signup">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Register;
